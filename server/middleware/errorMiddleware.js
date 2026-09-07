const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  let statusCode = 500;
  let message = "Internal server error";

  // Invalid MongoDB ObjectId
  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid ID";
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
  statusCode = 400;

  const errors = Object.values(err.errors).map(
    (error) => error.message
  );

  message = errors.join(", ");
}

  res.status(statusCode).json({
    message,
  });
};

export default errorMiddleware;
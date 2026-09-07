import Program from "../models/Program.js";

const getPrograms = async (req, res, next) => {
  try {
    const programs = await Program.find();

    res.status(200).json(programs);
  } catch (error) {
    next(error);
  }
};


const createProgram = async (req, res, next) => {
  try {
    const { title, description, image, status } = req.body;

    const program = await Program.create({
      title,
      description,
      image,
      status,
    });

    res.status(201).json(program);
  } catch (error) {
  next(error);
}
};

const getProgramById = async (req, res, next) => {
  try {
    const program = await Program.findById(req.params.id);

    if (!program) {
      return res.status(404).json({
        message: "Program not found",
      });
    }

    res.status(200).json(program);
  } catch (error) {
  next(error);
}
};

const updateProgram = async (req, res, next) => {
  try {
    const program = await Program.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!program) {
      return res.status(404).json({
        message: "Program not found",
      });
    }

    res.status(200).json(program);
  } catch (error) {
  next(error);
}
};

const deleteProgram = async (req, res, next) => {
  try {
    const program = await Program.findByIdAndDelete(req.params.id);

    if (!program) {
      return res.status(404).json({
        message: "Program not found",
      });
    }

    res.status(200).json({
      message: "Program deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export { getPrograms, createProgram, getProgramById, updateProgram, deleteProgram, };
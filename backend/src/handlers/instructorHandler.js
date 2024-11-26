const instructorController = require('../controllers/instructorController');

// Crear un instructor
const createInstructorHandler = async (req, res, next) => {
  try {
    const { name, bio, expertise, email, profilePicture, socialLinks } = req.body;

    if (!name || !email || !expertise) {
      const error = new Error('Faltan campos obligatorios.');
      res.status(400);
      return next(error);
    }

    const newInstructor = await instructorController.createInstructor({
      name,
      bio,
      expertise,
      email,
      profilePicture,
      socialLinks
    });

    res.status(201).json(newInstructor);
  } catch (error) {
    next(error);
  }
};

// Obtener todos los instructores
const getInstructorsHandler = async (req, res, next) => {
  try {
    const instructors = await instructorController.getInstructors();
    res.status(200).json(instructors);
  } catch (error) {
    next(error);
  }
};

// Obtener un instructor por ID
const getInstructorByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const instructor = await instructorController.getInstructorById(id);

    if (!instructor) {
      res.status(404).json({ error: 'Instructor no encontrado.' });
      return;
    }

    res.status(200).json(instructor);
  } catch (error) {
    next(error);
  }
};

// Actualizar un instructor
const updateInstructorHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedInstructor = await instructorController.updateInstructor(id, updatedData);

    if (!updatedInstructor) {
      res.status(404).json({ error: 'Instructor no encontrado.' });
      return;
    }

    res.status(200).json(updatedInstructor);
  } catch (error) {
    next(error);
  }
};

// Eliminar un instructor
const deleteInstructorHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedInstructor = await instructorController.deleteInstructor(id);

    if (!deletedInstructor) {
      res.status(404).json({ error: 'Instructor no encontrado.' });
      return;
    }

    res.status(200).json({ message: 'Instructor eliminado correctamente.' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createInstructorHandler,
  getInstructorsHandler,
  getInstructorByIdHandler,
  updateInstructorHandler,
  deleteInstructorHandler
};

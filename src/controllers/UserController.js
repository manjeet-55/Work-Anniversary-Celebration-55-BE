import UserServices from "../services/UserService.js";
const userFunctions = UserServices();

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userFunctions.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userFunctions.getUserById(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const newUser = await userFunctions.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUser = await userFunctions.updateUser(id, req.body);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await userFunctions.deleteUser(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

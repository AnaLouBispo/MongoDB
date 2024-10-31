const User = require("../models/user");

const UserController = {
  create: async (req, res) => {
    try {
      const { nome, email, idade } = req.body;

      const user = await User.create({ nome, email, idade });
      return res.status(200).json({
        msg: "Usuario criado com sucesso",
        user,
      });
    } catch (error) {
      return res.status(500).json({ msg: "Contate o suporte" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, idade } = req.body;
      const userFinded = await User.findById(id);
      if (userFinded) {
        return res.status(404).json({
          msg: "Erro ao achar o usuario",
        });
      }

      User.findByIdAnUpdate(id, {
        nome,
        email,
        idade,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Contate o suporte" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await User.findById(id);
      return res.status(200).json({
        msg: "Usuario Deletado com sucesso",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Contate o suporte" });
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await UserController.find();
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Contate o suporte" });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (user) {
        return res.status(404).json({
          msg: "Erro ao encontrar o usuario",
        });
      }

      return res.status(200).json({
        msg: "Usuario Econtrado",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Contate o suporte" });
    }
  },
};
module.exports = UserController;
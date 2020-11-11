const db = require("../models");
const usuarios = db.usuarios;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  // Validate request
  if (!req.body.usuario) {
    res.status(400).send({
      message: "contenido vacio!"
    });
    return;
  }


  const user = {
    usuario: req.body.usuario,
    contrasenia: req.body.contrasenia,
    rating: req.body.rating,
    genero: req.body.genero,
    rangoprecio: req.body.rangoprecio,
    disponible: req.body.disponible ? req.body.disponible : false
  };



  usuarios.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the usuarios."
      });
    });
};


exports.findAll = (req, res) => {
  const usuario = req.query.usuario;
  var condition = usuario ? { usuario: { [Op.like]: `%${usuario}%` } } : null;

  usuarios.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });
};


exports.findOne = (req, res) => {
  const id = req.params.id;

  usuarios.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  usuarios.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "usuarios updateado."
        });
      } else {
        res.send({
          message:"No se pudo updatear el usuario con id " + id
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo updatear el usuario con id " + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  usuarios.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "usuarios elimiado"
        });
      } else {
        res.send({
          message: "No se pudo eliminar al usuario con id " + id
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo eliminar al usuario con id " + id
      });
    });
};

exports.deleteAll = (req, res) => {
  usuarios.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} usuarios eliminados!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "No se pudo eliminar a los usuarios"
      });
    });
};

exports.findAllPublished = (req, res) => {
  usuarios.findAll({ where: { disponible: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al "
      });
    });
};

const db = require("../models");
const posts = db.posts;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  // Validate request
  if (!req.body.post) {
    res.status(400).send({
      message: "El contenido está vacio!"
    });
    return;
  }


  const post = {
    iduser: req.body.iduser,
    post: req.body.post
  };


  posts.create(post)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al crear el post"
      });
    });
};


exports.findAll = (req, res) => {
  const iduser = req.query.iduser;
  var condition = iduser ? { iduser: { [Op.like]: `%${iduser}%` } } : null;

  posts.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al encontrar los posts."
      });
    });
};


exports.findOne = (req, res) => {
  const id = req.params.id;

  posts.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al recuperar el post con id " + id
      });
    });
};
exports.findUsers = (req, res) => {
  const iduser = req.params.iduser;
  var condition = iduser ? { iduser: { [Op.like]: `%${iduser}%` } } : null;

  posts.findAll({ where: {iduser: iduser} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al encontrar los posts."
      });
    });
};
exports.update = (req, res) => {
  const id = req.params.id;

  posts.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post updateado exitosamente "
        });
      } else {
        res.send({
          message: "No se pudo updatear el post con id " + id
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo updatear el post con id !" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  posts.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post eliminado!"
        });
      } else {
        res.send({
          message: "Post no se pudo eliminar"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Post no se pudo eliminar"
      });
    });
};

exports.deleteAll = (req, res) => {
  posts.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: "Error al remover los posts" });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al remover los posts"
      });
    });
};

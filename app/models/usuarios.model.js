module.exports = (sequelize, Sequelize) => {
  const usuario = sequelize.define("usuario", {
    usuario: {
      type: Sequelize.STRING,
      uniqueKey: true
    },
    contrasenia: {
      type: Sequelize.STRING
    },
    genero: {
      type: Sequelize.INTEGER
    },
    rating: {
      type: Sequelize.INTEGER
    },
    rangoprecio: {
      type: Sequelize.STRING
    },
    disponible: {
      type: Sequelize.BOOLEAN
    }
  });

  return usuario;
};

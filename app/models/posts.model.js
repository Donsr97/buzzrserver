module.exports = (sequelize, Sequelize) => {
  const posts = sequelize.define("post", {
    iduser: {
      type: Sequelize.INTEGER
    },
    post: {
      type: Sequelize.STRING
    }
  });

  return posts;
};

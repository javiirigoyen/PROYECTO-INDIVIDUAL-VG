const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el model
// Luego le injectamos la conexion a sequeliz.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Genre', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false
  });
};
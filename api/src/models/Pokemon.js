const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    sprite: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: { 
      type: DataTypes.INTEGER
    },
    height: { 
        type: DataTypes.INTEGER,
    },
    hp: { 
      type: DataTypes.INTEGER
    },
    attack: { 
      type: DataTypes.INTEGER,
    },
    defense: {
      type: DataTypes.INTEGER,
    },
    speed: { 
      type: DataTypes.INTEGER
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true, 
    }
  });
};

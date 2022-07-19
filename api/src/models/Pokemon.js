const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    img: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: { 
      type: DataTypes.NUMBER
    },
    height: { 
        type: DataTypes.NUMBER,
    },
    hp: { 
      type: DataTypes.NUMBER
    },
    attack: { 
      type: DataTypes.NUMBER,
    },
    defense: {
      type: DataTypes.NUMBER,
    },
    speed: { 
      type: DataTypes.NUMBER
    },
    life: { 
      type: DataTypes.NUMBER,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true, 
    }
  });
};

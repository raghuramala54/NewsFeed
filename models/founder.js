'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Founder extends Model {
    static associate(models) {
      Founder.hasMany(models.Startup, { foreignKey: 'founder_id' });
      Founder.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  }

  Founder.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: DataTypes.TEXT,
    profile_image: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Founder',
    tableName: 'founders',
    timestamps: false, // or true if you want Sequelize to auto-manage createdAt/updatedAt
  });

  return Founder;
};

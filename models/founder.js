'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Founder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Founder.hasMany(models.Startup, { foreignKey: 'founder_id' });
    }
  }
  Founder.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.TEXT,
    profile_image: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Founder',
    timestamps: false,
  });
  return Founder;
};
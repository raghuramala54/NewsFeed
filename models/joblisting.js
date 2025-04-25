'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobListing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JobListing.belongsTo(models.Startup, { foreignKey: 'startup_id' });
    }
  }
  JobListing.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    link: DataTypes.STRING,
    startup_id: DataTypes.UUID,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'JobListing',
    timestamps: false,
  });
  return JobListing;
};
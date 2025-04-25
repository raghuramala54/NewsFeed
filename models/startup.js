'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Startup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Startup.belongsTo(models.Founder, { foreignKey: 'founder_id' });
      Startup.hasMany(models.NewsArticle, { foreignKey: 'startup_id' });
      Startup.hasMany(models.JobListing, { foreignKey: 'startup_id' });
    }
  }
  Startup.init({
    name: DataTypes.STRING,
    tagline: DataTypes.STRING,
    description: DataTypes.TEXT,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    founded_year: DataTypes.INTEGER,
    industry: DataTypes.STRING,
    stage: DataTypes.STRING,
    website: DataTypes.STRING,
    logo_url: DataTypes.STRING,
    pitch_video: DataTypes.STRING,
    founder_id: DataTypes.UUID,
    approved: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Startup',
    timestamps: false,
  });
  return Startup;
};
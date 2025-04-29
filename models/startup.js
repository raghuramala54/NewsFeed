'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Startup extends Model {
    static associate(models) {
      Startup.belongsTo(models.Founder, { foreignKey: 'founder_id' });
      Startup.hasMany(models.NewsArticle, { foreignKey: 'startup_id' });
      Startup.hasMany(models.JobListing, { foreignKey: 'startup_id' });
      Startup.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  }

  Startup.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
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
    founder_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Startup',
    tableName: 'startups',
    timestamps: false, // because you're manually controlling createdAt
  });

  return Startup;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsArticle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      NewsArticle.belongsTo(models.Startup, { foreignKey: 'startup_id' });
    }
  }
  NewsArticle.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    summary: DataTypes.TEXT,
    source_url: DataTypes.STRING,
    startup_id: DataTypes.UUID,
    published_at: DataTypes.DATE,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'NewsArticle',
    timestamps: false,
  });
  return NewsArticle;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsletterSubscriber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NewsletterSubscriber.init({
    email: DataTypes.STRING,
    city: DataTypes.STRING,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'NewsletterSubscriber',
    timestamps: false,
  });
  return NewsletterSubscriber;
};
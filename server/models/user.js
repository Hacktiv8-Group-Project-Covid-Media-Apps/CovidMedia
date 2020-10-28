'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('../helper/bcrypt-user.js');
const { use } = require('../routers/user.js');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          args: true,
          msg: 'Email tidak boleh kosong'
        },
        isEmail: {
          args: true,
          msg: 'Email tidak Valid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password tidak boleh kosong'
        }
      }
    }
  }, {
    hooks:{
      beforeCreate: user => {
        const password = bcrypt.validasiRegister(user.password)
        user.password = password
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
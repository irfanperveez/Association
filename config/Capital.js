const express = require('express')
const  DataTypes  = require('sequelize');
const Sequelize = require('sequelize');

const db = new Sequelize('postgres', 'postgres', 'irfan123', {
    host: 'localhost',
    dialect: 'postgres',
  });
    const Capital = db.define('capital', {
    capitalName:{

        type: DataTypes.STRING,
        unique: true
      }
    },{
      timesstamps: false
    });
    db.sync({alter: true}).then(() =>{

      console.log("database connected");
    
    }).catch((err) => {
      console.log(err);
      console.log("error");
      
    }
    );
    
    module.exports = Capital;


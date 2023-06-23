const  DataTypes  = require('sequelize');
const Sequelize = require('sequelize');

const db = new Sequelize('postgres', 'postgres', 'irfan123', {
    host: 'localhost',
    dialect: 'postgres',
  });

    const Country = db.define('country',{

    countryName: {
  
      type: DataTypes.STRING,
      unique: true
    }
  },{
    timestamps: false
  });
  


  db.sync({alter: true}).then(() =>{
    return Country.findOne({ where: {countryName: 'Spain'}});
  }).then((data) => {
   

  }).catch((err) => {
    console.log(err);
    console.log("error");
    
  }
  );
 
  module.exports = Country;


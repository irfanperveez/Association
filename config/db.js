const express = require('express');
const Capital = require('./Capital');
const Country = require('./Country');


// Create the Sequelize instance and connect to the database


Country.hasOne(Capital);
Capital.belongsTo(Country);
Country.hasMany(Capital);
Capital.belongsTo(Country);
Country.belongsToMany(Capital, {through: 'countrycapital'});
Capital.belongsToMany(Country, {through: 'countrycapital'});

// Capital.create({
//     capitalName:"yiuiui",
//     countryId: 16
// });






 


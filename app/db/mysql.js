const { config } = require('../config/database'); 
const mysql = require('mysql');

const connection = mysql.createConnection(config.mysql);

//Create table if not exists
const createTable = "CREATE TABLE IF NOT EXISTS `people` (`id` int(11) NOT NULL auto_increment,`name` varchar(255)  NOT NULL default '', PRIMARY KEY (`id`));";

connection.query(createTable, (err, results, fields) => {
  if (err) return console.log(err.message);
    console.log('Database created successfully');
  });

module.exports = { connection };
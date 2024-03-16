//Object
const Sequelize = require('sequelize');
//Constructor, the "" is the password
const dotenv = require('dotenv');
dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE,process.env.DATABASE_USER,"",{dialect:"mysql", host:"localhost"});
// To protect your details do "npm install dotenv" it is an environment variable where variables can be declared and used anywhere. You can create a .env file and a .gitignore
// This block of code shows how sequelize test connection
 sequelize.authenticate().then(()=>{
     console.log("connected")
 }).catch(err=>{
   console.log(err)
})

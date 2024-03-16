//after creating the table, create the connection and import mysql2
const mysql = require('mysql2')

//mysql.createPool().getConnection is a whole string but we broke it down.
const pool = mysql.createPool(
    {connectionLimit:10,
        host:"localhost",
        password:"",
        user:"root",
        database:"user_database"
    })

    //instead of exporting pool into the controller, make use of pool right here by creating the function getConnection
function getConnection(){
    return new Promise((resolve,reject)=>{
//the getConnection take two parameters error and connection        
pool.getConnection((err,connection)=>{
    if(err)
    {reject(err)}
    else
    {
        resolve(connection)
    }
})

    })
}

//these lines of code is the same as above
// mysql.createPool().getConnection((err,connection)=>{
//     if(connection){
//         connection.query()
//     }else{
//         console.log()
//     }
// })


function runQueryValues(conn,sqlQuery,values){
   return new Promise((resolve,reject)=>{
conn.query(sqlQuery,values,(err,result)=>{
    if(err){
        reject(err)

    }
    else{
        resolve(result)
    }
})
   })
}

const sql = "insert into product(product_name,unit_price,quantity,total)values(?,?,?,?)";
//Remove these lines of code and push it to the controller file
// async function call(){
//     const connection = await getConnection();
//     try{
//         const result = await runQueryValues(connection, sql,['milo',1,2,3])
//         console.log(result)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// call()

module.exports = {getConnection,runQueryValues,sql}
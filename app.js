const config = require ('config')

const db_conn = config.get('db')

// const scale = config.get('scale')

const fs = require('fs')

const Pool = require('pg').Pool;

// const axios = require('axios')

const pool = new Pool ({

    user: db_conn.user,
    host: db_conn.host,
    database: db_conn.database,
    password: db_conn.password,
    port: db_conn.port
});

let string_from_countries = fs.readFileSync ('data\\countries.json',
{encoding:'utf8', flag:'r'});
data = JSON.parse(string_from_countries)
console.log(data);
for ( let i=0; i<data.length; i++)
{
    pool.query(`select * from sp_insert_country('yaniv')`).then(()=>{
        
    })
}

// for(let i =0; i<data.length; i++) 
//    {     
//         pool.query(`select * from sp_insert_country(${data[i].name})`, (err, res) => {
//            if(err)
//            console.log(err);
//            else 
//             console.log(res.rows)
//         })
//     } 
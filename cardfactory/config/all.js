
module.exports = {
  env: 'development',
  secret: 'cardfactory',
  imgIP : 'http://localhost:3000',
  db: {
    database: 'cardfactory',
    host: 'localhost',
    port: 5306,
    user: 'root',
    password: 'root',
    connectionLimit: 10
  }
};
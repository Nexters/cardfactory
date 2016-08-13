
module.exports = {
  env: 'development',
  secret: 'cardfactory',
  imgIP : 'http://localhost:3000',
  db: {
    database: 'cardfactory',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    connectionLimit: 10
  }
};
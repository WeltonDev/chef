require('dotenv').config()
const Sequelize = require("sequelize");
const Shops = require("../../domain/shops/models/Shops");
const Products = require("../../domain/shops/models/Products");
const Category = require("../../domain/shops/models/Category");

const DB_NAME = process.env.DB_NAME_DEV;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASSWORD;
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

// objeto para guardar a conexão do banco dados
let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
  Shops.init(db);
  Products.init(db);
  Category.init(db);

  Shops.associate(db.models);
  Products.associate(db.models);
  Category.associate(db.models);
  
} catch (error) {
  console.error("Error ao tentar uma conexão com banco dados");
}

async function hasConnection() {
  try {
    await db.authenticate();
    console.log("Banco dados conectado!");
  } catch (error) {
    console.error("Erro ao tentar se conectar ao banco de dados1");
  }
}

Object.assign(db, {
  hasConnection,
});

module.exports = db;

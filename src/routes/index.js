const express = require("express");
const routes = express.Router();

const shopsController = require("../domain/shops/controllers/shopsController");
const productsController = require("../domain/shops/controllers/productsController");
const categoryController = require("../domain/shops/controllers/categoryController");

// routes.get("/login/shops", products.create);
// routes.get("/login/clients", products.create);


routes.get("/shops", shopsController.list);
routes.post("/shops", shopsController.create);
// routes.get("/shops", shops.create);
// routes.get("/shops/:idShops", shops.create);
// routes.get("/shops/:idShops/products", shops.create);
// routes.post("/shops", shops.create);
// routes.put("/shops/:idShops", shops.create);
// routes.delete("/shops/:idShops", shops.create);


routes.get("/products", productsController.list);
routes.post("/products", productsController.create);
// routes.get("/products", products.create);
// routes.get("/products/category/:nameCategory", products.create);
// routes.get("/products/:idProduct", products.create);
// routes.post("/products", products.create);
// routes.put("/products/:idProduct", products.create);
// routes.delete("/products/:idProduct", products.create);


routes.get("/category", categoryController.list);
routes.post("/category", categoryController.create);

// routes.get("/clients", clients.create);
// routes.get("/clients/:id", clients.create);
// routes.post("/clients", clients.create);
// routes.put("/clients/:id", clients.create);
// routes.delete("/clients/:id", clients.create);

// routes.get("/orders", orders.create);
// routes.get("/orders/:idClient", controlerss.create);
// routes.get("/orders/:idClient/:idOrder", controlerss.create);
// routes.post("/orders/:idClient", orders.create);
// routes.put("/orders/:idClient/:idOrder", orders.create);
// routes.delete("/orders/:idClient/:idOrder", orders.create);


module.exports = routes;
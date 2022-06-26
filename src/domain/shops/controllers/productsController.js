const Products = require("../models/Products");

module.exports = {
  async list(req, res) {
    try {
      const products = await Products.findAll({
        include: [
          { association: "shop_owner" },
          { association: "category_product" },
        ],
      });

      res.status(201).json(products);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async create(req, res) {
    try {
      const {
        shop_id,
        name,
        description,
        stock,
        price,
        img,
        data_status,
        category_id,
      } = req.body;
      const newProduct = await Products.create({
        shop_id,
        name,
        description,
        stock,
        price,
        img,
        data_status,
        category_id,
      });

      res.status(201).json({ Product: newProduct });
    } catch (error) {
      console.log(error);
      return res.status(401).json(error);
    }
  },
};

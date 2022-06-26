const Products = require("../models/Products");

module.exports = {
    async list(req, res){
        try {
            const products = await Products.findAll({
                include: { association: "shop_owner" }
            });
            
            res.status(201).json(products);
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    },

    async create(req, res){
        try {
            const {  shop_id, name, description, stock, price, img, data_status } = req.body;
            const newProduct = await Products.create({
                shop_id, name, description, stock, price, img, data_status
            });

            res.status(201).json({ Product: newProduct});
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
    },
    
};
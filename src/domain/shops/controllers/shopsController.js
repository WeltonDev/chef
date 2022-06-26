const Shops = require("../models/Shops");

module.exports = {
    async list(req, res){
        try {
            const shops = await Shops.findAll({
                include: { association: "products" }
            });
            
            res.status(201).json(shops);
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    },

    async create(req, res){
        try {
            const {  name, email, password, img, data_status } = req.body;
            const newShop = await Shops.create({
                name, email, password, img, data_status
            });

            res.status(201).json({ Shop: newShop});
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
    },

};
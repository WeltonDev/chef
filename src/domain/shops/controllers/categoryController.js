const Category = require("../models/Category");

module.exports = {
    async list(req, res){
        try {
            const category = await Category.findAll();
            
            res.status(201).json(category);
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    },

    async create(req, res){
        try {
            const {  name, data_status } = req.body;
            const newCategory = await Category.create({
                name, data_status
            });

            res.status(201).json({ Category: newCategory});
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
    },

};
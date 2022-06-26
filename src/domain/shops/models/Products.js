const { Model, DataTypes } = require("sequelize");

class Products extends Model {
    static init(sequelize){
        super.init({
            shop_id: DataTypes.INTEGER,
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            stock: DataTypes.INTEGER,
            price: DataTypes.DECIMAL,
            img: DataTypes.STRING,
            data_status: DataTypes.INTEGER,
            category_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "products",
        })
    }

    static associate(models){
        this.belongsTo(models.shops, { foreignKey: "shop_id", as: "shop_owner" });
        this.belongsTo(models.category, { foreignKey: "category_id", as: "category_product" });
    }
}

module.exports = Products;
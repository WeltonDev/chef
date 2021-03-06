const { Model, DataTypes } = require("sequelize");

class Shops extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            img: DataTypes.STRING,
            data_status: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "shops"
        })
    }

    static associate(models) {
        this.hasMany(models.products, { foreignKey: "shop_id", as: "products"})
    }
}

module.exports = Shops;
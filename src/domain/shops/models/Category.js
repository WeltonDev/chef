const { Model, DataTypes } = require("sequelize");

class Category extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            data_status: DataTypes.INTEGER,
        },
        {
            sequelize,
            tableName: "category",
            modelName: "category"
        })
    }

    static associate(models) {
        this.hasMany(models.products, { foreignKey: "category_id", as: "category_product"});
    }
}

module.exports = Category;
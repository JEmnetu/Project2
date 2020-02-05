module.exports = function(sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipe", {
        recipe_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        ingredients: {
            type: DataTypes.TEXT
        },
        cook_time: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        public: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,

        },
        flames: {
            type: DataTypes.INTEGER,
            defaultValue: "0"
        },
        direction: {
            type: DataTypes.TEXT,

        }


    });
    return Recipe;
};
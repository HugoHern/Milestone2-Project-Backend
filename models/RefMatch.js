"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RefMatch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RefMatch.init(
    {
      match_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      is_match: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      match_requester: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      potential_match: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "RefMatch",
      tableName: "ref_matches",
      timestamps: false,
    }
  );
  return RefMatch;
};

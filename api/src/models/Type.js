const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('type', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValues: DataTypes.UUIDV4,
        },
    },
    {
        timestamps: false,
      }
    );
};
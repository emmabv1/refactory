module.exports = function(sequelize, DataTypes) {
    var UserParty = sequelize.define("UserParty", {
      idUser: DataTypes.STRING,
      idParty: DataTypes.STRING,
    });

    UserParty.associate = function(models) {
           
            UserParty.hasOne(models.User);
            UserParty.hasOne(models.Party);

            // UserParty.belongsTo(models.User, {foreignKey: "userId"});
            // UserParty.belongsTo(models.Party, {as: 'party'});
      };

    UserParty.sync();

  return UserParty;
}
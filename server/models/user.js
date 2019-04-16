module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		name: {
			type: DataTypes.STRING,
			allowNull: true
		}
	});

	User.associate = (models) => {
		models.User.hasMany(models.Card);
	};

	return User;
};
module.exports = (sequelize, DataTypes) => {
	const Card = sequelize.define('Card', {
		url: {
			type: DataTypes.STRING,
			allowNull: false
		},
		// Start time of bookmark, stored in seconds
		start: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		//End time of bookmark, stored in seconds
		end: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		note: {
			type: DataTypes.STRING,
			allowNull: true
		}
	});

	return Card;
}
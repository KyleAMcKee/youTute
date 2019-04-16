const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();
const port = process.env.PORT || 3000;
//const sequelize = new Sequelize(); // DB stuff needed

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.get('/', (req, res) => {
	res.json({
		url: "https://youtu.be/KKoOIyhJwA4",
		start: '106',
		end: '500',
		note: 'man, that apron looks good',
		cardID: '69',
	});
});

app.listen(port, () => console.log('Server running on port ' + port));
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");

app.get("/", (req, res) => {
	const random = function (min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	};

	const url = `https://jsonplaceholder.typicode.com/todos/${random(1, 50)}`;

	axios
		.get(url)
		.then(function (response) {
			res.json(response.data.title);
		})
		.catch((err) => console.log(err));
});

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
	console.log("Listening on port ", PORT);
});

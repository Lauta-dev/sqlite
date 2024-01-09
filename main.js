import sqlite3 from "sqlite3";
import express from "express";
const app = express();
const db = new sqlite3.Database("./db.sqlite");

app.get("/", (req, res) => {
	db.all("select * from test", (err, row) => {
		res.json(row);
	});
});

app.listen(5151, () => console.log("server on port 5151"));

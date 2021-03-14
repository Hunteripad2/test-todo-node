const { Pool } = require("pg");
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const clientUrl = "http://localhost:3000";

let todoData = [{ id: 0, text: "fg" }];

app.get("/todoData", (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": clientUrl,
    });
    res.json(todoData);
}).get("/db", async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM test_table");
        const results = { results: result ? result.rows : null };
        res.render("pages/db", results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

app.post("/todoData", (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": clientUrl,
    });
    //todoData.push(JSON.parse(req.body));
}).get("/db", async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM test_table");
        const results = { results: result ? result.rows : null };
        res.render("pages/db", results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

app.options("/todoData", (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": clientUrl,
    });
}).get("/db", async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM test_table");
        const results = { results: result ? result.rows : null };
        res.render("pages/db", results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

app.listen(port);

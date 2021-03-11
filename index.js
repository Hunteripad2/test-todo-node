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
});

app.post("/todoData", (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": clientUrl,
    });
    //todoData.push(JSON.parse(req.body));
});

app.options("/todoData", (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": clientUrl,
    });
});

app.listen(port);

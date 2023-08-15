const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello World!');
});

baseRouter.post('/add', (req, res) => {
    const {first, seocond} = req.body;
    if (typeof first !== 'number' || typeof seocond !== 'number') {
        return res.status(400).json({ error: "Both 'first' and 'second' numbers are required." });
    }
    const res = first + seocond;
    res.json({result: res});
});


baseRouter.post('/subtract', (req, res) => {
    const {first, seocond} = req.body;
    if (typeof first !== 'number' || typeof seocond !== 'number') {
        return res.status(400).json({ error: "Both 'first' and 'second' numbers are required." });
    }
    const res = first - seocond;
    res.json({result: res});
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
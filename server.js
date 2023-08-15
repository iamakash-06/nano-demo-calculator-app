const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const baseUrl = '/calculator';

class Calculator {
    static add(first, second) {
        return first + second;
    }

    static subtract(first, second) {
        return first - second;
    }
}

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.status(200).send('Hello World!');
});

baseRouter.post('/add', (req, res) => {
    const { first, second } = req.body;

    if (typeof first !== 'number' || typeof second !== 'number') {
        return res.status(400).json({ error: 'Both operands must be numbers' });
    }

    const result = Calculator.add(first, second);
    res.status(200).json({ result });
});

baseRouter.post('/subtract', (req, res) => {
    const { first, second } = req.body;

    if (typeof first !== 'number' || typeof second !== 'number') {
        return res.status(400).json({ error: 'Both operands must be numbers' });
    }

    const result = Calculator.subtract(first, second);
    res.status(200).json({ result });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.use(baseUrl, baseRouter);

app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});

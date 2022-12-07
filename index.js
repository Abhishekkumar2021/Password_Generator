const express = require('express');
const app = express();
const path = require('path');
const generator = require('generate-password');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/generate', (req, res) => {
    let length, numbers, symbols, uppercase;
    if (req.body.length == '') {
        length = 10;
    } else {
        length = req.body.length;
    }
    if (req.body.numbers == 'on') {
        numbers = true;
    } else {
        numbers = false;
    }
    if (req.body.symbols == 'on') {
        symbols = true;
    } else {
        symbols = false;
    }
    if (req.body.uppercase == 'on') {
        uppercase = true;
    } else {
        uppercase = false;
    }

    const password = generator.generate({
        length: length,
        numbers: numbers,
        symbols: symbols,
        uppercase: uppercase,
        excludeSimilarCharacters: req.body.length <= 20
    });
    res.render('password.ejs', { password: password });
});


app.get('/generate', (req, res) => {
    res.render("generate.ejs");
});
    
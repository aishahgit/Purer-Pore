const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const regCollection = require('./model/model');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const template_path = path.join(__dirname, '../template/views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(template_path));

require('./db/db');

app.set('view engine', 'html'); 
app.set('views', template_path);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../template/views/index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../template/views/login.html'));
});

app.post('/regdata', async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if (password === cpassword) {
            const regData = new regCollection({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                cpassword: req.body.cpassword,
            });

            console.log("the success part" + regData);

           
            const postData = await regData.save();
            console.log("the page part" + postData);
          
            res.status(201).sendFile(path.join(template_path, 'quiz.html'));
        } else {
            res.status(400).json({ error: "Passwords don't match" });
        }

    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../template/views/login.html'));
});

app.post('/loginPage', async (req, res) => {
    const email = req.body.email;
    const password = req.body.loginpassword;

    try {
        const getUser = await regCollection.findOne({ email: email, password: password });
        
        if (getUser) {
            
            res.status(200).sendFile(path.join(template_path, 'quiz.html'));
        } else {
            
            res.status(401).json({ error: "Invalid email or password" });
        }
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});

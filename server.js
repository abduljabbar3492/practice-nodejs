const express = require('express');
const helmet = require('helmet');
const app = express();
app.use(express.json({ limit: '50mb' }));
app.listen(5000, ()=> {
    console.log("App is running")
})
app.use(helmet())
app.post('/post', (req,res) => {
    console.log(req.body);
    res.status(200).send({
        data: req.body
    })
})
app.get('/', (req,res) => {
    console.log(req.body);
    res.send("Hello world")
})
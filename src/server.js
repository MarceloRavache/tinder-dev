const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect("mongodb+srv://teste:teste@cluster0-zqt2z.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3000,()=>{
    console.log("Ready!!");
})
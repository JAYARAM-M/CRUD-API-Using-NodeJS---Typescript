"use strict";
/*const express = require('express')
const mongoose=require('mongoose')
const router=express.Router();
//importing express project , express is a http server short form created by lot of experts, we just import and use lot of functions
const app = express()  //instance of the express
const port = 3000


mongoose.connect("mongodb://localhost:27017/MovieDetails")
.then(()=>{
    console.log('mongoose connected');
})
.catch((error)=>{
    
    console.log('failed');
})

app.use(express.json())

const transmitter= require('./router/MovieDetails')
app.use('/MovieDetails', transmitter)

/*
app.get('/BookDetails',(req,res)=>{
    console.log("Get request")
    res.send("GET REquest")
})



//app.listen is where your server is starts, before this HTTP Server is not started, before this we added just route here
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const MovieDetails_1 = __importDefault(require("./router/MovieDetails"));
const app = (0, express_1.default)(); //instance of the express
const port = 3000;
mongoose_1.default.connect('mongodb://localhost:27017/MovieDetails')
    .then(() => {
    console.log('mongoose connected');
})
    .catch((error) => {
    console.log('failed: ', error);
});
app.use(express_1.default.json());
app.use('/MovieDetails', MovieDetails_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

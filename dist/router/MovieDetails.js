"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
const express = require('express')
const router=express.Router();
const db=require('../models/MovieDetails')


router.get('/',async(req,res)=>{
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const count = await db.countDocuments();
        const skip = (page - 1) * limit;
        const data = await db.find().skip(skip).limit(limit);
          //const data=await db.find()
          res.json({
            data,
            totalMovies: count,
            currentPage: page,
            totalPages: Math.ceil(count / limit)
          })
    }
    catch(err){
        res.send('err '+err)
    }
   
});


router.get('/:id',async(req,res)=>{
    try{
          const data=await db.findById(req.params.id)
          res.json(data)
    }
    catch(err){
        res.send('err '+err)
    }
   
});


router.post('/',async(req,res)=>{
    const sendL=new db({
        Movie_name:req.body.Movie_name,
        Movie_Dir: req.body.Movie_Dir,
        Movie_year:req.body.Movie_year,
        Movie_rating:req.body.Movie_rating,
        Movie_watch:req.body.Movie_watch
        
    });
    try{
        const save=await sendL.save()
        res.json(save)
        
    }
    catch(err){
        res.send("Error happened & Database yet to get Update "+err)
    }
  
});


router.put('/:id',async(req,res)=>{
    try{
          
        const { id } = req.params;
    const { fieldToUpdate, value } = req.body;

    const updatedData = await db.findOneAndUpdate(
      { _id: id },
      { $set: { [fieldToUpdate]: value } },
      { new: true }
    );

    res.json(updatedData);
    }
    catch(err){
        res.send('err '+err)
    }
   
});


router.delete('/:id', async (req, res) =>
{
        try
        {
          const data = await db.findByIdAndRemove(req.params.id);
          res.json(data);
        }
        catch (err)
        {
          res.send('err ' + err);
        }
      }
      );
   




module.exports = router
*/
const express_1 = __importDefault(require("express"));
const MovieDetails_1 = __importDefault(require("../models/MovieDetails"));
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const count = yield MovieDetails_1.default.countDocuments();
        const skip = (page - 1) * limit;
        const data = yield MovieDetails_1.default.find().skip(skip).limit(limit);
        res.json({
            data,
            totalMovies: count,
            currentPage: page,
            totalPages: Math.ceil(count / limit),
        });
    }
    catch (err) {
        res.send(`Error occurred: ${err}`);
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield MovieDetails_1.default.findById(req.params.id);
        res.json(data);
    }
    catch (err) {
        res.send(`Error occurred: ${err}`);
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Movie_name, Movie_Dir, Movie_year, Movie_rating, Movie_watch } = req.body;
    const sendL = new MovieDetails_1.default({
        Movie_name,
        Movie_Dir,
        Movie_year,
        Movie_rating,
        Movie_watch,
    });
    try {
        const save = yield sendL.save();
        res.json(save);
    }
    catch (err) {
        res.send(`Error occurred: ${err}`);
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { fieldToUpdate, value } = req.body;
        const updatedData = yield MovieDetails_1.default.findOneAndUpdate({ _id: id }, { $set: { [fieldToUpdate]: value } }, { new: true });
        res.json(updatedData);
    }
    catch (err) {
        res.send(`Error occurred: ${err}`);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield MovieDetails_1.default.findByIdAndRemove(req.params.id);
        res.json(data);
    }
    catch (err) {
        res.send(`Error occurred: ${err}`);
    }
}));
exports.default = router;

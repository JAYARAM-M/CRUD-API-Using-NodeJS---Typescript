"use strict";
/*
const mongoose=require("mongoose")

const MovieDetailsSchema = new mongoose.Schema({

    Movie_name:{
        type : String,
      required: true
    },
    Movie_Dir:{
        type : String ,
      required: true
    },
    Movie_year:{
        type : Number ,
      required: true
    },
    Movie_rating:{
        type : Number ,
      required: true
    },
    Movie_watch:{
        type:Boolean,
      required: true
    }
    
})

module.exports=mongoose.model('db',MovieDetailsSchema)
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MovieDetailsSchema = new mongoose_1.default.Schema({
    Movie_name: {
        type: String,
        required: true,
    },
    Movie_Dir: {
        type: String,
        required: true,
    },
    Movie_year: {
        type: Number,
        required: true,
    },
    Movie_rating: {
        type: Number,
        required: true,
    },
    Movie_watch: {
        type: Boolean,
        required: true,
    },
});
const MovieDetails = mongoose_1.default.model('db', MovieDetailsSchema);
exports.default = MovieDetails;

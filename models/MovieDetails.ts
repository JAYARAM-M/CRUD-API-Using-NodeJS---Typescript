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

import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IMovieDetails extends Document {
  Movie_name: string;
  Movie_Dir: string;
  Movie_year: number;
  Movie_rating: number;
  Movie_watch: boolean;
}

const MovieDetailsSchema: Schema = new mongoose.Schema({
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

const MovieDetails: Model<IMovieDetails> = mongoose.model<IMovieDetails>(
  'db',
  MovieDetailsSchema
);

export default MovieDetails;

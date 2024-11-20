const mongoose = require("mongoose");

const { Schema } = mongoose;

const reviewSchema = new Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    opinion: {
        type: String,
        required: true,
    },
},
{timestamps: true}
);

const Review = mongoose.model("Review", reviewSchema);

module.exports ={
    Review,
    reviewSchema,
};
const mongoose = require("mongoose");

const { Schema } = mongoose;

const {reviewSchema} = require("./Review");


const vehicleSchema = new Schema({
    vehicle: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    avaliation: {
        type: String,
        required: true,
    },
    information: {
        type: String,
        required: true,
    },
    reviews: {
        type: [reviewSchema],
    },
}, 
{timestamps: true}
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
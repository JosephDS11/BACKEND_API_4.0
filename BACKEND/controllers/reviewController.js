const {Review: ReviewModel} = require("../models/Review");

const reviewController = {

    create: async(req, res) => {
        try{

            const Review = {
                brand: req.body.brand,
                model: req.body.model,
                year: req.body.year,
                description: req.body.description,
                opinion: req.body.opinion,
            };

            const response = await ReviewModel.create(Review);

            res.status(201).json({response, msg: "Analise feita!!!"});

        } catch (error){
            console.log(error);
        }
    },

    getAll: async(req,res) =>{
        try{
            const review = await ReviewModel.find();

            res.json(review);
        } catch(error){
            console.log(error);
        }
    },
      

};

module.exports = reviewController; 
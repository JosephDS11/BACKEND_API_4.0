const mongoose = require("mongoose")

async function main() {
    
    try{
        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://Joseph:Wj4blYzy8PxPu4ak@backendapi4.n5crz.mongodb.net/?retryWrites=true&w=majority&appName=BackEndAPI4"
        );

        console.log("Conectado ao Banco!!!")
    } catch (error){
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;
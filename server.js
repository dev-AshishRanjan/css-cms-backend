const app = require('./app');
const cloudinary = require("cloudinary");
const cors= require("cors");
app.use(cors());

const connectDataBase = require("./config/database");

//connecting to database
connectDataBase();

//config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({ path: "./config/.env" });
}
// const port = process.env.PORT || 5000;
//cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on port ${process.env.PORT}`)
})
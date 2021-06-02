import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();

app.use(express.json({limit: "20mb", extended:true}));
app.use(express.urlencoded({limit: "20mb", extended:true}));

app.use(cors());


const CONNECTION_URL = "mongodb+srv://kalib-hicks:Ktkh.1218958!?.@cluster0.sspdg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify',false);
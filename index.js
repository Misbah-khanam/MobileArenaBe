import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import multer from 'multer'
import mobileRoutes from './routes/mobile.js'
import userRoutes from './routes/user.js'
import orderRoutes from './routes/order.js'

const corsOptions = {
    origin: 'http://localhost:3000',
    // origin: '',
    optionsSuccessStatus: 200, 
};

const app = express();
dotenv.config();
app.use(cors(corsOptions));

// io.attach(app.listen(5000, () => {console.log(`server running on port ${5000}`)}));

app.get("/",(req, res) =>{
    res.send("this is MobileArena api")
})

// app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

var upload = multer({ dest: './uploads' });

app.use('/user',userRoutes)
app.use('/mobile', upload.any(), mobileRoutes)
app.use('/order', orderRoutes)

// app.get('/*', (request, response) => {
//     response.sendFile(path.join(__dirname, '../public/index.html'));
// });


const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>  {app.listen(5000, () => {console.log(`server running on port ${5000}`)})})
    .catch((err) => console.log(err.message))

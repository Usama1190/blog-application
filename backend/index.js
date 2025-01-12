import express from "express";
import dotenv from "dotenv";
import enums from './constant/enums.js'


const app = express();

dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
    try {
        
    } catch (error) {
        res.status(404).send({ status: 404, message: ''})
    }
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

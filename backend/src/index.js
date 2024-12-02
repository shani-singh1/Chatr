import express from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.get('/login', (req, res)=>{
    res.send('Hello from Login..')
})


app.listen(PORT, ()=> {
    console.log(`Server is listening at PORT ${PORT}`);
    
})
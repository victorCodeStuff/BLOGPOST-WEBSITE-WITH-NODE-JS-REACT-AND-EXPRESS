import express from 'express'
import dbServer from './dbServer.cjs';
const app = express();
app.use(express.json())

const PORT = process.env.PORT || 8000;
 
app.get('/', (req , res) => res.send('Hello World'))
dbServer();

app.listen(PORT, ()=>{
    console.log("Server Listening on PORT:", PORT)
})
import express from "express";
import compression from 'express-compression';

const app = express();

app.use(compression({
    brotli: {enabled: true, zlib: {}}
}))

app.get('/stringlarga', (req, res) => {
    let string = "Hola esta es una string exageradamente larga";
    for (let i = 0; i < 10e4; i++) {
        string+= "Hola esta es una string exageradamente larga";        
    }
    res.send(string)
})

const server = app.listen(8080, () => console.log('server running'))
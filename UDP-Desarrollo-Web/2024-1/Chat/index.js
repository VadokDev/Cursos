import express from 'express';
import cors from 'cors';

const database = [];

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/chat', (req, res) => {
  console.log(req);
  database.push(req.body.mensaje);
  res.send(database);
});

app.listen(8080);

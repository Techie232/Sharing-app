const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/route');
const dbConn = require('./db/dbConn');
require('dotenv').config();

const port = process.env.PORT || 3000;

const allowedOrigins = [
   'https://sharing-app-qm2u.vercel.app/'
]

app.use(express.json());
app.use(cors({
   origin: allowedOrigins,
   credentials : true
}));

dbConn();

app.use('/', routes);

app.get('/', (req, res) => {
   res.status(200).json({
      message: "Your server is UP and running",
   })
})

app.listen(port);
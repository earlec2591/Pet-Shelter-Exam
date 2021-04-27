const express = require('express');
// const cors = require('cors');
const app = express();
const port = 8000;

// configure app with functionality 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// access to the data 
require('./config/mongoose.config');

// add in routes
require('./routes/pet.routes')(app);

// app.use(cors());

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})


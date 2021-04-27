const mongoose = require('mongoose');
const db_name = "petdb";

mongoose.connect("mongodb://localhost/" + db_name, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Successfully Connected to Database: " + db_name))
  .catch(err => console.log(err));
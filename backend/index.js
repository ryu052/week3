const express = require('express');
const cors = require('cors');
const connection = require('./db'); //Import from db.js

const app = express();
console.log("process.env.PORT:", process.env.PORT)
const PORT = process.env.PORT || 3000; // if empty it will use 3000 if not will use process.env.PORT aka 5000 in our env 

app.get('/',(req,res)=> {
    res.send(`Server running on port ${PORT}`)
});

app.listen(PORT,()=> {
    console.log(`App listening to port ${PORT}`);
});

// setting main routes 
const mainRoutes = require('./routes/mainRoutes');
app.use("/", mainRoutes);

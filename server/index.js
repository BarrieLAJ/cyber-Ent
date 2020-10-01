const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')




//init express app
const app  = express();

//cors options
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

//using cors on app
app.use(cors(corsOptions))

//database connection
mongoose.connect('mongodb://localhost/cyberEnterprise',{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        .then(()=>{console.log('MongoDB Connected Successfully')})
        .catch(err => console.log("Error connection to MongoDB \n", err));


//express routes

app.use(express.json())


app.use('/api/cyberEnt', require('./routes/api/routes'));



const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('Sever Started on port', PORT);
})
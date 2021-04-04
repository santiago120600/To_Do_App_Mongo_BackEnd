const express = require("express");
const mongoose = require('mongoose');

const PORT = 3030;
const app = express();
const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = {useUnifiedTopology:true, useNewUrlParser: true,useFindAndModify:false};

app.use(express.json());

mongoose.connect("mongodb://localhost/todolist",connectionOptions)
    .then(()=>console.log("Connected successfully"))
    .catch((err)=>console.log(err));

app.use("/todos",todoRoutes);

app.listen(PORT, ()=>{
    console.log("The server is listening on port" + PORT);
});

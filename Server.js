const express = require('express')
require('dotenv').config()
const app = express()
//DB Connection
const mongoose = require('mongoose');
const taskRoutes = require('./routes/TaskRoute.js')
const cors = require('cors');

//Middleware

app.use((req,res,next)=>{
   console.log("PATH " + req.path + " METHOD " + req.method);
   next();
});
//if we passing json format
app.use(express.json())
app.use(cors())
//METHODS
// app.get('/',(req, res) =>{
//     res.send('Server working for Project Management')
//   })
  
//DB Connection & PORT
mongoose.connect(process.env.DB)
.then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log("DB Connected Successfully & App Started at " + process.env.PORT)
});
    })

.catch((error)=>{
    console.log(error)
})

app.use('/api/tasks',taskRoutes)
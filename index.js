const express = require('express');
const cors = require('cors');
const { taskRouter } = require('./route/task.route');
const { connectionDB } = require('./config/db');
const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/tasks', taskRouter);


app.get('/', (req, res) => {
    res.status(200).json({msg: 'Welcome'})
})


app.listen(PORT, async () => {
    try{
        await connectionDB;
        console.log(`Listening on port ${PORT}`);
        console.log(`Database connected successfully`);
    }
    catch(err){
        console.log(err);
    }
})
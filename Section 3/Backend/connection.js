const mongoose = require('mongoose');

const dbName = "mernwss611111";
const url = `mongodb+srv://Adarsh:Adarsh@cluster0.q2zftar.mongodb.net/${dbName}?retryWrites=true&w=majority`;


// Promise - a special type of object which needs to be resolved
// asynchronous function - return promise

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});
module.exports=mongoose; 
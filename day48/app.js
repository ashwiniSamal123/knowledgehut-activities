let express = require('express');
let app = express();
let port = 9082;

app.listen(port, () => console.log(`server started at ${port}`));

app.get('/fetch',(req,res) => {
    res.json({message:"This is get message"});
});
app.put('/update',(req,res) => {
    res.status(202).json({message:"This is put message"});
});
app.post('/store', (req,res) => {
    res.json({message:"This is post message"});
});
app.delete('/remove',(req,res) => {
    res.json({message:"This is delete message"});
});

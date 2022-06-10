let express = require('express');
let app = express();
let port = 9021;

app.listen(port, () => console.log(`service started at ${port}`));
app.get('/', (request, response) => {
    response.json({message : "This is a call to get"});
});
app.post('/', (request, response) => {
    response.json({message : "This is a call to post"});
});
app.put('/', (request, response) => {
    response.json({message : "This is a call to put"});
});
app.delete('/', (request, response) => {
    response.json({message : "This is a call to delete"});
});
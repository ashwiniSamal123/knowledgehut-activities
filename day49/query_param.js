let express = require('express');
let main = express();
let url = require('url');
let port = 9052;

main.listen(port, () => console.log(`server started at ${port}`));

main.get('/dept/:id/emp/:name', (request, res) => {
    let id = parseInt(request.params.id);
    let name  = request.params.name;
    let urlString = url.parse(request.url,true);
    let query = urlString.query;
     console.log(query);
    res.json({message:`${name} from dept with id ${id} is fetched, age = ${query.age}`});
});

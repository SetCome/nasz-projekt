const bodyParser = require('body-parser');
const app = require('express')();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

let owce = [];

app.get('/owce', function (req,res){
    res.json(owce)
})

app.delete('/owce/:id', function(req,res){
    console.log(req.params)
    owce = owce.filter((owca)=> {
        return owca.nr == req.params.id;
    })
    res.send("owca została usunieta");
})

app.post('/owce', function(req, res){
    owce.push(req.body);
    console.log(owce);
    res.send("owca została dodana");
})

app.listen(80, ()=>console.log('serwer jest gotowy: http://localhost:80'));

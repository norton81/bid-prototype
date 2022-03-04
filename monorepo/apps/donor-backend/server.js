console.log('start');
var cors = require('cors')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var uuid = require('uuid');

app.use(bodyParser());
app.use(cors());

var DATA = [
    {field1: 1, field2: 'Hydrogen', field3: 1.0079, field4: 'H'},
    {field1: 2, field2: 'Helium', field3: 4.0026, field4: 'He'},
    {field1: 3, field2: 'Lithium', field3: 6.941, field4: 'Li'},
    {field1: 4, field2: 'Beryllium', field3: 9.0122, field4: 'Be'},
    {field1: 5, field2: 'Boron', field3: 10.811, field4: 'B'},
    {field1: 6, field2: 'Carbon', field3: 12.0107, field4: 'C'},
    {field1: 7, field2: 'Nitrogen', field3: 14.0067, field4: 'N'},
    {field1: 8, field2: 'Oxygen', field3: 15.9994, field4: 'O'},
    {field1: 9, field2: 'Fluorine', field3: 18.9984, field4: 'F'},
    {field1: 10, field2: 'Neon', field3: 20.1797, field4: 'Ne'},
];

app.get('/entity1', (req, res) => {
    res.send(DATA);
});

app.get('/entity1/:id', (req, res) => {
    var result = DATA.find((item) => {
        return item.field1 === parseInt(req.params.id, 10);
    })
    res.send(result);
});

app.delete('/entity1/:id', (req, res) => {
    var index = DATA.findIndex((item) => {
        console.log(item.field1 === parseInt(req.params.id, 10));
        return item.field1 === parseInt(req.params.id, 10);
    })

    if(~index) {
        DATA.splice(index, 1)
    }
    res.send(DATA);
});

app.put('/entity1', (req, res) => {
    const body = req.body;
    res.send(body);
});

app.listen(5001);

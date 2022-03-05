console.log('start');
var cors = require('cors')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());
app.use(cors());

let id = 3;

var store = [
    {
        field1: 1, field2: 'Ivan', field3: 'Ivanov', field4: 12,
        field5: {
            field7: 'Moscow',
            field8: true,
        },
    },
    {
        field1: 2, field2: 'David', field3: 'Abramyan', field4: 22,
        field5: {
            field7: 'Erevan',
            field8: false,
        },
    },
    {
        field1: 3, field2: 'Petr', field3: 'Petrov', field4: 17,
        field5: {
            field7: 'Sankt-Peterburg',
            field8: true,
        },
    },
];

app.get('/entity1', (req, res) => {
    res.send(store);
});

app.get('/entity1/:id', (req, res) => {
    var result = store.find((item) => {
        return item.field1 === parseInt(req.params.id, 10);
    });
    res.send(result);
});

app.delete('/entity1/:id', (req, res) => {
    var index = store.findIndex((item) => {
        console.log(item.field1 === parseInt(req.params.id, 10));
        return item.field1 === parseInt(req.params.id, 10);
    });

    if(~index) {
        store.splice(index, 1)
    }
    res.send(store);
});

app.put('/entity1/:id', (req, res) => {
    const body = req.body;
    var index = store.findIndex((item) => {
        console.log(item.field1 === parseInt(req.params.id, 10));
        return item.field1 === parseInt(req.params.id, 10);
    });
    if(~index) {
        store.splice(index, 1, body);
    }
    res.send(body);
});

app.post('/entity1', (req, res) => {
    const body = req.body;
    body.field1 = ++id;
    store.push(body);
    res.send(body);
});

app.listen(3001);

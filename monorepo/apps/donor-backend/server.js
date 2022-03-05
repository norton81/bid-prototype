console.log('start');
var cors = require('cors')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var uuid = require('uuid');

app.use(bodyParser());
app.use(cors());

var DATA = [
    {
        field1: 1, field2: 'James', field3: 'Smith', field4: 12,
        field5: {
            field6: '94115',
            field7: 'New York',
            field8: true,
        },
    },
    {
        field1: 2, field2: 'Michael', field3: 'Smith', field4: 22,
        field5: {
            field6: '54715',
            field7: 'Los Angeles',
            field8: false,
        },
    },
    {
        field1: 3, field2: 'Robert', field3: 'Smith', field4: 17,
        field5: {
            field6: '94117',
            field7: 'San Antonio',
            field8: true,
        },
    },
    {
        field1: 4, field2: 'Maria', field3: 'Garcia', field4: 33,
        field5: {
            field6: '44175',
            field7: '',
            field8: true,
        },
    },
    {
        field1: 5, field2: 'David', field3: 'Smith', field4: 41,
        field5: {
            field6: '95115',
            field7: 'Phoenix',
            field8: true,
        },
    },
    {
        field1: 6, field2: 'Maria', field3: 'Rodriguez', field4: 45,
        field5: {
            field6: '94715',
            field7: '',
            field8: true,
        },
    },
    {
        field1: 7, field2: 'Mary', field3: 'Smith', field4: 17,
        field5: {
            field6: '94167',
            field7: 'San Diego',
            field8: true,
        },
    },
    {
        field1: 8, field2: 'Maria', field3: 'Hernandez', field4: 55,
        field5: {
            field6: '94715',
            field7: 'Columbus',
            field8: true,
        },
    },
    {
        field1: 9, field2: 'James', field3: 'Johnson', field4: 33,
        field5: {
            field6: '77715',
            field7: 'Indianapolis',
            field8: true,
        },
    },
    {
        field1: 10, field2: 'Neon', field3: 'Martinez', field4: 19,
        field5: {
            field6: '94115',
            field7: 'Charlotte',
            field8: true,
        },
    },
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

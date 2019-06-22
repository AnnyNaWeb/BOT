var twit = require('twit');
var config = require('./config.js');
const randomItem = require('random-item');
var schedule = require('node-schedule');

var Twitter = new twit(config);

var arr = [
    'Uma mão lava a outra e as duas lavam o rosto',
    'Mais vale um gosto do que seis vinténs',
    'De grao em grao a galinha enche o papo'
];

var j = schedule.scheduleJob({hour: 12, minute: 33}, function(){
    Twitter.post('statuses/update',
    {
        status: randomItem (arr)
    }, 
    function(err, data, response){
        console.log(data)
    });
});
var express = require('express');
var fs = require('fs');
var router = express.Router();

var result = new Object();
var messages_map =new Array();

count =0;
message_count=0;

/* GET contacts */
router.get('/:id', function(req, res, next) {
  //console.log("he\n");
  //console.log(req.params.id);
  res.json(result[parseInt(req.params.id)]);
});

router.post('/', function(req, res, next) {

// /console.log(req);

//console.log("contact");
  result[parseInt(count)]=(
    {


      firstName:req.body.firstName,
       lastName:req.body.lastName,
       phone:req.body.phone,
     message: []

    });
    var fs = require('fs');
    fs.writeFile("../../data/"+count+"-Contact.json", JSON.stringify(result[count]), function(err) {
        if(err) {
            return console.log(err);
        }

        //console.log("The file was saved!");
    });


  count++;

  res.json(count-1);


});

router.put('/:id', function(req, res, next) {
  //console.log("entering");
  fileName = "../../data/"+parseInt(req.params.id)+"-Contact.json";


  var obj = JSON.parse(fs.readFileSync(fileName));
  //console.log(obj);
  obj.firstName = req.body.firstName;
  //console.log(obj);
  fs.writeFile(fileName, JSON.stringify(obj), function(err) {
      if(err) {
          return console.log(err);
      }

  });

  //result[parseInt(req.params.id)].firstName=req.body.firstName;
  result[parseInt(req.params.id)]=obj;

  res.json(result[parseInt(req.params.id)]);


});

router.post('/:id/:message',function(req,res,next)
{
  //console.log("start\n");

  fileName = "../../data/"+parseInt(req.params.id)+"-Contact.json";
  var obj = JSON.parse(fs.readFileSync(fileName));
  //console.log("logging..message");
  //console.log(obj);
  obj.message.push(req.params.message);

  //console.log(obj);
  fs.writeFile(fileName, JSON.stringify(obj), function(err) {
      if(err) {
          return console.log(err);
      }

  });

  result[parseInt(req.params.id)]=obj;
  //console.log(result[parseInt(req.params.id)]);

  res.json(obj.message.length-1);

});

router.get('/:id/ask/:message_id', function(req, res, next) {
  fileName = "../../data/"+parseInt(req.params.id)+"-Contact.json";
  var obj = JSON.parse(fs.readFileSync(fileName));
  //console.log("Get message..");
  //console.log(obj);
  result[parseInt(req.params.id)]=obj;

  res.json(result[parseInt(req.params.id)].message[parseInt(req.params.message_id)]);
});


module.exports = router;

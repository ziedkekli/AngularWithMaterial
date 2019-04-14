var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('../models/user');

router.use(bodyParser.json());


router.route('/')

.get((req, res, next) => {
    User.find({}).then(users => res.json(users));
})


.post((req, res, next) => {
    User.create(req.body)
        .then((user) => {
            console.log('User Created ', user);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user);

        }, (err) => next(err))
        .catch((err) => next(err));

})

router.put('/:iduser', (req, res, next) => {
    User.findByIdAndUpdate(req.params.iduser,req.body,{new: true},function(err,resp){
      if(err)throw err;
      res.json(resp);
    })
  });

  router.get('/:iduser', function(req, res, next) {
    User.findById(req.params.iduser,function(err,resp){
      if(err)throw err;
      res.json(resp);
    })
  });

  router.delete('/:iduser', function(req, res, next) {
    User.findById(req.params.iduser).remove(function(err,resp){
      if(err)throw err;
      res.json(resp);
    })
  });


module.exports = router;
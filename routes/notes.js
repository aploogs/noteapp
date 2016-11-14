var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Note = require('../models/note');

router.get('/', function(req, res) {
  Note.find( function(err, notes) {
    res.render('notes', { notes: notes })
  });
});

router.post('/', function(req, res) {
  new Note({
    title: req.body.title,
    description: req.body.description,
    updatedAt: Date.now()
  }).save( function(err, notes) {
      res.redirect('/notes');
  });
});

router.post('/:id', function(req, res) {
  console.log(req.params.id);
  Movie.findById(req.params.id, function(err, note){
    movie.remove( function(){
      res.redirect('/notes');
    })
  })
});

router.get('/:id', function(req, res) {
  Movie.findById(req.params.id, function(err, note) {
    res.render('note', { note: note });
  });
});

router.post('/edit/:id', function(req, res) {
  Movie.findById( req.params.id, function(err, note) {
    movie.title = req.body.title;
    movie.description = req.body.description;
    movie.updatedAt = Date.now();
    movie.save( function () {
      res.redirect('/notes');
    });
  });
});

module.exports = router;

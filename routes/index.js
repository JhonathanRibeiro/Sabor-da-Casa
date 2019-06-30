var conn = require('./../inc/db');
var express = require('express');
var menus = require('./../inc/menus');
var reservations = require('./../inc/reservations');
var contacts = require('./../inc/contacts');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  menus.getMenus().then(results => {
    res.render('index', { 
      title: 'Restaurante Sabor da Casa!',
      menus: results,
      isHome: true
    });//render index
  });
});//router

/* GET contacts */
router.get('/contacts', function(req, res, next){
  contacts.render(req, res);
});

/* POST contacts */
router.post('/contacts', function(req, res, next){
  if (!req.body.name) {
    contacts.render(req, res, 'Digite o nome');
  } else if(!req.body.email) {
    contacts.render(req, res, 'Digite o e-mail');
  }else if(!req.body.message) {
    contacts.render(req, res, 'Digite a mensagem!');
  } else {
    contacts.save(req.body).then(results => {
      req.body = {};
      contacts.render(req, res, null, "Contato enviado com sucesso!");
    }).catch(err => {
      contacts.render(req, res, err.message);
    });
  }
});

/* GET menu */
router.get('/menus', function(req, res, next){

  menus.getMenus().then(results => {
    res.render('menus', {
      title: 'Menu - Restaurante Sabor da Casa!',
      background: 'images/img_bg_1.jpg',
      h1: 'Saboreie nosso menu!',
      menus: results
     });
  });
});

/* GET reservation */
router.get('/reservations', function(req, res, next){
  
  reservations.render(req, res);
  
});
/* POST reservation */
router.post('/reservations', function(req, res, next){
  
  if(!req.body.name) {
    reservations.render(req, res, "Digite o nome!"); 
  } else if(!req.body.email) {
    reservations.render(req, res, "Digite o e-mail!"); 
  }else if(!req.body.people) {
    reservations.render(req, res, "Informe a quantidade de pessoas!"); 
  }else if(!req.body.date) {
    reservations.render(req, res, "Selecione uma data!"); 
  }else if(!req.body.time) {
    reservations.render(req, res, "Selecione um horário!"); 
  } else {
   reservations.save(req.body).then(results => {
    req.body = {};
    reservations.render(req, res, null, "Reserva realizada com sucesso!"); 
   }).catch(err =>{
    reservations.render(req, res, err.message); 
   });
  }
});

/* GET services */
router.get('/services', function(req, res, next){
   res.render('services', {
    title: 'Serviços - Restaurante Sabor da Casa!',
    background: 'images/img_bg_1.jpg',
    h1: 'É um prazer poder servir!'
   });
});

module.exports = router;

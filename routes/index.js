var conn = require('./../inc/db');
var express = require('express');
var menus = require('./../inc/menus')
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
   res.render('contacts', {
    title: 'Contato - Restaurante Sabor da Casa!',
    background: 'images/img_bg_3.jpg',
    h1: 'Diga um Olá!'
   });
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
   res.render('reservations', {
    title: 'Reserva - Restaurante Sabor da Casa!',
    background: 'images/img_bg_2.jpg',
    h1: 'Reserve uma mesa!'
   });
});
/* POST reservation */
router.post('/reservations', function(req, res, next){
   res.send(req.body);
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

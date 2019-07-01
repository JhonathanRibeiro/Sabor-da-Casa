var express = require('express');
var users = require('./../inc/users');
var admin = require('./../inc/admin');
var router = express.Router();

//middleware responsável por autenticar os acessos
//do usuário, bloquenado o acesso direto pela url
//forçando redirecionamento para a página de login.
router.use(function(req, res, next){
    if(['/login'].indexOf(req.url) === -1 && !req.session.user){
        res.redirect("/admin/login");
    } else {
        next();
    }
});

//middleware responsável por chamar o método getMenus
//e passar o menu dinâmico para todas as rotas da administração;
//Passado o req como parâmetro para validar a página ativa.
router.use(function(req, res, next){
  req.menus = admin.getMenus(req);
  next();
});

//rota de logout, limpa(deleta) a sessão e redireciona
// o user para a rota de login 
router.get('/logout', function(req, res, nex){
    delete req.session.user; 
    res.redirect("/admin/login");
});

//Home page Administração - Rota principal
router.get('/', function(req, res, next){
    res.render("admin/index", {
        menus: req.menus
    });
});

//Página de login - configurações de autenticação de usuário
//validação de e-mail, senha, campos vazios e redirecionamento.
router.post('/login', function(req, res, next){
    if (!req.body.email) {
        users.render(req, res, "Você precisa informar o e-mail!");
    } else if(!req.body.password) {
        users.render(req, res, "Você precisa informar a senha!");
    } else {
        users.login(req.body.email, req.body.password).then(user =>{
          
            req.session.user = user;
          
            res.redirect("/admin");
        }).catch(err =>{
        users.render(req, res, err.message || err);
        });
    }
});
//página de login - responsável por renderizar
//a administração da página de login.
router.get('/login', function(req, res, next){
    users.render(req, res, null);
});
//responsável por renderizar a administração
//da página de contatos
router.get('/contacts', function(req, res, next){
    res.render("admin/contacts", {
        menus: req.menus
    });
});
//responsável por renderizar a administração dos e-mails
router.get('/emails', function(req, res, next){
    res.render("admin/emails", {
        menus: req.menus
    });
});
//responsável por renderizar a administração da 
//dos menus
router.get('/menus', function(req, res, next){
    res.render("admin/menus", {
        menus: req.menus
    });
});
//responsável por renderizar a administração das reservas. 
router.get('/reservations', function(req, res, next){
    res.render("admin/reservations", {
        date:{},
        menus: req.menus
    });
});
//responsável por renderizar a administração dos usuários 
router.get('/users', function(req, res, next){
    res.render("admin/users", {
        menus: req.menus
    });
});

module.exports = router;
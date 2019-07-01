module.exports = {
  getMenus(req) {

      let menus = [
          {
              text: "Tela Inicial",
              href: "/admin/",
              icon: "home",
              active: false
          },
          {
              text: "Menu",
              href: "/admin/menus",
              icon: "cutlery",
              active: false
          },
          {
              text: "Reservas",
              href: "/admin/reservations",
              icon: "calendar-check-o",
              active: false
          },
          {
              text: "Contatos",
              href: "/admin/contacts",
              icon: "comments",
              active: false
          },
          {
              text: "Usuários",
              href: "/admin/users",
              icon: "users",
              active: false
          },
          {
              text: "E-mails",
              href: "/admin/emails",
              icon: "envelope",
              active: false
          }
      ];
      //mapea o array concatena a url vinda do req.url com /admin
      //e atribui à variável active o valor true. Validando assim a 
      //class active nos links do sidebar menu.
      menus.map(menu =>{
        if(menu.href === `/admin${req.url}`) menu.active = true;
      });

      return menus;

  }
};
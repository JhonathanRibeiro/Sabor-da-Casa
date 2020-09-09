# Sabor da Casa
Site Restaurante Sabor da Casa com sistema de reservas (Projeto em andamento).<br>
`Nodejs` `Redis` `Bootstrap` `MySQL` `HTML5` `CSS3` `Jquery` `Express`

![image](https://user-images.githubusercontent.com/37172038/92548564-bb6aa500-f22d-11ea-967c-2998e6cfc3bc.png)

## Sobre o projeto
O site Sabor da Casa possui 5 páginas, um sistema administrativo e é totalmente dinâmico. Você pode alterar por meio do painel administrativo 
qualquer informação do site.
<br>
Logo na página inicial, é possível realizar reservas de mesas através do formulário `Reserva de Mesa` localizado à direita do header.<br>
Também é possível realizar reservas no menu reserva.
<br>
Logo abaixo do cabeçalho do site, você pode observar uma prévia do cardápio com os pratos populares, em seguida os serviços ofertados pela empresa e também uma 
seção especial para realizar a captura de e-mails por meio da Newsletter. Este projeto ainda está em andamento e irá contar com recursos 
ainda mais avançados, como por exemplo, avaliações, área de suporte ao cliente dentre outros.

### Tecnologias utilizadas
- Front: `Bootstrap 4` e `Jquery`;
- Back:  `Nodejs[Express]`, `MySQL` e `Redis`.

### Requisitos
<p>Para rodar o projeto corretamente, você deve preencher todos os requisitos, caso já possua todos os apps abaixo
siga para a próxima etapa.</p>

- Nodejs;
- Git;
- Redis;
- Xampp;

### Instalação
- Clone o repositório em sua máquina;<br/>
``` git clone  https://github.com/JhonathanRibeiro/Sabor-da-Casa.git ```
- Acesse a pasta do projeto e execute o comando<br/>
``` npm install ```
- Após instalar as dependências, acesse:
``` public/db/ ``` nele está o backup do banco ``` mysql.sql ``` <br/>
em seguida, compacte esse arquivo em formato .zip
- Execute o Xampp(Deixe o servidor e o mysql rodando), acesse <br/>
``` localhost/phpmyadmin/ ``` 
- No phpmyadmin crie uma nova base de dados com o nome ``` saboroso ``` <br/>
** em seguida, vá em importar no menu superior e selecione o arquivo mysql.sql.zip <br> 
** pronto, sua base de dados está criada!

### Rodando o projeto
- Após todas as configurações, abra um terminal, acesse a pasta raiz do projeto e execute o comando<br>
` npm start `
- Se tudo estiver OK acesse `localhost:3000/` e divirta-se! <br>
Para acessar o painel administrativo do site, clique no ícone de cadeado no canto superior do menu so site
ou acesse ``` localhost:3000/admin/login/ ``` user: admin password: 1234

# Client Perfil GC

## Para instalação do projeto, rodar o comando;
```
npm install
```

## No arquivo env.js na raíz do projeto, configure-o de acordo com seu IP e PORTA que a API está rodando;
```
HOST_API : "http://192.168.1.4:8000/api", // API URL
```

## A API também está rodando no Heroku, e para utilizar, no arquivo ENV.JS, deverá conter o seguinte código;
```
HOST_API: "https://evening-lowlands-14161.herokuapp.com/api" //API DO HEROKU
```

### Compilar para desenvolvimento
```
npm run serve
```

### OBS - Na parte de Avatar, caso você não tenha subido nenhum, ele irá priorizar os dados mockados; Caso você tenha subido algum avatar, ele irá proirizar o que está no banco de dados, e irá ignorar os dados mockados;

### OBS2 - Como Heroku não tem Storage para armazenamento de imagens, utilizei o serviço Amazon AWS S3 para armazenar os avatares;


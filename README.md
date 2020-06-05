# Client Perfil GC

## Para instalação do projeto, rodar o comando;
```
npm install
```

## Copie o arquivo env.example.js e crie o arquivo env.js na raíz do projeto e configure-o de acordo com seu IP e PORTA que a API está rodando;
```
HOST_API : "http://192.168.1.4:8000/api", // API URL
```

### Compilar para desenvolvimento
```
npm run serve
```

### OBS - Na parte de Avatar, caso você não tenha subido nenhum, ele irá priorizar os dados mockados; Caso você tenha subido algum avatar, ele irá proirizar o que está no banco de dados, e irá ignorar os dados mockados;


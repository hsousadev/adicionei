# Adicionei
App web de gerenciamento de contatos. 

![adicionei-cover](https://user-images.githubusercontent.com/54003876/233363181-52c966fe-458b-4c26-9260-e2d951044243.png)


## 🎨 Figma: 

https://www.figma.com/file/GXvmQEUfX0LTlx3Axot7mC/Adicionei?node-id=6%3A746&t=b1xV6OrVPRfCXh04-1

## 🚀 Build

1. É necessário ter os seguintes requisitos pré-instalados
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/)

<br />

2. No seu terminal clone o repositório 

```
git clone https://github.com/justhenrique/adicionei.git
```

3. Acesse a pasta
```
cd adicionei
```

4. Instale as dependências
```
npm install && npm install -g json-server
```

5. Rode o servidor em um terminal na porta 3004
```
json-server --watch server/db.json --port 3004
```

6. Rode o site em outro terminal
```
npm run dev
```

7. Pronto! O site estará disponível no localhost padrão ✅

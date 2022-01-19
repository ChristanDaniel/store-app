<h1 align="center">
  <img width='70px'src="https://user-images.githubusercontent.com/80167149/149632640-29d93069-baa5-4e74-8e67-4f90aa04a6f1.png" align="center"/>
   Store-app
</h1>

## 💻 Projeto
Projeto Ig.Store é uma loja de produtos eletrônicos que foi utilizado para treinar as ferramentas/tecnologias descritas abaixo:


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:
- [React](https://reactjs.org) <img align='left' alt='React' width='35px' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"/>

- [Next.js](https://nextjs.org/) <img align='left' alt='Next' width='31px' src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png"/>

- [TypeScript](https://www.typescriptlang.org/) <img align='left' alt='TypeScript' width='35px' src="https://img.icons8.com/color/48/000000/typescript.png"/>

- [Styled-Components](https://styled-components.com/) <img align='left' alt="styled-components" width='35px' src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" />

## 📂 Estrutura

- `pages/` -> Pasta de rotas do app.
- `public/` -> Pasta de Imagens.
- `src/` 
- `src/components` -> Pasta de todos componentes do app.
- `src/Features` -> Pasta de todas Features do app.
- `src/features/ProductContainerContext.tsx` -> arquivo que compartilha dados entre todos os componentes/features do app, utilizando hook useContext do react.

---
- `pages/` -> Pasta de rotas do app.
- `pages/App.tsx` -> Arquivo principal.
- `pages/index/` -> página Home.
- `pages/Login` -> página de login.
- `pages/Cart` -> página do carrinho do cliente.
- `pages/Sucess` -> página da compra finalizada com sucesso pelo cliente.
- `pages/Product/[id].tsx` -> página de detalhes do produto.


https://user-images.githubusercontent.com/80167149/150040855-f8a02319-97a8-4616-b7a9-b61b645f359e.mp4

https://user-images.githubusercontent.com/80167149/150041256-1a9c1074-df18-4c0e-b1d5-0f9756e21696.mp4

### 🔗 Funcionalidades

- [x] **O usuário pode fazer login com Nome e Email.**
- [x] **O usuário pode Salvar o item favorito no carrinho.**
- [x] **O usuário pode abrir Modal para verificar os itens salvo**: Biblioteca [React-Modal](https://github.com/reactjs/react-modal) utilizada para criação do modal.
- [x] **Ao fechar a janela do navegador o login e os itens favoritos serão armazenadas e quando o Usuário retornar, os dados serão recuperados.**
- [x] **O usuário pode Excluir um item no carrinho.**
- [x] **O usuário pode Excluir Todos itens do carrinho ao mesmo tempo.**
- [x] **O usuário pode verificar seu CEP.** : API [ViaCEP](https://viacep.com.br) utilizada para essa verificação.


## 📥 Instalação e execução

Faça um clone desse repositório e acesse o diretório.

```bash
$ git clone https://github.com/ChristanDaniel/store-app.git
```
```bash
# Instalando as dependências
$ yarn

# Executanto aplicação
$ yarn dev

```
Tudo Pronto? Agora é só acessar [`localhost:3000`](http://localhost:3000) do seu navegador.


---
Feito com 🧡 by Christian Daniel 👋🏻

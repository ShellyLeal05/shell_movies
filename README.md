# 🎬 Shell Movies

**Desenvolvido por [Shelly Leal](https://github.com/ShellyLeal05)**

## 📌 Sobre o Projeto

O **Shell Movies** é uma plataforma moderna de recomendação e visualização de filmes, inspirada no layout da HBO Max e outras plataformas de streaming. O projeto tem como objetivo oferecer uma experiência imersiva para os usuários, permitindo explorar, favoritar e obter recomendações personalizadas de filmes.

Este repositório foi desenvolvido como parte do projeto final da disciplina **DCC7004 - Arquitetura e Tecnologias de Sistemas Web**.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **React.js** - Biblioteca principal para construção da interface
- **Vite** - Ferramenta de build rápida para projetos React
- **React Router** - Gerenciamento de rotas para navegação entre páginas
- **Styled Components / CSS Modules** - Estilização moderna e otimizada
- **TMDb API** - Fonte de dados para filmes, incluindo pôsteres, trailers e descrições
- **Axios** - Para realizar requisições HTTP
- **Express.js (Backend)** - Gerenciamento de usuários e sistema de recomendação
- **MongoDB / Firebase** - Armazenamento de usuários e favoritos

## 📥 Como Rodar o Projeto

### 🔧 Pré-requisitos
Antes de começar, você precisa ter instalado na sua máquina:
- **[Node.js](https://nodejs.org/)**
- **[Git](https://git-scm.com/)**

### 🛠️ Passos para executar

1. **Clone este repositório**
   ```bash
   git clone https://github.com/ShellyLeal05/shell_movies.git
   ```

2. **Acesse a pasta do projeto**
   ```bash
   cd shell_movies
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Crie um arquivo `.env` e configure suas chaves da API TMDb**
   ```
   VITE_API=https://api.themoviedb.org/3/movie/
   VITE_API_KEY=sua_api_key_aqui
   VITE_IMG=https://image.tmdb.org/t/p/w500
   ```

5. **Inicie o projeto**
   ```bash
   npm run dev
   ```
   O projeto estará rodando em `http://localhost:5173/`.

---

## 🎯 Funcionalidades

- 🔍 **Busca dinâmica de filmes**
- ⭐ **Adicionar filmes aos favoritos**
- 🎞 **Visualizar trailers diretamente da interface**
- 💡 **Recomendações baseadas no histórico do usuário**
- 🎨 **Layout responsivo e intuitivo**

## 📸 Capturas de Tela

<div>
  <img align="center" height "180em" src="https://github.com/user-attachments/assets/ec5a8c49-e8c0-4c1c-a749-60a62a110c7b" width="750"/>
<div>
  
<div>
  <img align="center" height "180em" src="https://github.com/user-attachments/assets/dfd3a664-dfff-4fb3-adf5-e035cccb69f2" width="750"/>
<div>

---

## 📜 Licença

Este projeto foi desenvolvido por **Shelly Leal** e está disponível para estudo e uso pessoal.

Se gostou do projeto, ⭐ deixe um star no repositório! 😊

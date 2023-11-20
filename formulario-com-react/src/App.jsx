import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div id='home'>
      <h1>Página Inicial</h1>
      <p>Bem-vindo à pesquisa de plataforma de jogos digitais.</p>
      <Link to="/form">Ir para o formulário</Link>
    </div>
  );
}

function Form() {
  return (
    <div id='form'>
      <h1>Formulário</h1>
    <html lang="pt">
      <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="App.css" />
      </head>
      <body>
        <h1 id="title">Pesquisa Plataforma de Jogos Digitais</h1>
        <p id="description">Obrigado pelo seu tempo! Essa pesquisa nos ajudará a conhecer melhor os nossos clientes.</p>
        <div>
          <form id="survey-form">
            <fieldset>
              <label id="name-label">
                Nome: <input id="name" type="text" required placeholder="Nome" />
              </label>
              <label id="email-label">
                Email: <input id="email" type="email" required placeholder="E-mail" />
              </label>
              <label id="number-label">
                Idade: <input id="number" type="number" min="10" max="100" required placeholder="Idade" />
              </label>
              <label>
                Qual sua principal ocupação?
                <select id="dropdown">
                  <option value="1">(Escolha um)</option>
                  <option value="2">Cursando ensino fundamental</option>
                  <option value="3">Cursando ensino médio</option>
                  <option value="4">Cursando ensino superior</option>
                  <option value="5">Trabalho em tempo integral</option>
                  <option value="6">Estágio</option>
                  <option value="7">Outro</option>
                </select>
              </label>
              <div>
                <label>Você recomendaria nossa plataforma para um amigo?</label>
                <input type="radio" name="recomendation" value="recommend" className="inline" />Recomendaria
                <label>
                  <input type="radio" name="recomendation" value="not-recommend" className="inline" />Não recomendaria
                </label>
                <label>
                  <input type="radio" name="recomendation" value="not-know" className="inline" />Não tenho certeza
                </label>
              </div>
              <label>Quais seus gêneros de jogos favoritos?</label>
              <label>
                <input type="checkbox" value="sectors" className="inline" />FPS
              </label>
              <label>
                <input type="checkbox" value="sectors" className="inline" />RPG
              </label>
              <label>
                <input type="checkbox" value="sectors" className="inline" />Simulação
              </label>
              <label>
                <input type="checkbox" value="sectors" className="inline" />Puzzle
              </label>
              <div>
                <label>Algum comentário ou sugestão?</label> <textarea id="comentarios" placeholder="Insira seu comentário aqui..." name="comentario"></textarea>
              </div>
              <div>
                <button type="submit" id="submit" className="enviar">
                  Enviar
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </body>
    </html>
      <Link to="/about">Ir para a página Sobre</Link>
    </div>
  );
}

function About() {
  return (
    <div id='about'>
      <h1>Sobre</h1>
      <p>Esta é a página de informações sobre a pesquisa de plataforma de jogos digitais.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}

function NotFound() {
  return (
    <div id='notFound'>
      <h1>Rota Inválida</h1>
      <p>A página que você está procurando não existe.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}

function App() {
  return (
    <Router id='rotas'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
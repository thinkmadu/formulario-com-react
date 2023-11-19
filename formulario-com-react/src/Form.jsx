import React from 'react';

function Form() {
  return (
    <div>
      <h1 id="title">Pesquisa Plataforma de Jogos Digitais</h1>
      <p id="description">Obrigado pelo seu tempo! Essa pesquisa nos ajudará a conhecer melhor os nossos clientes.</p>
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
            <label>
              <input type="radio" name="recomendation" value="recommend" className="inline" />Recomendaria
            </label>
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
            <label>Algum comentário ou sugestão?</label>
            <textarea id="comentarios" placeholder="Insira seu comentário aqui..." name="comentario" />
          </div>
          <div>
            <button type="submit" id="submit" className="enviar">
              Enviar
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
    }

export default Form;

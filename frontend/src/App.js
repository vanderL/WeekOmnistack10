import React, {useState} from 'react'
import './styles/global.css'
import './styles/App.css'
import './styles/Siderbar.css'
import './styles/Main.css'

function App() {
  
  return (
    <div id="app">
      <aside>
        
        <strong>Cadastrar</strong>
        <form action="">
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required type="text"/>
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required type="text"/>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="">Latitude</label>
              <input name="Latitude" id="Latitude" required type="text"/>
            </div>

            <div className="input-block">
              <label htmlFor="Longitude">Longitude</label>
              <input name="Longitude" id="Longitude" required type="text"/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      
      </aside>
      
      <main>
        <ul>
          
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/12676148?s=460&u=504ebfc6d45040522a5dfbb5e8446a32b6aea105&v=4" alt=""/>
              <div className="user-info">
                <strong>Vander Lima</strong>
                <span>ReactJS, React Native,  Node.Js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores Tecnologias</p>
            <a href="https://github.com/vanderL">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/12676148?s=460&u=504ebfc6d45040522a5dfbb5e8446a32b6aea105&v=4" alt=""/>
              <div className="user-info">
                <strong>Vander Lima</strong>
                <span>ReactJS, React Native,  Node.Js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores Tecnologias</p>
            <a href="https://github.com/vanderL">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/12676148?s=460&u=504ebfc6d45040522a5dfbb5e8446a32b6aea105&v=4" alt=""/>
              <div className="user-info">
                <strong>Vander Lima</strong>
                <span>ReactJS, React Native,  Node.Js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores Tecnologias</p>
            <a href="https://github.com/vanderL">Acessar perfil no github</a>
          </li>


        </ul>
      </main>
    </div>
  );
}

export default App;

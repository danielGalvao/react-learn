'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input type='search' placeholder='Digite o nome do usuário no GitHub' />
    </div>
    <div className='user-info'>
      <img src='https://avatars3.githubusercontent.com/u/5161645?v=4' />
      <h2>
        <a href='https://github.com/danielGalvao'>Daniel Galvao</a>
      </h2>
      <ul>
        <li> - Repositorios: 46 </li>
        <li> - Seguidores: 32 </li>
        <li> - Seguindo: 64 </li>
      </ul>

      <div className='actions'>
        <button>Ver repositórios</button>
        <button>Ver favoritos</button>
      </div>

      <div className='repos'>
        <h2>Repositorios</h2>
        <ul>
          <li><a href=''>Nome do repositorio</a></li>
        </ul>
      </div>

      <div className='starred'>
        <h2>Favoritos</h2>
        <ul>
          <li><a href=''>Nome do repositorio</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default App

import './App.css'
import logoMarca from '/logo-marca.svg'

//icones
import iconeMenu from '/icons/arrowMenu.svg'


function App() {

  return (
    <>
      <header className='mainHeader'>
        <div>
          <img 
            src={logoMarca}
            alt="" 
          />
          <nav className='navMenu'>
            <ul>
              <li><img src={iconeMenu} className='iconMenu'/>Portfólio</li>
              <li><img src={iconeMenu} className='iconMenu' />Contatos</li>
              <li><img src={iconeMenu} className='iconMenu' />Sobre nós</li>
            </ul>
          </nav>
        </div>
        <h1 className='textHeaderCopy'>
          Que tal <span>revolucionar</span> suas<br />
          vendas e <span>Thaus?</span>
        </h1>
        <button className='buttonHeaderSeeProject'>
          VER PROJETOS
        </button>
      </header>
      <main className='content'>
        <h2 className='textProjectTitle'>
          Projetos da agência
        </h2>
      </main>
    </>
  )
}

export default App

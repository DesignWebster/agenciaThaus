import './App.css'

import logoMarca from '/logo-marca.svg'

//icones
import iconeMenu from '/icons/arrowMenu.svg'

//componentes
import CardProject from './components/cards/cardProject'
import ButtonNavServices from './components/buttons/button-nav-projects/buttonNavServices'

//imagens
import LoggoRightTop from '/logoMarcaLateral.png'

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
              <li>Portfólio</li>
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
      <main className='content' id='contentWrapper'>

        <h2 className='textProjectTitle'>
          Projetos da agência
        </h2>
        <div className='optionsProject'>
          <ButtonNavServices
            service='Identidade Visual'
          />
          <ButtonNavServices
            service='Social media'
          />
        </div>
        <div className='sectionCardsProjects'>
          <CardProject 
            fileImgUrl='/cardImages/card1.png'
          />
          <CardProject 
            fileImgUrl='/cardImages/card2.png'
          />
          <CardProject 
            fileImgUrl='/cardImages/card2.png'
          />
          <CardProject 
            fileImgUrl='/cardImages/card1.png'
          />
                    <CardProject 
            fileImgUrl='/cardImages/card1.png'
          />
        </div>

      </main>
      {/* <img src={LoggoRightTop} id='logoRightTop' alt="" /> */}
    </>
  )
}

export default App

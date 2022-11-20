import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return(
    <header>
        <div className="dsmeta-logo-container">
            <img src= {logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a id='professor' href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
              <p id='aluno'>Aluno Davi Ribeiro</p>
            </p>
        </div>
    </header>
    )
    
  }
  
  export default Header;
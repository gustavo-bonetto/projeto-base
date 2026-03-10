import './Header.css';

function Header() {
  return (
    <>
   <header className="header">
        <h1>STEAM PLAYBOX</h1>
        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Jogos</a>
          <a href="#jogadores">Jogadores</a>
          <a href="#suporte">Suporte</a>
        </nav>
      </header>
    </>
  )
}

export default Header;
import logo from '../logo.svg';
import "./Header.css";
function Header () {
  return (
    <>
      <header className="Header">
          <div className='Header-row'>
            <div className='Header-logo'>
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className='App-name'>TESTTTASK</h1>
            </div>
            <h1 className='App-about'>Website Style Guide</h1>
          </div>
      </header>
    </>
  );
}
export default Header;
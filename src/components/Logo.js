// import logo from './logo.svg';
import logo2 from '../multimedia/logo2.svg';
// import '../App.css';
import '../CSS/logo.css';

function Logo() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <img src={logo2} className="App-logo" alt="logo" />
      {/* </header> */}
    </div>
  );
}

export default Logo;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="MainPage">
      <div className="main-container">
        <div className="search"></div>
        <div className="second-container">
          <div className="favorites">2</div>
          <div className="third-container">
            <div className="customizations">
              <div className="options">3</div>
              <div classname="add-button">
              {/* <img src="src\images\add_button.png"></img> */}
              <button type="button" onclick="Testing">Place Holder</button>
              </div>
            </div>
            <div className="passwords">4</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

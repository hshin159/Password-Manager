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
              <div className="options"></div>
              <div classname="add-button">
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

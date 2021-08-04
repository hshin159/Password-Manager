import './App.css';
import Search from "./search/Search.js";
import Favorites from "./favorites/Favorites.js";
import Options from "./options/Options.js";
import AddButton from "./add-button/AddButton.js";
import Passwords from "./passwords/Passwords.js";

function App() {
  return (
    <div className="MainPage">
      <div className="main-container">
        <Search />
        <div className="second-container">
          <Favorites />
          <div className="third-container">
            <div className="customizations"> 
              <Options />
              <div className="add-button-area">
                <AddButton />
              </div>
            </div>
            <div className="passwords-area">
              <Passwords />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
// import imageForHannah from "./images/add_button.png"
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

    // <div className="MainPage">
    //   <div className="main-container">
    //     <div className="search"></div>
    //     <div className="second-container">
    //       <div className="favorites"></div>
    //       <div className="third-container">
    //         <div className="customizations"> 
    //           <div className="options">3</div>
    //           <div className="add-button-area">
    //           <button className="add-button" type="button" onclick="Testing">+</button>
    //           </div>
    //         </div>
    //         <div className="passwords">4</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;

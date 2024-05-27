// Application UI Container & Navigation 
import "./styles/App.css"
import logo from "./assets/documents_icon.png"
import SearchResult from "./components/SearchData";
import database from "./assets/database.json";

function App() {
  return (
    <>
      <header className="app-control">  
        <img className="logo" src={logo}></img>
        <h1>The Docs</h1>
      </header>
        
      <div className="app-element">
        <SearchResult data={database} />
      </div>
    
      <footer>Copyright {new Date().getFullYear()}</footer>
    </>
  )
}

export default App


// Application UI Container & Navigation 
import "./styles/App.css"
import logo from "./assets/documents_icon.png"
import ComponentSwitch, { SwitchMap } from "./components/ContentSwitch";
import DisplayResult from "./components/SearchData";

import data_ai from "./database/ai.json";
import data_api from "./database/api.json";
import data_blog from "./database/blogs.json";
import data_books from "./database/books.json";
import data_code from "./database/code.json";
import data_devops from "./database/devops.json";
import data_swe from "./database/swe.json";

const pageMap: SwitchMap = {
  "AI": () => <DisplayResult data={data_ai} />,
  "APIs" :() => <DisplayResult data={data_api} />,
  "Blogs": () => <DisplayResult data={data_blog} />,
  "Books": () => <DisplayResult data={data_books} />,
  "Coding": () => <DisplayResult data={data_code} />,
  "Deployment": () => <DisplayResult data={data_devops} />,
  "Software Engineering": () => <DisplayResult data={data_swe} />,
};

function App() {
  return (
    <>
      <header className="app-control">  
        <img className="logo" src={logo}></img>
      
      </header>
        
      <div className="app-element">
        <ComponentSwitch cmap={pageMap} />
      </div>
    </>
  )
}

export default App


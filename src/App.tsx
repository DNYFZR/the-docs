// Application UI Container & Navigation 
import "./App.css"
import logo from "/documents_icon.png"
import data from "./database.json";
import React from "react";

interface DatabaseNode {
  [key : string] : {
    description : string;
    link: string;
    image: string;
    tags: string[];
  }
}

interface Database {
  [primaryKey : string] : DatabaseNode
}

const App: React.FC = () => {
  // Database setup
  const database = data as Database;
  const database_pks = Object.keys(database);

  // User selection hooks
  const [activeSection, setActiveSection] = React.useState<string>(database_pks[0]);
  const [activeData, setActiveData] = React.useState<DatabaseNode>(database[activeSection]);

  // Event handlers
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveSection(event.target.value);
    setActiveData(database[event.target.value]);
  };

  return (
    <>
      <div  className="app-header">
        <img className="logo" src={logo}></img>    
        
        {/* <h2>The Docs</h2> */}

        <select className="content-control" value={activeSection} onChange={handleSelectChange}>
          {database_pks.map((k) => <option value={k}>{k}</option>)}
        </select>  
      </div>
     
      <div key={activeSection} className='content-primary'>
        {Object.keys(activeData).map((key) => (
          
          <div key={key} className='content-secondary'>
            <h3>{key}</h3>
            
            <a href={activeData[key].link} target='_blank'>
              <img className='content-image' src={activeData[key].image} />
            </a>

            <p>{activeData[key].description}</p>
            
            <div className='content-tags'>
              {activeData[key].tags.map((tag) => (
                <button className='tag-button' key={tag}>{tag}</button>
              ))}
            </div>
          
          </div>
        
        ))}
      </div>
    </>
  );
};

export default App


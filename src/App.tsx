// Application UI Container & Navigation 
import "./styles/App.css"
import logo from "./assets/documents_icon.png"
import ComponentSwitch, { SwitchMap } from "./components/ContentSwitch";
import DisplayResult from "./components/SearchData";

import data_ai from "./database/ai.json";
import data_api from "./database/api.json";
import data_code from "./database/code.json";
import data_devops from "./database/devops.json";
import data_swe from "./database/swe.json";
import data_read from "./database/reading.json"

const pageMap: SwitchMap = {
  "AI": () => <DisplayResult data={data_ai} />,
  "APIs" :() => <DisplayResult data={data_api} />,
  "Coding": () => <DisplayResult data={data_code} />,
  "Deployment": () => <DisplayResult data={data_devops} />,
  "Engineering": () => <DisplayResult data={data_swe} />,
  "Reading": () => <DisplayResult data={data_read} />,
};

function App() {
  return (
    <>
      <img className="logo" src={logo}></img>    
      <ComponentSwitch cmap={pageMap} />
    </>
  )
}

export default App


import "./App.css";
import Table from "./components/Table";
import { useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setisLoading] = useState(true)

  setTimeout(() => {
      setisLoading(false)
  }, 1000);

  return (
     isLoading ? <Loading /> :   <div className="App">
     <header className="App-header">
      <Table/>
     </header>
   </div> 
  );
}

export default App;

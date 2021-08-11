import { GetData } from "./utils/getData";
import { FetchQuemado } from "./components/FetchQuemado";

function App() {
  GetData();
  return (
    <div className="App">
     <FetchQuemado/>
    </div>
  
  );
}

export default App;

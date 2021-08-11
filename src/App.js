import { GetData } from "./utils/getData";
import { Button1 } from "./Components/Button1";
import { Button2 } from "./Components/Button2";
import { Button3 } from "./Components/Button3";

function App() {
  GetData();
  return (
    <div className="App">
      <Button1/>
      <Button2/>
      <Button3/>
    </div>
  );
}

export default App;

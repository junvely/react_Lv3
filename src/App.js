import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import GlobalStyle from "./components/styles/GlobalStyles";
import Inputs from "./components/Inputs/Inputs";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Buttons/>
      <Inputs/>
    </div>
  );
}

export default App;

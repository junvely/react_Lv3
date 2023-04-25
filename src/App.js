import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import GlobalStyle from "./styles/GlobalStyles";
import Inputs from "./components/Inputs/Inputs";
import Modals from "./components/Modals/Modals";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Buttons/>
      <Inputs/>
      <Modals/>
    </div>
  );
}

export default App;

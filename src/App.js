import "./App.css";
import ButtonSec from "./components/ButtonSec";
import InputSec from "./components/InputSec";
import ModalSec from "./components/ModalSec";
import SelectSec from "./components/SelectSec";
import { GlobalStyle } from "./styles/Global.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <ButtonSec>Button</ButtonSec>
      <InputSec>Input</InputSec>
      <ModalSec>Modal</ModalSec>
      <SelectSec>Select</SelectSec>
    </>
  );
}

export default App;

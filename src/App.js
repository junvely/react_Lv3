import "./App.css";
import ButtonSec from "./components/ButtonSec";
import InputSec from "./components/InputSec";
import ModalSec from "./components/ModalSec";
import SelectSec from "./components/SelectSec";
import { GlobalStyle, StWrap } from "./styles/Global.styles";

function App() {
  return (
    <StWrap>
      <GlobalStyle />
      <ButtonSec>Button</ButtonSec>
      <InputSec>Input</InputSec>
      <ModalSec>Modal</ModalSec>
      <SelectSec>Select</SelectSec>
    </StWrap>
  );
}

export default App;

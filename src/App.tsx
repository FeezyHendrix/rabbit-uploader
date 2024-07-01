import "./App.css";
import { ThemeProvider } from "styled-components";
import { RabbitTheme } from "./theme/theme";
import { RabbitUploader } from "./compositions/RabbitUploader";
import { Modal } from "./components/Modal";
import { FileProvider } from "./state/FileContext";

function App() {
  return (
    <ThemeProvider theme={RabbitTheme}>
      <FileProvider>
        <Modal>
          <RabbitUploader source="" />
        </Modal>
      </FileProvider>
    </ThemeProvider>
  );
}

export default App;

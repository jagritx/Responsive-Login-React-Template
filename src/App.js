import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/theme";
import "./App.css";
import Login from "./pages/Login";

const Main = styled.div`
  background-color: ${({ theme }) => theme.bg};
`;
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Main>
        <Login darkMode={darkMode} setDarkMode={setDarkMode} />
      </Main>
    </ThemeProvider>
  );
}

export default App;

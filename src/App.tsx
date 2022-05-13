import { ThemeProvider } from "styled-components";
import Content from "./layout/Content";
import Topbar from "./layout/Topbar";
import theme from "./shared/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Topbar />
            <Content />
        </ThemeProvider>
    );
}

export default App;

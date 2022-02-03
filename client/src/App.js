import {ThemeProvider} from "styled-components";
import { GlobalStyle, theme} from "./GlobalStyle";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Pages/Home/Home";
import {CreatePost} from "./Pages/CreatePost/CreatePost";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
              <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/create-post' exact component={CreatePost} />
              </Switch>
          </Router>
      </ThemeProvider>
  );
}

export default App;

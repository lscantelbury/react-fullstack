import {ThemeProvider} from "styled-components";
import { GlobalStyle, theme} from "./GlobalStyle";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Pages/Home/Home";
import {CreatePost} from "./Pages/CreatePost/CreatePost";
import {ExpandedPost} from "./Components/Post/Post";
import {Header} from "./Components/Header/Header";
import {Login} from "./Pages/Login/Login";
import {Registration} from "./Pages/Registration/Registration";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
              <Header />
              <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/create-post' exact component={CreatePost} />
                  <Route path='/post/:id' exact component={ExpandedPost} />
                  <Route path='/registration' exact component={Registration} />
                  <Route path='/login' exact component={Login} />
              </Switch>
              <footer>Luís Henrique Scantelbury de Almeida</footer>
          </Router>
      </ThemeProvider>
  );
}

export default App;

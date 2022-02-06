import {ThemeProvider} from "styled-components";
import { GlobalStyle, theme} from "./GlobalStyle";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Pages/Home/Home";
import {CreatePost} from "./Pages/CreatePost/CreatePost";
import {ExpandedPost} from "./Components/Post/Post";
import {Header} from "./Components/Header/Header";
import {Login} from "./Pages/Login/Login";
import {Registration} from "./Pages/Registration/Registration";
import {AuthContext} from "./helpers/AuthContext";
import {useEffect, useState} from "react";


function App() {
    const [authState, setAuthState] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("accessToken")){
            setAuthState(true);
        }
    }, [])
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AuthContext.Provider value={{authState, setAuthState}}>
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
          </AuthContext.Provider>
      </ThemeProvider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import * as serviceWorker from './serviceWorker';
// Import your reducers and routes here
import nomenclature from './reducers/nomenclature/';

import { Navbar, Hero, Container, Heading,  Section, Button, Footer, Content, Columns } from 'react-bulma-components/full';
import {Link, Route, Switch} from 'react-router-dom'
import nomenclatureRoutes from './routes/nomenclature';


const history = createBrowserHistory();
const store = createStore(
  combineReducers({
    router: connectRouter(history),
    form,
    nomenclature,
  }),
  applyMiddleware(routerMiddleware(history), thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <>
      <Navbar color="white">
        <Navbar.Brand>
          <Navbar.Item renderAs={Link} to="/">
            <strong>MONTESSORI RESSOURCES</strong>
          </Navbar.Item>
          <Navbar.Burger active="true" />
        </Navbar.Brand>
        <Navbar.Menu active="true">
          <Navbar.Container>
            <Navbar.Item dropdown={true} hoverable={true}>
              <Navbar.Link renderAs={Link} to="/nomenclatures/">Nomenclatures</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item renderAs={Link} to="/nomenclatures/add">Add</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item>Log Out</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
            <Navbar.Item href="#">Biblio</Navbar.Item>
            <Navbar.Item href="#">Math</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item><Button color="primary" href="#">Register</Button></Navbar.Item>
            <Navbar.Item><Button href="#">Log in</Button></Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
      <Section>


      <Container>
        <Switch>
          <Route path="/" exact={true} render={() => (
            <>
            <Hero color="primary" size="medium">
              <Hero.Body>
                <Container>
                  <Heading>
                    MONTESSORI RESSOURCES
                  </Heading>
                  <Heading subtitle size={4}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Heading>
                </Container>
              </Hero.Body>
            </Hero>
            <Section>
              <Container>
                <Columns>
                  <Columns.Column>
                    <h1 class="title">
                      Cards
                    </h1>
                    <h2 class="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h2>
                    <Button>Go</Button>
                  </Columns.Column>
                  <Columns.Column>
                    <h1 class="title">
                      Biblio
                    </h1>
                    <h2 class="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h2>
                    <Button>Go</Button>
                  </Columns.Column>
                  <Columns.Column>
                    <h1 class="title">
                      Maths
                    </h1>
                    <h2 class="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h2>
                    <Button>Go</Button>
                  </Columns.Column>
                </Columns>

              </Container>
            </Section>
            </>
          )}/>
          {nomenclatureRoutes}
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </Container>
      </Section>
      <Footer>
          <Container>
            <Content style={{ textAlign: 'center' }}>
              <p>
                <strong>Montessori Ressources</strong> by <a href="https://www.montessori.quebec/">Montessori au Québec</a>. The source code is available on {' '}
                <a href="https://github.com/montessori-ressources/web">github</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
              </p>
            </Content>
          </Container>
        </Footer>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import './welcome.css';
import { Navbar, Hero, Container, Heading,  Section, Button, Dropdown, Footer, Content, Columns } from 'react-bulma-components/full';
import {Link, Route, Switch} from 'react-router-dom'
import {List} from './components/nomenclature'
import nomenclatureRoutes from './routes/nomenclature';

const First = () => (
  <div>
  <Navbar color="white">
      <Navbar.Brand>
        <Navbar.Item renderAs={Link} to="/">
          <strong>MONTESSORI RESSOURCES</strong>
        </Navbar.Item>
        <Navbar.Burger active="true" />
      </Navbar.Brand>
      <Navbar.Menu active="true">
        <Navbar.Container>
        <Dropdown>
      <Dropdown.Item value="item">Dropdown item</Dropdown.Item>
      <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
      <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
      <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item value="divider">With divider</Dropdown.Item>
    </Dropdown>
          <Navbar.Item renderAs={Link} to="/nomenclatures/">Nomenclature</Navbar.Item>
          <Navbar.Item renderAs={Link} to="/nomenclatures/add">Add</Navbar.Item>
          <Navbar.Item href="#">Biblio</Navbar.Item>
          <Navbar.Item href="#">Math</Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
          <Navbar.Item><Button color="primary" href="#">Register</Button></Navbar.Item>
          <Navbar.Item><Button href="#">Log in</Button></Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>


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
                <a class="button is-link" href="#">Go</a>
              </Columns.Column>
              <Columns.Column>
                <h1 class="title">
                  Biblio
                </h1>
                <h2 class="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </h2>
                <Link to="/nomenclatures/">nomenclature</Link>
                <a class="button is-link" href="#">Go</a>
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
                <a class="button is-link" href="#">Go</a>
              </Columns.Column>
            </Columns>

          </Container>
        </Section>
        </>
      )}/>
      {nomenclatureRoutes}
      <Route render={() => <h1>Not Found</h1>} />

      //<Route path="/nomenclatures/" exact={true} component={List} />
    </Switch>

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
  </div>
);

export default First;

import React from 'react';
import { Switch, Route } from "react-router-dom";
import AppBar from './components/AppBar';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container';

const App = () => (
  <Container>
    <AppBar />
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/register" component={RegisterView} />
      <Route exact path="/login" component={LoginView} />
      <Route exact path="/contacts" component={ContactsView} />
    </Switch>
  </Container>
);

export default App;



import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show, Search, Add } from '../components/nomenclature/';

export default [
  <Route path="/nomenclatures/add" component={Add} exact strict key="page" />,
  <Route path="/nomenclatures/create" component={Create} exact key="create" />,
  <Route path="/nomenclatures/edit/:id" component={Update} exact key="update" />,
  <Route path="/nomenclatures/show/:id" component={Show} exact key="show" />,
  <Route path="/nomenclatures/" component={List} exact strict key="list" />,
  <Route path="/nomenclatures/search/" component={Search} exact strict key="search" />,
  <Route path="/nomenclatures/:page" component={List} exact strict key="page" />
];

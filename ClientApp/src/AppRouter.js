import React from 'react';
import { Route } from 'react-router';
import { Home } from '@shared/pages/Home';
import { FetchData } from '@shared/pages/FetchData';
import { Counter } from '@shared/pages/Counter';
import { NavMenu } from '@shared/components/NavMenu';
import { ClientRouter } from '@feature/clients/router/ClientRouter';
import { RequisitionRouter } from '@feature/requisition/router/RequisitionRouter';
import { Container } from 'reactstrap';

import { BrowserRouter, Switch } from 'react-router-dom';
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

export default function AppRouter() {

  return (
    <BrowserRouter basename={baseUrl}>
      <NavMenu />
      <Switch>
        <Container>
          <Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetch-data' component={FetchData} />
          <Route path='/add-new-client' component={ClientRouter} />
          <Route path='/requisition' component={RequisitionRouter} />
        </Container>
      </Switch>
    </BrowserRouter>
  );
}


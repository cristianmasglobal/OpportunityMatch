import React from 'react';
import { Route } from 'react-router';
import { Home } from '../commons/pages/Home';
import { FetchData } from '../commons/pages/FetchData';
import { Counter } from '../commons/pages/Counter';
import {NavMenu } from '../commons/components/NavMenu';
import { ClientRouter } from '../feature/clients/router/ClientRouter';
import { RequisitionRouter } from '../feature/requisition/router/RequisitionRouter';

import { Container } from 'reactstrap';

export default function Routes() {

    return (
      <>
        <NavMenu />
        <Container>
            
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/add-new-client' component={ClientRouter} />
        <Route path='/requisition' component={RequisitionRouter} />
        
        </Container>
      </>
    );
  }


import React from 'react';
import { Route } from 'react-router';
import { Home } from '../commons/core/Home';
import { FetchData } from '../commons/core/FetchData';
import { Counter } from '../commons/core/Counter';
import {NavMenu } from '../commons/components/NavMenu';
import { ClientLayout } from '../commons/pages/ClientLayout';

import { Container } from 'reactstrap';
import '../assets/css/custom.css'

export default function Routes() {

    return (
      <>
        <NavMenu />
        <Container>
            
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/add-new-client' component={ClientLayout} />
        
        </Container>
      </>
    );
  }


import React from 'react';
import { Route } from 'react-router';
import { Home } from '../components/Home';
import { FetchData } from '../components/FetchData';
import { Counter } from '../components/Counter';
import {NavMenu } from '../components/common/NavMenu';
import { Container } from 'reactstrap';
import '../styles/custom.css'

export default function Routes() {

    return (
      <>
        <NavMenu />
        <Container>
            
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />

        </Container>
      </>
    );
  }


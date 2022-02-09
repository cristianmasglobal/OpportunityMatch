import React from 'react';
import AddNewClient from '../components/AddNewClient';
import ListClient from '../components/ListClient';

export function ClientLayout() {
    return (
        <>
            <AddNewClient />
            <br></br>
            <br></br>
            <ListClient />
        </>
    );
}
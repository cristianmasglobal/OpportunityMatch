import React from 'react';
import AddNewClient from '../core/clientComponents/AddNewClient';
import ListClient from '../core/clientComponents/ListClient';

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
import React from 'react';
import AddNewClient from '../core/AddNewClient';
import ListClient from '../core/ListClient';

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
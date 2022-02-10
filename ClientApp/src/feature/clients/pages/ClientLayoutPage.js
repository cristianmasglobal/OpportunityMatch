import React from 'react';
import AddNewClient from '@feature/clients/components/AddNewClient';
import ListClient from '@feature/clients/components/ListClient';

export function ClientLayoutPage() {
    return (
        <>
            <AddNewClient />
            <br></br>
            <br></br>
            <ListClient />
        </>
    );
}
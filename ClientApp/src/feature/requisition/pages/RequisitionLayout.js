import React from 'react';
import { BasicInfo } from '../components/BasicInfo';


export function RequisitionLayout(){

    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <BasicInfo/>            
        </form>
    )
}
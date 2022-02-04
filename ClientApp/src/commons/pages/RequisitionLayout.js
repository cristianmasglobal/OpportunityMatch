import React from 'react';
import { BasicInfo } from '../core/requisitionComponents/BasicInfo';


export function RequisitionLayout(){

    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <BasicInfo/>            
        </form>
    )
}
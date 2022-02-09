import React from 'react';
import { BasicInfo } from '@feature/requisition/components/BasicInfo';


export function RequisitionLayoutPage(){

    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <BasicInfo/>            
        </form>
    )
}
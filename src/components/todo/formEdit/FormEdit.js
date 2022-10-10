import React from 'react';
import {FormLayout, TextField} from '@shopify/polaris';
function FormEdit({product}) {
    return (
        <FormLayout>
            <TextField label="Store name" onChange={() => {}} autoComplete="off" />
            <TextField
                type="email"
                label="Account email"
                onChange={() => {}}
                autoComplete="email"
            />
        </FormLayout>
    );
}

export default FormEdit;
import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box, Checkbox, FormControlLabel } from '@material-ui/core';

const defaultValues = {
    clientName: "",
    approveName: "",
    approveEmail: "",
    isMSArequired: false,
};

export function AddNewClient() {

    const [formValues, setFormValues] = useState(defaultValues);
    const [checked, setChecked] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleSubmit = (event) => {
        formValues.isMSArequired = checked;
        event.preventDefault();
        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <br></br>
                    <p>Client name: </p>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        name="clientName"
                        label=""
                        variant="outlined"
                        value={formValues.clientName}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label="MSA Ready and signed?" />
                </Grid>
                <Grid item xs={2}>
                    <p>Manager / Approve name: </p>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        name="approveName"
                        label=""
                        variant="outlined"
                        value={formValues.approveName}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                    <p>Manager / Approve email: </p>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        name="approveEmail"
                        label=""
                        variant="outlined"
                        value={formValues.approveEmail}
                        onChange={handleInputChange}
                    />
                    <br></br>
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" type="submit" onSubmit={handleSubmit}>
                Submit
            </Button>
        </form>
    );
};


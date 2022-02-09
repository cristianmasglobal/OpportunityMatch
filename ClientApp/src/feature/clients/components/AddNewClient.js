import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Checkbox, FormControlLabel } from '@material-ui/core';

import '../styles/addNewClient.css';

const defaultValues = {
    clientName: "",
    approveName: "",
    approveEmail: "",
    isMSArequired: false,
};

export default function AddNewClient() {

    const [formValues, setFormValues] = useState(defaultValues);
    const [checked, setChecked] = useState(true);
    const [response, setResponse] = useState(0);

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

    const handleCreate = (event) => {
        formValues.isMSArequired = checked;
        event.preventDefault();
        console.log(formValues);
        setResponse(1)
        console.log(response)
        alert("Create account successfully");
    };

    const handleEdit = (event) => {
        event.preventDefault();
        setResponse(2)
        console.log(response)
        alert("Edit account successfully");
    };

    const handleDelete = (event) => {
        event.preventDefault();
        setResponse(3)
        console.log(response)
        alert("The account has been deleted successfully");
    };

    return (
        <form onSubmit={handleCreate}>
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
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <Button variant="contained" color="success" type="submit" onSubmit={handleCreate}>
                                Add
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit" onSubmit={handleEdit}>
                                Edit
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary" type="submit" onSubmit={handleDelete}>
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};


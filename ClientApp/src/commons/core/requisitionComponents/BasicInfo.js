import React, {useState} from 'react';
import { Checkbox, FormControlLabel, Grid, TextField } from '@material-ui/core';

export function BasicInfo() {

    const defaultValues = {
        client: "",
        project: "",
        position: "",
        seniority: "",
        seatsAvailable: "",
        isEnglishNeeds: false,
        currency: "",
        priority:"",
        openOn:"",
        startDate: Date.now(),
        endDate:"",
        preferredLocation: "",
        isContractorsAllowed: false,
    };

    const [formValues, setFormValues] = useState(defaultValues);
    const [checked, setChecked] = useState(true);

    const handleSubmit = () => {
    }

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

    return (
        <>
            <Grid container xs = {12} spacing={2}>
                <Grid item xs={2}>
                    <br></br>
                    <p>Client: </p>
                </Grid>
                <Grid item xs={4} >
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        name="client"
                        label="Select client"
                        variant="outlined"
                        value={formValues.client}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={2} >
                    <br></br>
                    <p>Project: </p>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        name="project"
                        label="Select project"
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
        </>
    )
}
import React, { useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';

// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import DatePicker from '@material-ui/lab/DatePicker';

export function BasicInfo() {

    const defaultValues = {
        client: "",
        project: "",
        position: "",
        seniority: "",
        seatsAvailable: "",
        isEnglishNeeds: false,
        firstRange: "",
        secondRange: "",
        currency: "",
        priority: "",
        openOn: "",
        startDate: Date.now(),
        endDate: "",
        preferredLocation: "",
        isContractorsAllowed: false,
    };

    const [formValues, setFormValues] = useState(defaultValues);
    const [checked, setChecked] = useState(true);
    const [client, setClient] = useState('');
    const [project, setProject] = useState('');
    const [seniority, setSeniority] = useState('');
    const [available, setAvailable] = useState('');
    const [currency, setCurrency] = useState('');
    const [location, setLocation] = useState('');
    const [priority, setPriority] = useState(0);
    // const [value, setValue] = useState<Date | null>(null);

    const handleData = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    const handleChangeClient = (event) => {
        setClient(event.target.value);
    };

    const handleChangeProject = (event) => {
        setProject(event.target.value);
    };

    const handleChangeSeniority = (event) => {
        setSeniority(event.target.value);
    };

    const handleChangeAvailable = (event) => {
        setAvailable(event.target.value);
    };

    const handleChangeCurrency = (event) => {
        setCurrency(event.target.value);
    };

    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
    };

    const handleChangeEnglish = (event) => {
        setChecked(event.target.checked);

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleChangePriority = (event) => {
        setPriority(event.target.checked);
    };

    return (
        <>
            <Grid container xs={12} spacing={2}>
                <Grid item xs={1}>
                    <br></br>
                    <p>Client: </p>
                </Grid>
                <Grid item xs={5}>
                    <FormControl fullWidth>
                        <InputLabel>Client name</InputLabel>
                        <Select
                            variant="outlined"
                            value={client}
                            label="Select client"
                            onChange={handleChangeClient}
                        >
                            <MenuItem value={"JCI"}>JCI</MenuItem>
                            <MenuItem value={"MELI"}>MELI</MenuItem>
                            <MenuItem value={"AFFIRM"}>AFFIRM</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1} >
                    <br></br>
                    <p>Project: </p>
                </Grid>
                <Grid item xs={5}>
                    <FormControl fullWidth>
                        <InputLabel>Project</InputLabel>
                        <Select
                            variant="outlined"
                            value={project}
                            label="Select project"
                            onChange={handleChangeProject}
                        >
                            <MenuItem value={"jci_controls"}>JCI Controls</MenuItem>
                            <MenuItem value={"jci_secret"}>JCI secret</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1}>
                    <br></br>
                    Position:
                </Grid>
                <Grid item xs={7}>
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
                <Grid item xs={1}>
                    <br></br>
                    <p>seniority: </p>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel>Seniority</InputLabel>
                        <Select
                            variant="outlined"
                            value={seniority}
                            label="Select a seniority"
                            onChange={handleChangeSeniority}
                        >
                            <MenuItem value={"junior"}>Junior</MenuItem>
                            <MenuItem value={"mid"}>mid-senior</MenuItem>
                            <MenuItem value={"senior"}>senior</MenuItem>
                            <MenuItem value={"senior-advanced"}>senior advanced</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1}>
                    <p>Seats available: </p>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel>Seats</InputLabel>
                        <Select
                            variant="outlined"
                            value={available}
                            label="Seat available"
                            onChange={handleChangeAvailable}
                        >
                            <MenuItem value={"one"}>1</MenuItem>
                            <MenuItem value={"two"}>2</MenuItem>
                            <MenuItem value={"three"}>3</MenuItem>
                            <MenuItem value={"four"}>4</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel control={<Checkbox checked={checked} onChange={handleChangeEnglish} />} label="Needs English proficiency?" />
                </Grid>
                <Grid item xs={1}>
                    <p>Rate range: </p>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        name="approveEmail"
                        label="first"
                        variant="outlined"
                        value={formValues.firstRange}
                        onChange={handleInputChange}
                    />
                    <br></br>
                </Grid>
                <Grid item xs={1}>
                    <br></br>
                    <p>-</p>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        name="approveEmail"
                        label="second"
                        variant="outlined"
                        value={formValues.secondRange}
                        onChange={handleInputChange}
                    />
                    <br></br>
                </Grid>
                <Grid item xs={1}>
                    <br></br>
                    Currency:
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel>USD</InputLabel>
                        <Select
                            variant="outlined"
                            value={currency}
                            label="Currency"
                            onChange={handleChangeCurrency}
                        >
                            <MenuItem value={"usd"}>USD</MenuItem>
                            <MenuItem value={"cop"}>COP</MenuItem>
                        </Select>
                    </FormControl>
                    <br></br>
                </Grid>
                <Grid item xs={1}>
                    Priority:
                </Grid>
                <Grid item xs={2}>
                    <FormControlLabel control={<Checkbox checked={priority} onChange={handleChangePriority} checkedIcon={<CircleChecked />} />} label="High" />
                </Grid>
                <Grid item xs={2}>
                    <FormControlLabel control={<Checkbox checked={priority} onChange={handleChangePriority} checkedIcon={<CircleChecked />} />} label="Medium" />
                </Grid>
                <Grid item xs={2}>
                    <FormControlLabel control={<Checkbox checked={priority} onChange={handleChangePriority} checkedIcon={<CircleChecked />} />} label="Low" />
                </Grid>
                <Grid item xs={1}>
                    Open on:
                </Grid>
                <Grid item xs={2}>
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Basic example"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider> */}
                </Grid>
            </Grid>
        </>
    )
}
import React, { useState } from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import { Multiselect } from "multiselect-react-dropdown";


const SearchPaper = () => {
  const paperStyle = {
    padding: 15,
    height: "90%",
    width: 280,
    margin: "20px auto",
  };
  const btnStyle = { Color: "primary", margin: "8px 0" };
  const pStyle = { fontSize:"18px", margin: "8px 0" };
  const textStyle = { margin:'2px 0'}
  const dropStyle = { margin:'2px 0'}



  const data = [
    { Exam: "O/L", id: 1 },
    { Exam: "A/L", id: 1 },
    { Exam: "Grade 5", id: 3 },
    { Exam: "Grade 4", id: 4 },
    { Exam: "Grade 3", id: 5 },
  ];

  const [options] = useState(data);

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Past Paper-Search</h2>
        </Grid>
        <Typography style={pStyle}> Exam Body </Typography>
        <TextField style={textStyle} id="outlined-basic" label="Exam body" placeholder='Exam body' variant="outlined" fullWidth required />
        <Typography style={pStyle}> Exam </Typography>
        <Multiselect options={options} displayValue="Exam" style={dropStyle} />
        <Typography style={pStyle}> Year </Typography>
        <TextField style={textStyle} id="outlined-basic" label="Year" placeholder='2013' variant="outlined" fullWidth required />
        <Typography style={pStyle}> Medium </Typography>
        <TextField style={textStyle} id="outlined-basic" label="Medium" placeholder='English' variant="outlined" fullWidth required />
        <Typography style={pStyle}> Subject </Typography>
        <TextField style={textStyle} id="outlined-basic" label="Subject" placeholder='Sinhala' variant="outlined" fullWidth required />
        <Typography style={pStyle}> Paper </Typography>
        <TextField style={textStyle} id="outlined-basic" label="Paper" placeholder='Paper 1/2' variant="outlined" fullWidth required />

    
        <Button
          style={btnStyle}
          type="submit"
          color="secondary"
          variant="contained"
          fullWidth
        >
          Search
        </Button>
      </Paper>
    </Grid>
  );
};

export default SearchPaper;

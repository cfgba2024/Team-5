import React, { useState } from 'react';
import { readSpreadsheet, writeSpreadsheet } from './spreadsheetUtils';
import { Container, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const CompleteForm = ({ formFields }) => {
  const [completedForm, setCompletedForm] = useState(
    formFields.map(field => ({ ...field, value: '' }))
  );
  const [spreadsheetData, setSpreadsheetData] = useState([]);
  const [file, setFile] = useState(null);

  const handleFieldChange = (index, event) => {
    const updatedFields = completedForm.map((field, i) =>
      i === index ? { ...field, value: event.target.value } : field
    );
    setCompletedForm(updatedFields);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    readSpreadsheet(file).then(data => setSpreadsheetData(data));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = completedForm.map(row => ({
      ...row,
      'Upload Date': new Date().toLocaleString()
    }));
    const updatedData = [...spreadsheetData, ...newData];
    writeSpreadsheet(updatedData, 'updated_spreadsheet.xlsx');
    setSpreadsheetData(updatedData);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Complete the Form</Typography>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <form onSubmit={handleSubmit}>
        {completedForm.map((field, index) => (
          <div key={index}>
            <TextField
              label={field.label}
              value={field.value}
              onChange={(e) => handleFieldChange(index, e)}
              fullWidth
              margin="normal"
            />
          </div>
        ))}
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
      <Typography variant="h5" gutterBottom>Spreadsheet Data</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {spreadsheetData.length > 0 && Object.keys(spreadsheetData[0]).map((key, index) => (
                <TableCell key={index}>{key}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {spreadsheetData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <TableCell key={colIndex}>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CompleteForm;
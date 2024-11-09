import React, { useState } from 'react';
import { readSpreadsheet, writeSpreadsheet } from './spreadsheetUtils';

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
    <div>
      <h1>Complete the Form</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <form onSubmit={handleSubmit}>
        {completedForm.map((field, index) => (
          <div key={index}>
            <label>{field.label}</label>
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <h2>Spreadsheet Data</h2>
      <table>
        <thead>
          <tr>
            {spreadsheetData.length > 0 && Object.keys(spreadsheetData[0]).map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {spreadsheetData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompleteForm;
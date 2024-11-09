import React, { useState } from 'react';
import CompleteForm from './CompleteForm';
import { Container, TextField, Button, Typography } from '@mui/material';

const GoogleFormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [newField, setNewField] = useState('');
  const [showCompleteForm, setShowCompleteForm] = useState(false);

  const addField = () => {
    setFormFields([...formFields, { label: newField, value: '' }]);
    setNewField('');
  };

  const handleFieldChange = (index, event) => {
    const updatedFields = formFields.map((field, i) =>
      i === index ? { ...field, value: event.target.value } : field
    );
    setFormFields(updatedFields);
  };

  return (
    <Container>
      {!showCompleteForm ? (
        <>
          <Typography variant="h4" gutterBottom>Google Form Builder</Typography>
          <div>
            <TextField
              label="New field label"
              value={newField}
              onChange={(e) => setNewField(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button onClick={addField} variant="contained" color="primary">Add Field</Button>
          </div>
          <form>
            {formFields.map((field, index) => (
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
          </form>
          <Button onClick={() => setShowCompleteForm(true)} variant="contained" color="primary">Complete Form</Button>
        </>
      ) : (
        <CompleteForm formFields={formFields} />
      )}
    </Container>
  );
};

export default GoogleFormBuilder;
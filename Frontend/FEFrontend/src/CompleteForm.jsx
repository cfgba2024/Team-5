// src/CompleteForm.js
import React, { useState } from 'react';

const CompleteForm = ({ formFields }) => {
  const [completedForm, setCompletedForm] = useState(
    formFields.map(field => ({ ...field, value: '' }))
  );

  const handleFieldChange = (index, event) => {
    const updatedFields = completedForm.map((field, i) =>
      i === index ? { ...field, value: event.target.value } : field
    );
    setCompletedForm(updatedFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Completed Form Data:', completedForm);
    // Here you can add logic to save the completed form data
  };

  return (
    <div>
      <h1>Complete the Form</h1>
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
    </div>
  );
};

export default CompleteForm;
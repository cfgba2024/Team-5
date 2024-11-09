// src/GoogleFormBuilder.js
import React, { useState } from 'react';
import CompleteForm from './CompleteForm';

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
    <div>
      {!showCompleteForm ? (
        <>
          <h1>Google Form Builder</h1>
          <div>
            <input
              type="text"
              value={newField}
              onChange={(e) => setNewField(e.target.value)}
              placeholder="New field label"
            />
            <button onClick={addField}>Add Field</button>
          </div>
          <form>
            {formFields.map((field, index) => (
              <div key={index}>
                <label>{field.label}</label>
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => handleFieldChange(index, e)}
                />
              </div>
            ))}
          </form>
          <button onClick={() => setShowCompleteForm(true)}>Complete Form</button>
        </>
      ) : (
        <CompleteForm formFields={formFields} />
      )}
    </div>
  );
};

export default GoogleFormBuilder;
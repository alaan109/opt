import React, { useState } from "react";
import { Stack, TextField, PrimaryButton } from "@fluentui/react";

const CreateClientForm = () => {
  const handleSubmit = () => {
    // Submit the form data
    // Here you would typically send the data to a backend service
  };

  return (
    <Stack tokens={{ childrenGap: 15 }} styles={{ root: { width: 300 } }}>
      <TextField label="שם פרטי" id="Name" required />
      <TextField label="שם משפחה" id="Last Name" required />
      <TextField label="אימייל" id="Email" required />
      <TextField label="תעודת זהות" id="ID" required />
      <TextField label="מספר טלפון"id="Phone Number" required />
      <TextField label="כתובת" id="Address" multiline rows={3} />
      <PrimaryButton text="Create Client" onClick={handleSubmit} />
    </Stack>
  );
};

export default CreateClientForm;

import React, { useState } from 'react';
import { Stack, TextField, PrimaryButton } from '@fluentui/react';

const CreateClientForm = () => {
  const [client, setClient] = useState({
    name: '',
    lastName: '',
    email: '',
    id: '',
    phoneNumber: '',
    address: '',
  });

  const handleSubmit = () => {
    // Submit the form data
    console.log(client);
    // Here you would typically send the data to a backend service
  };

  return (
    <Stack tokens={{ childrenGap: 15 }} styles={{ root: { width: 300 } }}>
      <TextField
        label="Name"
        value={client.name}
        required
      />
      <TextField
        label="Last Name"
        value={client.lastName}
        required
      />
      <TextField
        label="Email"
        value={client.email}
        required
      />
      <TextField
        label="ID"
        value={client.id}
        required
      />
      <TextField
        label="Phone Number"
        value={client.phoneNumber}
        required
      />
      <TextField
        label="Address"
        value={client.address}
        multiline
        rows={3}
      />
      <PrimaryButton text="Create Client" onClick={handleSubmit} />
    </Stack>
  );
};

export default CreateClientForm;
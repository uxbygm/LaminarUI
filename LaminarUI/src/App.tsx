import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { ActionButton } from './ui/actionbutton/ActionButton';
import { Container, Stack, Card, Box } from '@mui/material'; 

const App = () => (
  <Container>
    <Card>
    <Box m={1}>
    <Stack spacing={1}>
    <h1>Name: LaminarUI</h1>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: MUI</div>
    </Stack>
<br/>
    <Stack spacing={1}>
      <ActionButton variant="contained" >New Task</ActionButton>
      <ActionButton variant="outlined" >New Event</ActionButton>
    </Stack>
    </Box>
    </Card>
  </Container>
);
const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);

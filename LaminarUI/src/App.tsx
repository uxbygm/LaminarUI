import React from "react";
import ReactDOM from "react-dom";
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';


const App = () => (
  <div className="container">
    <div>Name: LaminarUI</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: MUI</div>
    <Button variant="text">MUI Button Test</Button>
    

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

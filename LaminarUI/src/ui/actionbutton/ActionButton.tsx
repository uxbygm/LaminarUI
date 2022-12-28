import React, {FC, ReactElement} from "react";
import { Button } from '@mui/material'; 

type ActionButton = {
    children: React.ReactNode; 
    variant?: string;
}

export const ActionButton = (props: ActionButton) => {
  const { children } = props;

  return (
   <Button {...props}> {children} </Button>
  );
};
export default ActionButton


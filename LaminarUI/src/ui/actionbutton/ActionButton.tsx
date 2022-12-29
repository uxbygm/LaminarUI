import React, {FC, ReactElement} from "react";
import { Button } from '@mui/material'; 

type ActionButton = {
    children: React.ReactNode; 
    variant: string;
}

export const ActionButton = (props: ActionButton) => {
  const { children, variant } = props;

  return (
   <Button variant={variant} {...props} > {children} </Button>
  );
};
export default ActionButton


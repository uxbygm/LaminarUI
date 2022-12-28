import React, {FC, ReactElement} from "react";
import { Button } from '@mui/material'; 

export const ActionButton: FC = (props): ReactElement => {
  const { children } = props;

  return (
   <Button {...props}> {children} </Button>
  );
};
export default ActionButton


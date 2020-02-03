import React from 'react';
import Typography from '@material-ui/core/Typography';
// import { Container } from './styles';

const ErrorMessage = ({ error }) => (
  <div>
    <Typography variant="body1" component="span" color="error">
      {error}
    </Typography>
  </div>
);

export default ErrorMessage;

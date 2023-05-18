import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ErrorIcon from '@mui/icons-material/Error';

const ErrorMsg = ({ message }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', mt: '6px' }}>
      <ErrorIcon style={{ Color: 'red' }} sx={{ width: '20px' }} />
      <Typography color="red" variant="span" fontSize="14px" fontStyle="italic">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMsg;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
type Props = {
  message: string | undefined;
};
const ErrorMsg = ({ message }: Props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "5px", mt: "6px" }}>
      <ErrorIcon style={{ color: "red" }} sx={{ width: "20px" }} />
      <Typography color="red" fontSize="14px" fontStyle="italic">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMsg;

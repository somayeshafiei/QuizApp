import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { pink } from "@mui/material/colors";
import { Button, Typography } from "@mui/material";
import TextFields from "../components/TextField";
import { SelectCategory, SelectDifficulty } from "../components/SelectFields";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGlobalContext } from "../hooks/useGlobalContext";

const schema = yup
  .object({
    qnumber: yup
      .number()
      .positive()
      .integer()
      .required("Number of questions is required!"),
    category: yup.string().required("Please select category"),
    difficulty: yup.string().required("Please select difficulty"),
  })
  .required();

const SetupQuiz = () => {
  const { handleSubmiting } = useGlobalContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<typeData>({
    defaultValues: {
      qnumber: 0,
      category: "",
      difficulty: "",
    },
    resolver: yupResolver(schema),
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        backgroundColor: "#f9f9f9",
        p: "2rem",
        maxWidth: "sm",
        width: "28rem",
      }}
    >
      <Avatar
        sx={{ bgcolor: pink[500], m: "5", width: "3.5rem", height: "3.5rem" }}
      >
        <AssignmentIcon sx={{ width: "3rem" }} />
      </Avatar>
      <Typography variant="h4" component="h4" sx={{ fontWeight: "bold" }}>
        Set up Quiz app
      </Typography>
      {/* form */}
      <Box
        component="form"
        sx={{ width: "100%", mt: "2rem" }}
        onSubmit={handleSubmit(handleSubmiting)}
      >
        <TextFields
          control={control}
          name="qnumber"
          label="number of questions:"
          errors={errors}
        />
        <SelectCategory
          errors={errors}
          control={control}
          name="category"
          label="category"
        />
        <SelectDifficulty
          errors={errors}
          control={control}
          name="difficulty"
          label="difficulty"
        />
        <Button
          fullWidth
          type="submit"
          sx={{ mt: "3", mb: "2", backgroundColor: "pink", color: "black" }}
        >
          Start
        </Button>
      </Box>
    </Box>
  );
};
export default SetupQuiz;

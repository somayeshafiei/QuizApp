import { FormControl, TextField } from '@mui/material';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { addError } from '../utils/Utils';
import ErrorMsg from './ErrorMsg';

interface Props {
  label: string;
  control: Control<typeData>;
  name: 'qnumber' | 'category' | 'difficulty';
  errors: FieldErrors<typeData>;
}
const TextFields = ({ label, control, name, errors }: Props) => {
  return (
    <FormControl fullWidth sx={{ mb: '1rem' }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            variant="filled"
            {...addError(errors[name])}
          />
        )}
      />
      {errors[name] ? <ErrorMsg message={errors[name]?.message} /> : null}
    </FormControl>
  );
};

export default TextFields;

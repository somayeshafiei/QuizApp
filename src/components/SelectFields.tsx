import { FormControl, MenuItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { addError } from '../utils/Utils';
import ErrorMsg from './ErrorMsg';

type Props = {
  label: string;
  control: Control<typeData>;
  name: 'qnumber' | 'category' | 'difficulty';
  errors: FieldErrors<typeData>;
};

export const SelectCategory = ({ label, control, name, errors }: Props) => {
  const [listCategory, setListCategory] = useState<ListType[]>([]);
  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((res) => res.json())
      .then((data) => {
        setListCategory(data.trivia_categories);
      });
  }, []);
  return (
    <FormControl fullWidth sx={{ mb: '1rem' }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label={label}
            variant="filled"
            {...addError(errors[name])}
          >
            <MenuItem value="">None</MenuItem>
            {listCategory.map((category) => (
              <MenuItem value={category.id} key={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      {errors[name] ? <ErrorMsg message={errors[name]?.message} /> : null}
    </FormControl>
  );
};

export const SelectDifficulty = ({ label, control, name, errors }: Props) => {
  return (
    <FormControl fullWidth sx={{ mb: '1rem' }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label={label}
            variant="filled"
            {...addError(errors[name])}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Easy">Easy</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Hard">Hard</MenuItem>
          </TextField>
        )}
      />
      {errors[name] ? <ErrorMsg message={errors[name]?.message} /> : null}
    </FormControl>
  );
};

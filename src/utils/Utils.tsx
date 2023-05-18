export const addError = (errors:FieldError|undefined ) =>
  errors ? { errors: true } : { errors: false };

export interface IValidationRules {
    [key: string]: {
        param: boolean | number;
        message: string;
    }
}

export function getFieldErrors(fieldValue: string | undefined | null, validationRules: IValidationRules) {
  const errors = [];
  for (const [validationName, validationConfig] of Object.entries(validationRules)) {
    switch (validationName) {
      case 'required':
        if (validationConfig.param && (fieldValue === '' || fieldValue === undefined || fieldValue === null)) {
          errors.push(validationConfig.message);
        }
        break;
      case 'minLength':
        if (!fieldValue || validationConfig.param > fieldValue.length) {
          errors.push(validationConfig.message);
        }
    }
  }
  return errors;
}

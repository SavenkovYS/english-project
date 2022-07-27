export interface IValidationRules {
    [key: string]: {
        param: boolean;
        message: string;
    }
}

export function getFieldErrors(fieldValue: string | undefined | null, validationRules: IValidationRules) {
  console.log('[fieldValue]', fieldValue);
  const errors = [];
  for (const [validationName, validationConfig] of Object.entries(validationRules)) {
    switch (validationName) {
      case 'required':

        if (validationConfig.param && (fieldValue === '' || fieldValue === undefined || fieldValue === null)) {
          console.log('[validationConfig.param]', validationConfig.param);
          errors.push(validationConfig.message);
        }
        break;
    }
  }
  return errors;
}

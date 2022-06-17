import * as yup from 'yup';
import { ValidationMessages } from '../../enums/validation-enums/validationMessage';

export const SignUpValidationScheme = yup.object().shape({
 fullName: yup.string().required(ValidationMessages.REQUIRED),
 email: yup.string()
  .email(ValidationMessages.EMAIL)
  .required(ValidationMessages.REQUIRED),
 password: yup.string().required(ValidationMessages.REQUIRED),
 rePassword: yup.string().required(ValidationMessages.REQUIRED).oneOf([yup.ref('password'), null], ValidationMessages.PASSWORDNOTMATCH)
});
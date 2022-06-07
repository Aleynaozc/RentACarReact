import * as yup from 'yup';

export const SignInValidationScheme = yup.object().shape({
 email: yup.string()
  .email("Lütfen geçerli bir email adresi girin..")
  .required("Lütfen doldurun.."),
 password: yup.string().required("Lütfen doldurun..")
});
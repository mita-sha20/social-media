import * as Yup from 'yup';

export const signUp = Yup.object({
  fName: Yup.string().min(3).max(15).required("Please Enter Your Firstname"),
  lName: Yup.string().min(3).max(15).required("Please Enter Your Lastname"),
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().min(8).required("Please Enter Your Password"),
  gender: Yup.string().required("Please Select Gender"),
});

export const signIn = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().min(8).required("Please Enter Your Password"),
});

export const findUser = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
});

export const userCode = Yup.object({
  code: Yup.string().min('5', "Code must be 5 characters").max('5', "Code must be 5 characters").required("Please enter verification code"),
});

export const newPassword = Yup.object({
  password: Yup.string().min(8).required("Please Enter Your New Password"),
});
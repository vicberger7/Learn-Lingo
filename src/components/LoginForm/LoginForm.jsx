import { EyeOff } from 'components/icons/EyeOff';
import { Formik } from 'formik';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import * as yup from 'yup';


import { toast } from 'react-hot-toast';
import {
  ButtonForm,
  ErrMsg,
  IconStyledEye,
  StyledButtonForm,
  StyledField,
  StyledFieldIcon,
  StyledLabel,
  Text,
  TitleForm,
} from 'components/StyledForm.styled';
import { IconClose } from 'components/icons/IconClose';
import { useState } from 'react';
import { ContainerLogin, StyledForm } from './LoginForm.styled';

const FormSchema = yup.object().shape({
  email: yup.string().email().required('This field is required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('This field is required'),
});

export const LoginForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async ({ email, password }, actions) => {
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      toast.success('User registered successfully', user);
    } catch (error) {
      console.error('Error registering user', error);
    }
   

    actions.resetForm();
  };
  return (
    <ContainerLogin>
      <TitleForm>Log In</TitleForm>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Text>
      <ButtonForm type="button" onClick={onClose}>
        <IconClose />
      </ButtonForm>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledLabel>
            <StyledField name="email" type="email" placeholder="Email" />
            <ErrMsg name="email" component="p" />
          </StyledLabel>

          <StyledLabel>
            <StyledFieldIcon
              name="password"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
            />
            <IconStyledEye onClick={togglePasswordVisibility}>
              <EyeOff />
            </IconStyledEye>

            <ErrMsg name="password" component="p" />
          </StyledLabel>
          <StyledButtonForm type="submit">Log In</StyledButtonForm>
        </StyledForm>
      </Formik>
    </ContainerLogin>
  );
};

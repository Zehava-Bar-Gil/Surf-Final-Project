import React from 'react';
import { GiWaveSurfer } from 'react-icons/gi';
import { AiOutlineUser } from 'react-icons/ai';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH3,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './SigninElements.js';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>OnWave<GiWaveSurfer /></Icon>
          <FormContent>
            <Form action='#'>
              <FormH3> <AiOutlineUser /> </FormH3>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>submit</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

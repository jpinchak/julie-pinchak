'use client'

import {
  FormControl,
  Text,
  Button,
  Heading,
  Grid,
  GridItem,
  Input,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react'
import * as Yup from 'yup';
import { Formik, FormikProps, useFormik } from "formik";
import FormItem from '../formItem';

function ContactForm() {

  type values = {
    name: string;
    emailAddress: string;
    message: string;
  }

  const initialValues = {
    name: '',
    emailAddress: '',
    message: ''
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Please enter a valid name.')
      .max(50)
      .required('Name is required.'),
    emailAddress: Yup.string()
      .email('Please enter a valid email address.')
      .max(50, 'Please provide a shorter email address.')
      .required('An email address is required so we can get in touch!'),
    message: Yup.string().email('Invalid email').required('Required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => console.log('halp'),
    validateOnBlur: false,
    validateOnChange: false,
  })

  return (
    <form onSubmit={() => console.log('ferk')}>
      <FormControl id='name' isInvalid={!!Object.values(formik.errors).length}>
        <Grid
          w='60vw'
          h='70%'
          alignSelf='center'
          pt='15%'
          pl='5vw'
          templateRows='1fr 1fr 2fr 3fr 1fr'
          templateColumns='repeat(2, 1fr)'
        >
          <Heading gridRow={1} gridColumnStart={1} gridColumnEnd={2} fontSize={28} fontWeight={700} color={'logo.300'} px={2}>Let's connect</Heading>
          <GridItem gridRow={2} colSpan={2}>
            <Text px={2} color={'logo.300'}>
              Please reach out with any questions, comments, ideas, or just to connect!
            </Text>
          </GridItem>
          <GridItem gridColumn={1} gridRow={3}>
            <FormItem name='name' label='Name' inputType='string' formik={formik} />
          </GridItem>
          <GridItem gridColumn={2} gridRow={3}>
            <FormItem name='emailAddress' label='Email Address' inputType='email' formik={formik} />
          </GridItem>
          <GridItem gridRow={4} colSpan={2}>
            <FormItem name='message' label='Message' inputType='textarea' placeholder='Type your message here!' formik={formik} />
          </GridItem>
          <GridItem gridRow={5} px={2}>
            <Button _hover={{ backgroundColor: 'logo.600' }} px={3} py={1} borderRadius={5} type='submit' border={'2px solid'} borderColor={'logo.300'} color='logo.300' onClick={e => {
              e.preventDefault()
              formik.validateForm()
              console.log(formik.errors)
            }}>Send it</Button>
          </GridItem>
        </Grid>
      </FormControl>
    </form>
  )
}

export default ContactForm
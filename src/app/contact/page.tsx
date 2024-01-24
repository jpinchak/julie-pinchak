'use client'

import {
  Text,
  Button,
  Heading,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import * as Yup from 'yup';
import { Formik, FormikHelpers } from "formik";
import { emailHandler } from '../../../api/email/route';
import FormItem from '../formItem';
import { FormValues } from '@/globalTypes';
import { act } from 'react-dom/test-utils';

function ContactForm() {

  const initialValues: FormValues = {
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
      .min(5, 'Please enter a valid email address.')
      .max(50, 'Please provide a shorter email address.')
      .required('An email address is required so we can get in touch!'),
    message: Yup.string().required('Please enter a message to send!'),
  });

  const handleFormSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    if (!!actions.validateForm) {
      console.log('in is valid')
      try {
        console.log('in the try')
        emailHandler({
          subject: `Julie's website got a message from ${values.name}, ${values.emailAddress}`,
          message: values.message
        })
        actions.resetForm()
      } catch (error) {
        console.log('error: ', error)
      }
    } else {
      console.log('things should not be resetting')
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
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
              <FormItem
                name='name'
                label='Name'
                type='input'
                placeholder='Julie'
              />
            </GridItem>
            <GridItem gridColumn={2} gridRow={3}>
              <FormItem
                name='emailAddress'
                label='Email Address'
                type='input'
                placeholder='email@email.email'
              />
            </GridItem>
            <GridItem gridRow={4} colSpan={2}>
              <FormItem
                name='message'
                label='Message'
                type='textarea'
                placeholder='Type your message here!'
              />
            </GridItem>
            <GridItem gridRow={5} px={2}>
              <Button _hover={{ backgroundColor: 'logo.600' }} px={3} py={1} borderRadius={5} type='submit' border={'2px solid'} borderColor={'logo.300'} color='logo.300' >Send it</Button>
            </GridItem>
          </Grid>
        </form>
      )}
    </Formik>
  )
}

export default ContactForm
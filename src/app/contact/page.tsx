'use client'

import {
  FormControl,
  Text,
  Button,
  Heading,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import * as Yup from 'yup';
import { useFormik, FormikState, FormikProps } from "formik";
import { emailHandler } from '../../../api/email/route';
import FormItem from '../formItem';
import { FormValues } from '@/globalTypes';

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
    message: Yup.string().email('Invalid email').required('Required'),
  });

  const formik: FormikProps<FormValues> = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => console.log('submitted'),
    validateOnBlur: false,
    validateOnChange: false,
  })

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (formik.isValid) {
      emailHandler({
        subject: `Message from ${formik.values.name}, ${formik.values.emailAddress}`,
        message: formik.values.message
      })
      formik.resetForm();
      console.log(formik.values)
    } else {
      console.log('no bueno')
    }
  }

  return (
    <form>
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
            <Button _hover={{ backgroundColor: 'logo.600' }} px={3} py={1} borderRadius={5} type='submit' border={'2px solid'} borderColor={'logo.300'} color='logo.300' onClick={e => onSubmit(e)}>Send it</Button>
          </GridItem>
        </Grid>
      </FormControl>
    </form>
  )
}

export default ContactForm
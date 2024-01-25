'use client'

import {
  Text,
  Button,
  Heading,
  Grid,
  GridItem,
  useDisclosure
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { Formik, FormikHelpers } from "formik";
import { emailHandler } from '../../../api/email/route';
import FormItem from '../formItem';
import { FormValues } from '@/globalTypes';
import Modal from '../modal';

function ContactForm() {

  const router = useRouter();

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


  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFormSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    if (!!actions.validateForm) {
      try {
        emailHandler({
          subject: `Julie's website got a message from ${values.name}, ${values.emailAddress}`,
          message: values.message
        })
        actions.resetForm()
        onOpen()
      } catch (error) {
        console.log('error: ', error)
      }
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
            <Heading gridRow={1} gridColumnStart={1} gridColumnEnd={2} fontSize={28} fontWeight={700} color={'pinks.500'} px={2}>Let's connect</Heading>
            <GridItem gridRow={2} colSpan={2}>
              <Text px={2} color={'pinks.500'}>
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
            <GridItem gridRow={5}>
              <Button type='submit' colorScheme='pinks' variant='solid' >Send it</Button>
            </GridItem>
          </Grid>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            modalTitle='Success!'
            bodyText={`You're email has been sent! I can't wait to connect.`}
            buttonText='Okay'
            buttonAction={onClose}
            secondaryButtonText='Take me home'
            secondaryButtonAction={() => router.push('/')}
          />
        </form>
      )}
    </Formik>
  )
}

export default ContactForm
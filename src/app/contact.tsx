'use client'

import {
  Text,
  Button,
  Heading,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { Formik, FormikHelpers } from "formik";
import { emailHandler } from '../../api/email/route';
import FormItem from './formItem';
import { FormValues } from '@/globalTypes';
import Modal from './modal';

function Contact() {

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
          <Flex
            flexDir={'column'}
            alignItems={'flex-start'}
            w='60vw'
            h='100vh'
            alignSelf='center'
            pt='15%'
            pl='5vw'
          >
            <Flex flexDir={'column'} alignItems={'flex-start'}>
              <Heading gridRow={1} gridColumnStart={1} gridColumnEnd={2} fontSize={28} fontWeight={700} color={'pinks.500'} px={2}>{`Let's connect`}</Heading>
              <Text px={2} color={'pinks.500'}>
                Please reach out with any questions, comments, ideas, or just to connect!
              </Text>
            </Flex>
            <Flex flexDir={['column', null, null, null, 'row', null]} alignContent={['flex-start', null, null, null, 'flex-end', null]}>
              <FormItem
                name='name'
                label='Name'
                type='input'
                placeholder='Julie'
                width={[250, 275, 325, 400, 300, 400]}
              />
              <FormItem
                name='emailAddress'
                label='Email Address'
                type='input'
                placeholder='email@email.email'
                width={[250, 275, 325, 400, 300, 400]}
              />
            </Flex>
            <FormItem
              name='message'
              label='Message'
              type='textarea'
              placeholder='Type your message here!'
              width={[250, 275, 325, 400, 600, 800]}
            />
            <Button mt={4} type='submit' colorScheme='pinks' variant='solid' >Send it</Button>
          </Flex>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            modalTitle='Success!'
            bodyText={`You're email has been sent! I can't wait to connect.`}
            buttonText='Okay'
            buttonAction={onClose}
            secondaryButtonText='Home'
            secondaryButtonAction={() => router.push('/')}
          />
        </form>
      )}
    </Formik>
  )
}

export default Contact
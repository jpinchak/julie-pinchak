import {
  FormLabel,
  FormErrorMessage,
  FormControl,
  Input,
  Textarea,
  Stack,
} from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import { FormikProps } from 'formik'

type FormItemProps = {
  direction?: 'column' | 'row';
  name: string;
  label?: string;
  inputType?: string;
  placeholder?: string;
  formik: any; //TODO FIX THIS TYPING
  value?: string;
}

function FormItem({ direction = 'column', label, name, placeholder, formik, value, inputType = 'string' }: FormItemProps) {
  return (
    <FormControl id={name} isInvalid={!!formik.errors}>
      <Stack direction={direction} p={1}>
        <FormLabel color="logo.300">{label}</FormLabel>
        {
          inputType == 'textarea' ?
            <Textarea name={name} placeholder={placeholder} onChange={formik.handleChange} value={value} />
            :
            <Input name={name} value={value} type={inputType} placeholder={placeholder} onChange={formik.handleChange} />
        }
        <p>{formik.errors[name]}</p>
        <FormErrorMessage>{}</FormErrorMessage>
      </Stack>
    </FormControl>
  )
}

export default FormItem
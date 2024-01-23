import {
  FormLabel,
  FormErrorMessage,
  FormControl,
  Input,
  Textarea,
  Stack,
} from '@chakra-ui/react'
import { FormValues } from '@/globalTypes';
import { FieldInputProps, FormikProps } from 'formik'

type FormItemProps = {
  direction?: 'column' | 'row';
  name: string;
  label?: string;
  inputType?: string;
  placeholder?: string;
  formik: FormikProps<FormValues>; //TODO FIX THIS TYPING
}

function FormItem({ direction = 'column', label, name, placeholder, formik, inputType = 'string' }: FormItemProps) {
  return (
    <FormControl id={name} isInvalid={!!formik.errors}>
      <Stack direction={direction} p={1}>
        <FormLabel color="logo.300">{label}</FormLabel>
        {
          inputType == 'textarea' ?
            <Textarea size='lg' name={name} placeholder={placeholder} onChange={formik.handleChange} value={formik.getFieldProps(name).value} />
            :
            <Input name={name} value={formik.getFieldProps(name).value} type={inputType} placeholder={placeholder} onChange={formik.handleChange} />
        }
        <p>{formik.getFieldMeta(name).error}</p>
        <FormErrorMessage>{}</FormErrorMessage>
      </Stack>
    </FormControl>
  )
}

export default FormItem
import {
  FormLabel,
  FormErrorMessage,
  FormControl,
  Stack,
} from '@chakra-ui/react'
import { Field, useField } from 'formik'

type FormItemProps = {
  direction?: 'column' | 'row';
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
}

function FormItem({ direction = 'column', label, type, ...props }: FormItemProps) {

  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      <Stack direction={direction} p={1}>
        <FormLabel color="pinks.500">{label}</FormLabel>
        <Field as={type} {...field} {...props} />
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </Stack>
    </FormControl>
  )
}

export default FormItem
import {
  FormLabel,
  FormErrorMessage,
  FormControl,
  FormControlProps,
  Stack,
} from '@chakra-ui/react'
import { Field, useField, FieldHookConfig } from 'formik'

type FormItemProps = FormControlProps & {
  direction?: 'column' | 'row';
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
}

function FormItem({ direction = 'column', label, type, ...props }: FormItemProps): JSX.Element {

  const [field, meta] = useField(props as FieldHookConfig<FormItemProps>);

  return (
    <FormControl isInvalid={meta.touched && !!meta.error} {...props}>
      <Stack direction={direction} p={1}>
        <FormLabel color="pinks.500">{label}</FormLabel>
        <Field as={type} {...field} {...props} />
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </Stack>
    </FormControl>
  )
}

export default FormItem
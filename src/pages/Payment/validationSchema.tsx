import { isValidPhone, isValidCPF, isValidCNPJ } from '@brazilian-utils/brazilian-utils'
import * as yup from 'yup'

export const schema = yup
  .object({
  fullName: yup
    .string()
    .required('O nome é obrigatório.')
    .min(3, 'Nome deve ser completo')
    .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.'),
  email: yup.string().email('O email deve ser válido.').required('Email é obrigatório'),
  mobile: yup
    .string()
    .required('o celular é obrigatório.')
    .transform((value) => value.replace(/[^\d]/g, ''))
    .test('validateMobile', 'Celular Inválido.', (value) => isValidPhone(value)),
  document: yup
    .string()
    .required('O CPF/CNPJ é oobreigatório.')
    .transform((value) => value.replace(/[^\d]/g, ''))
    .test(
      'validateDocument',
      'O CPF/CNPJ é inválido',
      (value) => isValidCPF(value) || isValidCNPJ(value)),
  zipCode: yup
    .string()
    .required('O CEP é obrigatório.')
    .transform((val) => val.replace(/[^\d]+/g, '')),
  street: yup.string().required('o endereço é obrigatório.'),
  number: yup.string().required('O número é obrigatório.'),
  complement: yup.string().required(),
  neighborhood: yup.string().required('O bairro é obrigatório.'),
  city: yup.string().required('A cidade é obrigatória.'),
  state: yup.string().required('O estado é obrigatório.'),
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>

import * as yup from 'yup';

export const orderItemValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  order_id: yup.string().nullable().required(),
  tool_id: yup.string().nullable().required(),
});

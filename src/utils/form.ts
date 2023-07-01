import * as yup from 'yup';

export const formSchema = yup.object({
  name: yup.string().required(),
  image: yup.object({
    lines: yup
      .array()
      .required()
      .of(
        yup.object({
          pixels: yup
            .array()
            .required()
            .of(
              yup.object({
                color: yup.string().required(),
              })
            ),
        })
      ),
  }),
});

export type FormValues = yup.InferType<typeof formSchema>;

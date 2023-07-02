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

export const defaultPixelColor = '#ffffff';

export const defaultLine = getLineFromPixelsLength(20);

export const defaultValues: FormValues = {
  name: 'My amazing pixel art',
  image: {
    lines: Array(20).fill(defaultLine),
  },
};

export function getLineFromPixelsLength(length: number) {
  return { pixels: Array(length).fill({ color: defaultPixelColor }) };
}

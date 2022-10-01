import { FC, LabelHTMLAttributes } from 'react';

type Props = LabelHTMLAttributes<HTMLLabelElement>;

export const Label: FC<Props> = ({ children, ...props }) => (
  <label className="form-check-label" {...props}>
    {children}
  </label>
);

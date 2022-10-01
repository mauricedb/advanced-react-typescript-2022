import { FC, InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Checkbox: FC<Props> = ({ children, ...props }) => (
  <input className="form-check-input" type="checkbox" {...props} />
);

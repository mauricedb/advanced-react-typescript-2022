import { ComponentProps, FC, ReactNode, useId } from 'react';
import { Input } from './input';
import { Label } from './label';

type InputProps = ComponentProps<typeof Input>;

type Props = {
  children: ReactNode;
} & InputProps;

export const LabeledInput: FC<Props> = ({ children, ...props }) => {
  const internalId = useId();

  return (
    <div className="mb-3">
      <Label htmlFor={internalId}>{children}</Label>
      <Input id={internalId} {...props} />
    </div>
  );
};

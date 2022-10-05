import { ComponentProps, FC, useId } from 'react';
import { Checkbox } from './checkbox';
import { Label } from './label';

type Props = ComponentProps<typeof Checkbox>;

export const LabeledCheckbox: FC<Props> = ({ children, id, ...props }) => {
  const internalId = useId();

  return (
    <div className="form-check">
      <Checkbox id={id ?? internalId} {...props} />
      <Label htmlFor={id ?? internalId}>{children}</Label>
    </div>
  );
};

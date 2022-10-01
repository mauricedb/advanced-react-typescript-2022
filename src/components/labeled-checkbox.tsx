import { ChangeEventHandler, FC, ReactNode, useId } from 'react';
import { Checkbox } from './checkbox';
import { Label } from './label';

type Props = {
  checked: boolean;
  children: ReactNode;
  onChange?: ChangeEventHandler;
};

export const LabeledCheckbox: FC<Props> = ({ checked, children, onChange }) => {
  const internalId = useId();

  return (
    <div className="form-check">
      <Checkbox checked={checked} id={internalId} onChange={onChange} />
      <Label htmlFor={internalId}>{children}</Label>
    </div>
  );
};

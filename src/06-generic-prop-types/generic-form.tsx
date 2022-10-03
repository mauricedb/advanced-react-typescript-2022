import { FC, useState } from 'react';
import { LabeledInput } from '../components';

type Props<TValues> = {
  header: string;
  initialValues: TValues;
  onSubmit: (values: TValues) => void;
};

export function GenericForm<TValues extends Record<string, any>>({
  header,
  initialValues,
  onSubmit,
}: Props<TValues>) {
  const [values, setValues] = useState(initialValues);

  return (
    <form className="mb-5" onSubmit={() => onSubmit(values)}>
      <h3 className="mb-3">{header}</h3>

      {Object.keys(values).map((key) => (
        <LabeledInput
          key={key}
          value={values[key]}
          onChange={(e) => setValues({ ...values, [key]: e.target.value })}
        >
          <span className="text-capitalize">{key}:</span>
        </LabeledInput>
      ))}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

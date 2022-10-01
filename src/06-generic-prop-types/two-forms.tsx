import { FC } from 'react';
import { GenericForm } from './generic-form';

export const TwoForms: FC = () => {
  return (
    <>
      <GenericForm
        header="User"
        initialValues={{
          firstName: 'John',
          lastName: 'Doe',
        }}
        onSubmit={function (values) {
          alert(
            `${values.firstName} ${values.lastname}\n\n{JSON.stringify(values, null, 2)}`
          );
        }}
      />

      <GenericForm
        header="Address"
        initialValues={{
          street: 'Main St',
          houseNumber: '123',
          city: 'New York',
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      />
    </>
  );
};

import { FC } from 'react';
import { useIntl } from 'react-intl';

type Props = {
  messageId: string;
  variant: 'primary' | 'secondary' | 'success' | 'danger';
};

export const Alert: FC<Props> = ({ messageId, variant }) => {
  const { formatMessage } = useIntl();

  if (!messageId) {
    throw new Error('The messageId prop is required');
  }

  return (
    <div className={`alert alert-${variant}`} role="alert">
      {formatMessage({ id: messageId })}
    </div>
  );
};

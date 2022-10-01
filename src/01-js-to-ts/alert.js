import { useIntl } from 'react-intl';

export function Alert({ messageId, variant }) {
  const { formatMessage } = useIntl();

  if (!messageId) {
    throw new Error('The messageId prop is required');
  }
  return (
    <div className={`alert alert-${variant}`} role="alert">
      {formatMessage({ id: messageId })}
    </div>
  );
}

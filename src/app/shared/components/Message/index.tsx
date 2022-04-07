import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ErrorMessage, SuccessMessage } from './styles';
import { useEffect, useState } from 'react';

interface MessageProps {
  message: string;
  hasError: boolean;
}

export const Message: React.FC<MessageProps> = ({ message, hasError }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setVisible(false);
      return;
    }

    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <>
      {visible &&
        (hasError ? (
          <ErrorMessage>{message}</ErrorMessage>
        ) : (
          <SuccessMessage>{message}</SuccessMessage>
        ))}
    </>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
};

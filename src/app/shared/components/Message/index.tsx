import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ErrorMessage, SuccessMessage } from './styles';
import { useEffect, useState } from 'react';

interface MessageProps {
  message: string;
  hasError: boolean;
  cleanMessage: () => void;
}

export const Message: React.FC<MessageProps> = ({
  message,
  hasError,
  cleanMessage,
}) => {
  const [visible, setVisible] = useState(false);
  const TIEMPO_MOSTRAR_MENSAJE = 3000;

  useEffect(() => {
    if (!message) {
      setVisible(false);
      return;
    }

    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      cleanMessage();
    }, TIEMPO_MOSTRAR_MENSAJE);
    return () => clearTimeout(timer);
  }, [message, cleanMessage]);

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
  cleanMessage: PropTypes.func.isRequired,
};

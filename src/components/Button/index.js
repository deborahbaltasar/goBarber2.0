import React from 'react';

import { Container } from './styles';

function Button({children, ...rest}) {
  return (
    <Container>
      <button {...rest}>{children}</button>
    </Container>
  );
}

export default Button;
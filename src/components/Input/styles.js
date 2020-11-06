import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

export const Container = styled.div`
  background: #170D29;
  
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #170D29;
  color: #666360;
  
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props => props.isErroded && css`
    border-color: #ff073a;
  `}

  ${props => props.isFocused && css`
    color: #FF00FF;
    border-color: #FF00FF;
  `}

  ${props => props.isFilled && css`
    color: #FF00FF;
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #F4EDE8;

    &&::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #ff073a;
    color: #FFF;

    &::before {
      border-color: #ff073a transparent;
    }
  }
`;
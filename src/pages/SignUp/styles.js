import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.h1`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      font-size: 30px;
      margin-bottom: 24px;
    }
    
  }

  > a {
    color: #F4EDE8;
    display: block;
    font-size: 20px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#F4EDE8')}
    }
  }

`;

export const Background = styled.h1`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
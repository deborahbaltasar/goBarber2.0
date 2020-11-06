import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

const rotate = keyframes`
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(270deg);
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  

  > img {
    flex: 1;
    height: 80vh;
    transform: rotate(90deg);
    margin-top: 10vh;
    &:hover {
      animation: ${rotate} 0.9s linear;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
    color: #6F4BEF;
    font-weight: 600;
    font-size: 88px;
    font-family: 'Teko' serif,
    }

    p {
      color: #FFF;
      margin-top: -20px;
      margin-left: 20px;
      font-weight: 600;
      font-size: 24px;
      font-family: 'Rubik' serif,
    }
  }

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

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
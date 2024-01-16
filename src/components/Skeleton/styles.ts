import { styled, css, keyframes } from 'styled-components';

import { elementProsp } from '.';

const shimmerEffect = keyframes`
    0%{
        background-position: 0%;
    }
    50%{
        background-position: 50%;
    }
    75%{
        background-position: 125%;
    }
    100%{
        background-position: 200%;
    }
`

export const Element = styled.div<elementProsp>`
    background: linear-gradient(
        90deg,
        ${({theme})=>theme.colors.red} 0%,
        #ff4242 40%,
        ${({theme}) => theme.colors.red} 100%
    );
    background-size: 200%;
    border-radius: 4px;

    animation: ${shimmerEffect} 1s linear  infinite;



     ${({ type }) =>
    type === 'title' &&
    css`
      width: 75%;
      height: 32px;
      margin: 0.5rem 0;
    `}

  ${({ type }) =>
    type === 'text' &&
    css`
      width: 100%;
      height: 18px;
      margin: 0.25rem 0;
    `}

  ${({ type }) =>
    type === 'image' &&
    css`
      width: 50px;
      height: 50px;
      margin: 0.25rem 0;
      border-radius: 50%;
    `}

  ${({ type }) =>
    type === 'thumbnail' &&
    css`
      width: 100%;
      height: 200px;
      margin: 0.5rem 0;
      border-radius: 10px;
    `}
   

`
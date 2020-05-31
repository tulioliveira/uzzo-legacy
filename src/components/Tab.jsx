import React from 'react'
import Text from './Text'
import styled from 'styled-components'

const Link = styled(Text)`
  cursor: pointer;
  position: relative;
  font-weight: bold;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.25rem;
    bottom: -2px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.accent};
    transform-origin: bottom center;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};

    &::before {
      transform: scaleX(1);
      transform-origin: bottom center;
    }
  }
`


const Tab = ({ label }) => {

  return <Link ml={3}>
    {label}
  </Link>
}

export default Tab
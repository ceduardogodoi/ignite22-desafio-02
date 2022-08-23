import styled from 'styled-components'

export const CounterContainer = styled.div`
  background: ${props => props.theme['base-button']};
  border-radius: 6px;
  
  display: flex;
  align-items: center;
  column-gap: 0.25rem;

  & > button {
    border: none;
    background: transparent;
    padding: 0.5rem;
    line-height: 0;

    &:hover {
      & > svg {
        fill: ${props => props.theme['purple-dark']};
      }
    }
  }

  & > span {
    width: 100%;
    height: 100%;
    color: ${props => props.theme['base-title']};

    display: flex;
    align-items: center;
  }
`

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  display: flex;
  align-items: center;

  & > nav {
    margin-right: auto;
  }

  & > div {
    display: flex;
    column-gap: 0.75rem;
  }
`

export const BaseButton = styled.button`
  max-height: 38px;
  padding: 0.625rem;
  border: none;
  border-radius: 6px;
  line-height: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const LocationButton = styled(BaseButton)`
  background: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple-dark']};

  span {
    margin-left: 0.25rem;
  }
`

export const ShoppingCartButton = styled(BaseButton)`
  position: relative;
  max-width: 38px;
  background: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};

  & > div {
    position: absolute;
    right: -20%;
    top: -20%;
    width: 20px;
    height: 20px;
    background: ${props => props.theme['yellow-dark']};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
      color: ${props => props.theme.white};
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
`

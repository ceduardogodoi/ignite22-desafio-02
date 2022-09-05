import styled, { css } from 'styled-components'

export const MainContainer = styled.main`
  padding-top: 2.5rem;

  display: flex;
  column-gap: 2rem;
`

export const Card = styled.div`
  padding: 2.5rem;
  background: ${props => props.theme['base-card']};
  border-radius: 6px;

  & > header {
    display: flex;
    column-gap: 0.5rem;
    margin-bottom: 2rem;

    & :last-child {
      display: flex;
      flex-direction: column;

      & > span {
        font-size: 1rem;
        margin-bottom: 0.125rem;
        color: ${props => props.theme['base-subtitle']};
      }

      & > p {
        font-size: 0.875rem;
        color: ${props => props.theme['base-text']};
      }
    }
  }

  & > form {
    display: grid;
    gap: 1rem 0.75rem;

    & [placeholder="CEP"],
      [placeholder="Número"],
      [placeholder="Bairro"] {
      max-width: 12.5rem;
    }

    & [placeholder="Complemento"],
      [placeholder="Cidade"] {
      width: 100%;
    }

    & [placeholder="UF"] {
      max-width: 3.75rem;
    }
  }

  & + div {
    margin-top: 0.75rem;
  }
`

export const AddressLine1 = styled.div`
  display: flex;
  column-gap: 0.75rem;

  & > div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    &::after {
      position: absolute;
      content: 'Opcional';
      background: ${props => props.theme['base-input']};
      color: ${props => props.theme['base-label']};
      font-size: 0.75rem;
      font-style: italic;
      padding: 0 0.75rem;
    }
  }
`

export const AddressLine2 = styled.div`
  display: flex;
  column-gap: 0.75rem;
`

export const TextInput = styled.input`
  padding: 12px;
  background: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-button']};
  border-radius: 6px;
  color: ${props => props.theme['base-text']};

  &:focus {
    outline: 1px solid ${props => props.theme['yellow-dark']};
  }

  &::placeholder {
    font-size: 0.875rem;
    color: ${props => props.theme['base-label']};
  }
`

interface PaymentTypeButtonProps {
  selected?: boolean
}

export const PaymentTypeButton = styled.button<PaymentTypeButtonProps>`
  padding: 1rem 1.25rem;
  border: none;
  background: ${props => props.theme['base-button']};
  color: ${props => props.theme['base-text']};
  border-radius: 6px;
  min-width: 11rem;
  min-height: 3.125rem;

  display: inline-flex;
  align-items: center;

  ${props => props.selected && css`
    border: 1px solid ${props.theme['purple']};
    background: ${props.theme['purple-light']};
  `}

  ${props => !props.selected && css`
    &:hover {
      background: ${props.theme['base-hover']};
      color: ${props.theme['base-subtitle']};
    }
  `}

  & > span {
    margin-left: 0.75rem;
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  & + button {
    margin-left: 12px;
  }
`
export const OrderSection = styled.section`
  & > h1 {
    margin-bottom: 1rem;
  }

  & + section {
    flex: 1;
  }
`

export const SelectedCoffeesCard = styled.div`
  padding: 2.5rem;
  background: ${props => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const RemoveButton = styled.button`
  padding: 0.375rem 0.5rem;
  border: none;
  background: ${props => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  column-gap: 4px;

  & > span {
    font-size: 12px;
    color: ${props => props.theme['base-text']};
    text-transform: uppercase;
  }

  &:hover {
    background: ${props => props.theme['base-hover']};
    color: ${props => props.theme['base-subtitle']};
  }
`

export const CoffeeListItem = styled.li`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme['base-button']};

  display: flex;

  & > div + div {
    margin-left: 20px;
  }

  & + li {
    padding-top: 1.5rem;
  }

  & > strong {
    margin-left: auto;
    color: ${props => props.theme['base-text']};
  }
`

export const ActionsContainer = styled.div`
  & > span {
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const Actions = styled.div`
  display: flex;
  column-gap: 0.5rem;
`

export const Summary = styled.div`
  padding: 1.5rem 0;

  & div {
    display: flex;
    justify-content: space-between;

    & > span {
      font-size: 0.875rem;
      color: ${props => props.theme['base-text']};

      & + span {
        font-size: 1rem;
      }
    }

    & + div {
      margin-top: 1rem;

      & > strong {
        color: ${props => props.theme['base-subtitle']};
        font-size: 20px;
      }
    }
  }

`

export const PlaceOrderButton = styled.button`
  width: 100%;
  min-height: 2.875rem;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  background: ${props => props.theme.yellow};
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;

  &:hover {
    background: ${props => props.theme['yellow-dark']};
  }
`

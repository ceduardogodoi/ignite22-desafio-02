import styled from 'styled-components'


export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 5.875rem;
  padding-bottom: 6.75rem;
`

export const ContentContainer = styled.div`
  max-width: 588px;

  & > h1 {
    font-size: 3rem;
    line-height: 3.875rem;
    font-weight: 800;
    color: ${props => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  & > h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 26px;
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 4.125rem;
  }

  & > ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.25rem;

    li {
      display: flex;
      align-items: center;

      & > span {
        color: ${props => props.theme['base-text']};
      }
    }
  }
`

interface BulletProps {
  color: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const Bullet = styled.div<BulletProps>`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  margin-right: 0.75rem;
  background: ${props => props.theme[props.color]};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${props => props.theme.white};
  }
`

export const CoffeeListContainer = styled.main`
  padding-top: 2rem;

  & > h2 {
    margin-bottom: 3.375rem;
  }

  & > ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem 2rem;
  }
`

export const CoffeeCard = styled.li`
  padding: 1.25rem 1.5rem;
  border-radius: 6px 36px;
  background: ${props => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    display: block;
    margin: -2.5rem auto 0.75rem;

    & + div {
      display: flex;
      justify-content: center;
      column-gap: 0.25rem;
      margin-bottom: 1rem;

      span {
        color: ${props => props.theme['yellow-dark']};
      }

      & + strong {
        font: 700 1.25rem/26px 'Baloo 2', cursive;
        margin-bottom: 0.5rem;

        & + p {
          margin-bottom: 2.063rem;
          text-align: center;
          color: ${props => props.theme['base-label']};
        }
      }
    }
  }
`

export const CoffeeTypeTag = styled.span`
  background: ${props => props.theme['yellow-light']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  line-height: 13px;
  font-weight: 700;
  text-transform: uppercase;
`

export const PricingContainer = styled.div`
  display: flex;
`

export const Price = styled.div`
  margin-right: 1.438rem;

  & > span {
    font: 400 0.875rem/18px 'Roboto', sans-serif;
    margin-right: 0.25rem;
  }

  & > strong {
    font: 800 1.5rem/31px 'Baloo 2', cursive;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
`

export const ShoppingCartButton = styled.button`
  max-width: 38px;
  max-height: 38px;
  padding: 0.625rem;
  border: none;
  border-radius: 6px;
  line-height: 0;
  background: ${props => props.theme['purple-dark']};
  color: ${props => props.theme['base-card']};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${props => props.theme.purple};
  }
`

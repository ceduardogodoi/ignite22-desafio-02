import styled from 'styled-components'


export const HomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
`

export const ContentContainer = styled.div`
  max-width: 588px;

  & > h1 {
    font: 3rem/3.875rem 'Baloo 2', cursive;
    font-weight: 800;
    color: ${props => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  & > h2 {
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

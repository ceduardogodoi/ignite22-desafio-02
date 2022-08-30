import styled from 'styled-components'

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

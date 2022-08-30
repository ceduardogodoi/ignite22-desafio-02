import styled from 'styled-components'

export const MainContainer = styled.main`
  padding-top: 80px;

  & > h1 {
    font-size: 2rem;
    font-weight: 800;
    color: ${props => props.theme['yellow-dark']};
  }

  & > p {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 2.5rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContentCard = styled.div`
  padding: 2.5rem;
  min-width: 526px;
  height: fit-content;
  border: 1px solid ${props => props.theme['yellow']};
  border-radius: 6px 36px;

  & > ul {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    & > li {
      display: flex;
      column-gap: 0.75rem;

      & > p {
        color: ${props => props.theme['base-text']};

        & > strong {
          font-weight: 800;
        }
      }
    }
  }
`

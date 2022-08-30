import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { ContentCard, ContentContainer, MainContainer } from './styles'
import illustration from '../../assets/images/illustration.png'
import { Bullet } from '../../components/Bullet'

export function Success() {
  return (
    <MainContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <ContentContainer>
        <ContentCard>
          <ul>
            <li>
              <Bullet color="purple">
                <MapPin size={16} weight="fill" />
              </Bullet>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            </li>
            <li>
              <Bullet color="yellow">
                <Timer size={16} weight="fill" />
              </Bullet>
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </li>
            <li>
              <Bullet color="yellow-dark">
                <CurrencyDollar size={16} weight="fill" />
              </Bullet>
              <p>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </p>
            </li>
          </ul>
        </ContentCard>

        <div>
          <img src={illustration} alt="" />
        </div>
      </ContentContainer>
    </MainContainer>
  )
}

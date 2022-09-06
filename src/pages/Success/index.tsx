import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { ContentCard, ContentContainer, MainContainer } from './styles'
import illustration from '../../assets/images/illustration.png'
import { Bullet } from '../../components/Bullet'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const payment = {
  credit: 'Cartão de Crédito',
  debit: 'Cartão de Débito',
  cash: 'Dinheiro'
} as const

export function Success() {
  const { shippingAddress, paymentMethod } = useContext(CartContext)

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
                Entrega em <strong>{shippingAddress.street}, {shippingAddress.number}</strong>
                <br />
                {shippingAddress.neighborhood} - {shippingAddress.city}, {shippingAddress.state}
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
                <strong>{paymentMethod ? payment[paymentMethod] : 'Erro'}</strong>
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

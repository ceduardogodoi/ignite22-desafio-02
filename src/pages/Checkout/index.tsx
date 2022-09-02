import { useContext } from 'react'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash
} from 'phosphor-react'
import { QuantityCounter } from '../../components/QuantityCounter'
import { CartContext } from '../../contexts/CartContext'
import { priceFormatter } from '../../utils/formatter'
import {
  AddressLine1,
  AddressLine2,
  TextInput,
  Card,
  PaymentTypeButton,
  MainContainer,
  OrderSection,
  SelectedCoffeesCard,
  RemoveButton,
  CoffeeListItem,
  ActionsContainer,
  Actions,
  Summary,
  PlaceOrderButton
} from './styles'


export function Checkout() {
  const { items, totalItems, shippingPrice, removeItemFromCart } = useContext(CartContext)

  function handleRemoveItem(itemId: number) {
    removeItemFromCart(itemId)
  }

  return (
    <MainContainer>
      <OrderSection>
        <h1>Complete seu pedido</h1>

        <Card>
          <header>
            <div>
              <MapPinLine color="#C47F17" size={22} />
            </div>
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <form>
            <TextInput type="text" placeholder="CEP" maxLength={8} />
            <TextInput type="text" placeholder="Rua" />

            <AddressLine1>
              <TextInput type="text" placeholder="Número" />
              <TextInput type="text" placeholder="Complemento" />
            </AddressLine1>

            <AddressLine2>
              <TextInput type="text" placeholder="Bairro" />
              <TextInput type="text" placeholder="Cidade" />
              <TextInput type="text" placeholder="UF" maxLength={2} />
            </AddressLine2>
          </form>
        </Card>

        <Card>
          <header>
            <div>
              <CurrencyDollar color="#8047F8" size={22} />
            </div>
            <div>
              <span>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </header>

          <PaymentTypeButton selected>
            <CreditCard size={16} color="#8047F8" />
            <span>Cartão de Crédito</span>
          </PaymentTypeButton>
          <PaymentTypeButton>
            <Bank size={16} color="#8047F8" />
            <span>Cartão de Débito</span>
          </PaymentTypeButton>
          <PaymentTypeButton>
            <Money size={16} color="#8047F8" />
            <span>Dinheiro</span>
          </PaymentTypeButton>
        </Card>
      </OrderSection>

      <OrderSection>
        <h1>Cafés selecionados</h1>

        <SelectedCoffeesCard>
          <ul>
            {items.map(item => (
              <CoffeeListItem key={item.id}>
                <div>
                  <img width={64} src={item.image} alt="" />
                </div>

                <ActionsContainer>
                  <span>{item.title}</span>
                  <Actions>
                    <QuantityCounter item={item} />
                    <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                      <Trash size={16} color="#8047F8" />
                      <span>Remover</span>
                    </RemoveButton>
                  </Actions>
                </ActionsContainer>

                <strong>{priceFormatter.format((item.quantity ?? 1) * item.price)}</strong>
              </CoffeeListItem>
            ))}
          </ul>

          <Summary>
            <div>
              <span>Total de itens</span>
              <span>{priceFormatter.format(totalItems)}</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>{priceFormatter.format(shippingPrice)}</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>{priceFormatter.format(totalItems + shippingPrice)}</strong>
            </div>
          </Summary>

          <PlaceOrderButton>Confirmar pedido</PlaceOrderButton>
        </SelectedCoffeesCard>
      </OrderSection>
    </MainContainer>
  )
}

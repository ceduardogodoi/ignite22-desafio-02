import { useContext, ChangeEvent } from 'react'
import {
  MapPinLine,
  CurrencyDollar,
  Trash
} from 'phosphor-react'
import { QuantityCounter } from '../../components/QuantityCounter'
import { CartContext, PaymentMethod, paymentMethods } from '../../contexts/CartContext'
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
  const {
    items,
    totalItems,
    shippingPrice,
    shippingAddress,
    paymentMethod,
    removeItemFromCart,
    addShippingAddress,
    addPaymentMethod,
    resetItems
  } = useContext(CartContext)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    addShippingAddress({
      ...shippingAddress,
      [event.target.name]: event.target.value
    })
  }

  function handleRemoveItem(itemId: number) {
    removeItemFromCart(itemId)
  }

  function handlePaymentMethodClick(paymentMethod: PaymentMethod) {
    addPaymentMethod(paymentMethod)
  }

  function handleResetItems() {
    resetItems()
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
            <TextInput name="postalCode" type="text" placeholder="CEP" maxLength={8} onChange={handleInputChange} />
            <TextInput name="street" type="text" placeholder="Rua" onChange={handleInputChange} />

            <AddressLine1>
              <TextInput name="number" type="text" placeholder="Número" onChange={handleInputChange} />
              <div>
                <TextInput name="line1" type="text" placeholder="Complemento" onChange={handleInputChange} />
              </div>
            </AddressLine1>

            <AddressLine2>
              <TextInput name="neighborhood" type="text" placeholder="Bairro" onChange={handleInputChange} />
              <TextInput name="city" type="text" placeholder="Cidade" onChange={handleInputChange} />
              <TextInput name="state" type="text" placeholder="UF" maxLength={2} onChange={handleInputChange} />
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

          {paymentMethods.map(currentPaymentMethod => (
            <PaymentTypeButton
              key={currentPaymentMethod.value}
              onClick={() => handlePaymentMethodClick(currentPaymentMethod.value)}
              selected={currentPaymentMethod.value === paymentMethod}
            >
              <currentPaymentMethod.Icon />
              <span>{currentPaymentMethod.label}</span>
            </PaymentTypeButton>
          ))}
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
                    <QuantityCounter item={item} canChangeQuantityOnCart />
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

          <PlaceOrderButton
            to="/success"
            onClick={handleResetItems}
          >
            Confirmar pedido
          </PlaceOrderButton>
        </SelectedCoffeesCard>
      </OrderSection>
    </MainContainer>
  )
}

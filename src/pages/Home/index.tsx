
import { useContext, useEffect } from 'react'
import { Coffee as CoffeeIcon, Package, ShoppingCart, Timer } from 'phosphor-react'
import { QuantityCounter } from '../../components/QuantityCounter'
import { Bullet } from '../../components/Bullet'
import { CartContext, Item } from '../../contexts/CartContext'
import { numberFormatter } from '../../utils/formatter'
import { coffees } from '../../data'
import coffeeCup from '../../assets/images/coffee-cup.png'
import {
  PricingContainer,
  CoffeeCard,
  CoffeeListContainer,
  CoffeeTypeTag,
  ContentContainer,
  IntroContainer,
  Price,
  ShoppingCartButton,
  ActionsContainer
} from './styles'

export function Home() {
  const { addItemToCart, resetPaymentMethod } = useContext(CartContext)

  useEffect(() => {
    resetPaymentMethod()
  }, [])

  function handleAddCoffeeToCart(coffee: Item) {
    addItemToCart(coffee)
  }

  return (
    <>
      <IntroContainer>
        <div>
          <ContentContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>

            <ul>
              <li>
                <Bullet color="yellow-dark">
                  <ShoppingCart weight="fill" />
                </Bullet>
                <span>Compra simples e segura</span>
              </li>
              <li>
                <Bullet color="base-text">
                  <Package weight="fill" />
                </Bullet>
                <span>Embalagem mantém o café intacto</span>
              </li>
              <li>
                <Bullet color="yellow">
                  <Timer weight="fill" />
                </Bullet>
                <span>Entrega rápida e rastreada</span>
              </li>
              <li>
                <Bullet color="purple">
                  <CoffeeIcon weight="fill" />
                </Bullet>
                <span>O café chega fresquinho até você</span>
              </li>
            </ul>
          </ContentContainer>
        </div>

        <div>
          <img src={coffeeCup} alt="" />
        </div>
      </IntroContainer>

      <CoffeeListContainer>
        <h2>Nossos cafés</h2>

        <ul>
          {coffees.map(coffee => (
            <CoffeeCard key={coffee.id}>
              <img src={coffee.image} alt="" />
              <div>
                {coffee.tags.map(tag => (
                  <CoffeeTypeTag key={tag}>{tag}</CoffeeTypeTag>
                ))}
              </div>
              <strong>{coffee.title}</strong>
              <p>{coffee.description}</p>

              <PricingContainer>
                <Price>
                  <span>R$</span>
                  <strong>{numberFormatter.format(coffee.price)}</strong>
                </Price>

                <ActionsContainer>
                  <QuantityCounter item={coffee} />

                  <ShoppingCartButton
                    title="Adicionar ao carrinho"
                    onClick={() => handleAddCoffeeToCart(coffee)}
                  >
                    <ShoppingCart weight="fill" />
                  </ShoppingCartButton>
                </ActionsContainer>
              </PricingContainer>
            </CoffeeCard>
          ))}
        </ul>
      </CoffeeListContainer>
    </>
  )
}

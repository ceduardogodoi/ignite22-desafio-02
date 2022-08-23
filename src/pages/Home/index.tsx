import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { QuantityCounter } from '../../components/Counter'
import coffeeCup from '../../assets/images/coffee-cup.png'
import espresso from '../../assets/images/coffe-types/espresso.png'
import {
  PricingContainer,
  Bullet,
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
                  <Coffee weight="fill" />
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
          {new Array(5).fill(1).map(num => (
            <CoffeeCard key={num}>
              <img src={espresso} alt="" />
              <div>
                <CoffeeTypeTag>Especial</CoffeeTypeTag>
                <CoffeeTypeTag>Alcoólico</CoffeeTypeTag>
                <CoffeeTypeTag>Gelado</CoffeeTypeTag>
              </div>
              <strong>Expresso Tradicional</strong>
              <p>O tradicional café feito com água quente e grãos moídos</p>

              <PricingContainer>
                <Price>
                  <span>R$</span>
                  <strong>9,90</strong>
                </Price>

                <ActionsContainer>
                  <QuantityCounter />

                  <ShoppingCartButton title="Adicionar ao carrinho">
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

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeCup from '../../assets/images/coffee-cup.png'
import { Bullet, ContentContainer, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
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
    </HomeContainer>
  )
}

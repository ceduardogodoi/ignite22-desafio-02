import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { ShoppingCartButton, HeaderContainer, LocationButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Ir para a página inicial">
          <img src={logo} alt="" />
        </NavLink>
      </nav>

      <div>
        <LocationButton title="Alterar localização">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationButton>
        <ShoppingCartButton title="Ir para o Carrinho">
          {/* <div>
            <span>3</span>
          </div> */}
          <ShoppingCart size={22} weight="fill" />
        </ShoppingCartButton>
      </div>
    </HeaderContainer>
  )
}

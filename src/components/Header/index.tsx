import { useContext } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { ShoppingCartButton, HeaderContainer, LocationButton } from './styles'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { quantity } = useContext(CartContext)

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
          {quantity > 0 && (
            <div>
              <span>{quantity}</span>
            </div>
          )}
          <ShoppingCart size={22} weight="fill" />
        </ShoppingCartButton>
      </div>
    </HeaderContainer>
  )
}

import { useContext } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import logo from '../../assets/logo.svg'
import { ShoppingCartLink, HeaderContainer, LocationButton } from './styles'

export function Header() {
  const { quantity } = useContext(CartContext)

  return (
    <HeaderContainer>
      <nav>
        <Link to="/" title="Ir para a página inicial">
          <img src={logo} alt="" />
        </Link>
      </nav>

      <div>
        <LocationButton title="Alterar localização">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationButton>
        <ShoppingCartLink to="/checkout" title="Ir para o Carrinho">
          {quantity > 0 && (
            <div>
              <span>{quantity}</span>
            </div>
          )}
          <ShoppingCart size={22} weight="fill" />
        </ShoppingCartLink>
      </div>
    </HeaderContainer>
  )
}

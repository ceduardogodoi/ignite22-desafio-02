import { useContext, useState } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { CartContext, Item } from '../../contexts/CartContext'
import { QuantityContainer } from './styles'

interface QuantityCounterProps {
  item: Item,
  canChangeQuantityOnCart?: boolean
}

export function QuantityCounter({ item, canChangeQuantityOnCart = false }: QuantityCounterProps) {
  const { updateItemQuantityOnCart } = useContext(CartContext)

  const [quantity, setQuantity] = useState(() => item.quantity ? item.quantity : 1)

  const isDisabled = quantity < 2

  function handleIncrement() {
    const newQuantity = quantity + 1

    item.quantity = newQuantity
    setQuantity(newQuantity)
    if (canChangeQuantityOnCart) {
      updateItemQuantityOnCart(item.id, newQuantity)
    }
  }

  function handleDecrement() {
    const newQuantity = quantity - 1

    item.quantity = newQuantity
    setQuantity(newQuantity)
    if (canChangeQuantityOnCart) {
      updateItemQuantityOnCart(item.id, newQuantity)
    }
  }

  return (
    <QuantityContainer>
      <button disabled={isDisabled} onClick={handleDecrement}>
        <Minus size={14} weight="fill" color="#8047f8" />
      </button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>
        <Plus size={14} weight="fill" color="#8047f8" />
      </button>
    </QuantityContainer>
  )
}

import { useState } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { Item } from '../../contexts/CartContext'
import { QuantityContainer } from './styles'

interface QuantityCounterProps {
  item: Item
}

export function QuantityCounter({ item }: QuantityCounterProps) {
  const [quantity, setQuantity] = useState(1)

  const isDisabled = quantity < 2

  function handleIncrement() {
    setQuantity(currentQuantity => {
      const newQuantity = currentQuantity + 1

      item.quantity = newQuantity
      return newQuantity
    })
  }

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(currentQuantity => {
        const newQuantity = currentQuantity - 1

        item.quantity = newQuantity
        return newQuantity
      })
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

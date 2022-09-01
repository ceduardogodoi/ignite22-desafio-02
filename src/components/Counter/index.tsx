import { useState } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

export function QuantityCounter() {
  const [quantity, setQuantity] = useState(1)

  const isDisabled = quantity < 2

  function handleIncrement() {
    setQuantity(currentQuantity => currentQuantity + 1)
  }

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(currentQuantity => currentQuantity - 1)
    }
  }

  return (
    <CounterContainer>
      <button disabled={isDisabled} onClick={handleDecrement}>
        <Minus size={14} weight="fill" color="#8047f8" />
      </button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>
        <Plus size={14} weight="fill" color="#8047f8" />
      </button>
    </CounterContainer>
  )
}

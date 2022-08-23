import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

export function QuantityCounter() {
  return (
    <CounterContainer>
      <button>
        <Minus size={14} weight="fill" color="#8047f8" />
      </button>
      <span>1</span>
      <button>
        <Plus size={14} weight="fill" color="#8047f8" />
      </button>
    </CounterContainer>
  )
}

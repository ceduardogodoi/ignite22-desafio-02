import { createContext, useState, PropsWithChildren } from 'react'

export enum Tag {
  TRADITIONAL = 'Tradicional',
  ICED = 'Gelado',
  WITH_MILK = 'Com leite',
  ALCOHOLIC = 'Alcoólico',
  ESPECIAL = 'Especial'
}

export interface Item {
  id: number,
  price: number,
  title: string,
  description: string,
  tags: Tag[],
  image: string,
  quantity: number
}

interface CartContextType {
  items: Item[],
  quantity: number,
  total: number,
  addCoffeeToCart(coffee: Item): void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<Item[]>([])

  const { total, quantity } = items.reduce((accumulator, currentItem) => {
    accumulator.quantity += currentItem.quantity
    accumulator.total += currentItem.quantity * currentItem.price
    return accumulator
  }, {
    total: 0,
    quantity: 0
  })

  console.log(total)

  function addCoffeeToCart(coffee: Item) {
    if (!coffee.quantity) {
      coffee.quantity = 1
    }
    setItems(currentItems => [...currentItems, coffee])
  }

  return (
    <CartContext.Provider value={{
      items,
      quantity,
      total,
      addCoffeeToCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

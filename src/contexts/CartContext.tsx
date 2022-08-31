import { createContext, PropsWithChildren, useState } from 'react'

export enum Tag {
  TRADITIONAL = 'Tradicional',
  ICED = 'Gelado',
  WITH_MILK = 'Com leite',
  ALCOHOLIC = 'Alcoólico',
  ESPECIAL = 'Especial'
}

export interface Coffee {
  id: number,
  price: number,
  title: string,
  description: string,
  tags: Tag[],
  image: string
}

interface CartContextType {
  items: Coffee[],
  totalItems: number,
  totalPrice: number,
  addCoffeeToCart(coffee: Coffee): void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState([] as Coffee[])

  const totalItems = items.length
  const totalPrice = items.reduce((accumulator, currentItem) => {
    accumulator += currentItem.price
    return accumulator
  }, 0)

  function addCoffeeToCart(coffee: Coffee) {
    setItems(currentItems => [...currentItems, coffee])
  }

  return (
    <CartContext.Provider value={{ items, totalItems, totalPrice, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}

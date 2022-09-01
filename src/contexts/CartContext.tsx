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
  quantity?: number
}

interface CartContextType {
  items: Item[],
  totalItems: number,
  totalPrice: number,
  addCoffeeToCart(coffee: Item): void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<Item[]>([])

  const totalItems = items.length
  const totalPrice = items.reduce((accumulator, currentItem) => {
    accumulator += currentItem.price
    return accumulator
  }, 0)

  function addCoffeeToCart(coffee: Item) {
    setItems(currentItems => [...currentItems, coffee])
  }

  return (
    <CartContext.Provider value={{
      items,
      totalItems,
      totalPrice,
      addCoffeeToCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

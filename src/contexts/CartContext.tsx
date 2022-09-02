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
  quantity: number,
  totalItems: number,
  shippingPrice: number,
  addCoffeeToCart(coffee: Item): void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<Item[]>([])

  const { totalItems, quantity } = items.reduce((accumulator, currentItem) => {
    if (!currentItem.quantity) {
      currentItem.quantity = 1
    }

    accumulator.quantity += currentItem.quantity
    accumulator.totalItems += currentItem.quantity * currentItem.price
    return accumulator
  }, {
    totalItems: 0,
    quantity: 0,
  })

  function addCoffeeToCart(coffee: Item) {
    setItems(currentItems => [...currentItems, coffee])
  }

  return (
    <CartContext.Provider value={{
      items,
      quantity,
      totalItems,
      shippingPrice: 3.5,
      addCoffeeToCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

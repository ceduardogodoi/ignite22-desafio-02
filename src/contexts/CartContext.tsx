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
  addItemToCart(coffee: Item): void,
  removeItemFromCart(itemId: number): void
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

  function addItemToCart(item: Item) {
    setItems(currentItems => [...currentItems, item])
  }

  function removeItemFromCart(itemId: number) {
    setItems(items => items.filter(item => item.id !== itemId))
  }

  return (
    <CartContext.Provider value={{
      items,
      quantity,
      totalItems,
      shippingPrice: 3.5,
      addItemToCart,
      removeItemFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

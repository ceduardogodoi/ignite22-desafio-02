import { createContext, useState, PropsWithChildren } from 'react'
import { Bank, CreditCard, Money } from 'phosphor-react'

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

interface Address {
  postalCode: string,
  street: string,
  number: string,
  line1?: string,
  neighborhood: string,
  city: string,
  state: string
}

export enum PaymentMethod {
  CREDIT_CARD = 'credit',
  DEBIT_CARD = 'debit',
  CASH = 'cash'
}

export const paymentMethods = [
  {
    label: 'Cartão de Crédito',
    value: PaymentMethod.CREDIT_CARD,
    Icon: () => <CreditCard size={16} color="#8047F8" />
  },
  {
    label: 'Cartão de Débito',
    value: PaymentMethod.DEBIT_CARD,
    Icon: () => <Bank size={16} color="#8047F8" />
  },
  {
    label: 'Dinheiro',
    value: PaymentMethod.CASH,
    Icon: () => <Money size={16} color="#8047F8" />
  }
] as const

interface CartContextType {
  items: Item[],
  quantity: number,
  totalItems: number,
  shippingPrice: number,
  shippingAddress: Address,
  paymentMethod?: PaymentMethod
  addItemToCart(coffee: Item): void,
  removeItemFromCart(itemId: number): void,
  updateItemQuantityOnCart(itemId: number, newQuantity: number): void,
  addShippingAddress(address: Address): void,
  addPaymentMethod(paymentMethod: PaymentMethod): void,
  resetItems(): void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<Item[]>([])
  const [shippingAddress, setShippingAddress] = useState({} as Address)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>()

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
    setItems(currentItems => currentItems.filter(item => item.id !== itemId))
  }

  function updateItemQuantityOnCart(itemId: number, newQuantity: number) {
    setItems(currentItems => currentItems.map(item => {
      if (item.id === itemId) {
        item.quantity = newQuantity
      }

      return item
    }))
  }

  function addShippingAddress(address: Address) {
    setShippingAddress(address)
  }

  function addPaymentMethod(paymentMethod: PaymentMethod) {
    setPaymentMethod(paymentMethod)
  }

  function resetItems() {
    setItems([])
  }

  return (
    <CartContext.Provider value={{
      items,
      quantity,
      totalItems,
      shippingPrice: 3.5,
      shippingAddress,
      paymentMethod,
      addItemToCart,
      removeItemFromCart,
      updateItemQuantityOnCart,
      addShippingAddress,
      addPaymentMethod,
      resetItems
    }}>
      {children}
    </CartContext.Provider>
  )
}

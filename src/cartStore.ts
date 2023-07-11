import { writable, get } from "svelte/store";

export const cartItems = writable<CartItem[]>([]);

export const addToCart = (product: Product) => {
  const items: CartItem[] = get(cartItems)
  const itemsPosition: number = items.findIndex((item) => item.productCode === product.code )

  if (itemsPosition === -1) {
    return cartItems.update(() => {
      return [...items, { productCode: product.code, quantity: 1, price: product.price }]
    })
  }

  cartItems.update(() => {
    const updatedItems: CartItem[] = items.map(item => {
      if (item.productCode === product.code) {
        return { ...item, quantity: item.quantity + 1, price: product.price * (item.quantity + 1) }
      }
      return item
    })

    return updatedItems
  })
}

export const removeFromCart = (product: Product) => {
  const items: CartItem[] = get(cartItems)
  const itemsPosition: number = items.findIndex((item) => item.productCode === product.code )

  if (items[itemsPosition]?.quantity - 1 === 0) {
    items.splice(itemsPosition, 1)
  }

  cartItems.update(() => {
    const updatedItems: CartItem[] = items.map(item => {
      if (item.productCode === product.code) {
        return { ...item, quantity: item.quantity - 1, price: product.price * (item.quantity - 1) }
      }
      return item
    })

    return updatedItems
  })
}

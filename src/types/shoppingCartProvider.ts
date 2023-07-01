import { ReactNode } from "react"

export type shoppingCartProviderProps = {
    children: ReactNode
}

export type shoppingCartContextType = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
}

export type CartItem = {
    id: number
    quantity: number
}
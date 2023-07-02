import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { CartItemProps } from "../types/shoppingCartProvider"
import { formatCurrency } from "../utilities/formatCurrency"

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center flex-wrap justify-content-between">
            <img
                src={item.imgUrl}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
                alt={item.name}
            />
            <div className="d-flex flex-wrap justify-content-space-between gap-2 align-items-start">
                <div className="me-auto">
                    <div>
                        {item.name}{" "}
                        {quantity > 1 && (
                            <span className="text-muted" style={{ fontSize: ".65rem" }}>
                                x{quantity}
                            </span>
                        )}
                    </div>
                    <div className="text-muted" style={{ fontSize: ".75rem" }}>
                        {formatCurrency(item.price)}
                    </div>
                </div>
                <div className="d-flex">
                    <div> {formatCurrency(item.price * quantity)}</div>
                    <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                    >
                        &times;
                    </Button>
                </div>
            </div>
        </Stack>
    )
}
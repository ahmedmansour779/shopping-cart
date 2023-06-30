import { Button, Card } from "react-bootstrap";
import { StoreItemProps } from "../types/itemProps";
import { formatCurrency } from "../utilities/formatCurrency";

function StoreItems({ id, name, price, imgUrl }: StoreItemProps) {
    const quantity = 0;
    return (
        <Card key={id} className="h-100">
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
                alt={name}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title
                    className="d-flex justify-content-between
                        align-items-baseline
                        mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100">
                            + Add To Cart
                        </Button>
                    ) : (
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{ gap: ".5rem" }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ gap: ".5rem" }}
                            >
                                <Button>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart
                                </div>
                                <Button>+</Button>
                            </div>
                            <Button
                                variant="danger"
                                size="sm"
                            >
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}

export default StoreItems
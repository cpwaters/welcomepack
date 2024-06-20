import { JSXElement } from "solid-js";

import "./horizontal-card.css";
import { Button } from "../button/button";
import { Cart } from "../../assets/cart";
import { StarRating } from "../star-rating/star-rating";

interface CardProps {
  images: string;
  title: string;
  id: string;
  description: string;
  category: string;
  price: string;
  discountPercentage: string;
  rating: string;
  stock: string;
  tags: string[];
  brand: string;
  dimensions: Record<string, string>;
  sku: string;
  weight: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  minimumOrderQuantity: string;
}

export function HorizontalCard(props: CardProps): JSXElement {
  return (
    <div class="h-card">
      <img src={props.images[0]} alt={props.title} />
      <div class="h-card-description">
        <p>
          {props.brand} {props.title} ({props.sku})
        </p>
        <StarRating rating={props.rating} />
        <p>rating: {props.rating} `[stars]`</p>
        <p>{props.description}</p>
        <p>€ {props.price}</p>
        <p>
          {props.availabilityStatus}: {props.stock} Available
        </p>

        <div class="button-section">
          <Button color={"#3cd146"}>
            <Cart />
          </Button>
        </div>
      </div>
      {/* discountPercentage: {props.discountPercentage} */}
      {/* warrantyInformation: {props.warrantyInformation} */}
      {/* shippingInformation: {props.shippingInformation} */}
      {/* minimumOrderQuantity: {props.minimumOrderQuantity} */}
    </div>
  );
}

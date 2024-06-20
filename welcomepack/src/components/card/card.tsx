import { JSXElement } from "solid-js";
import { A } from "@solidjs/router";
import "./card.css";
import { Button } from "../button/button";
import { Cart } from "../../assets/cart";
import { Ribbon } from "../ribbon/ribbon";

interface CardProps {
  img: string;
  title: string;
  id: string;
  status: string;
}

export function Card({ img, title, id, status }: CardProps): JSXElement {
  return (
    <div class="v-card">
      {status === "Low Stock" && <Ribbon color={"Warning"} text={status} />}
      <img src={img} alt={title} />
      <p>{title}</p>
      <div class="button-section">
        <A href={`/products/${id}`}>More Details</A>
        <Button color={"#3cd146"}>
          <Cart />
        </Button>
      </div>
    </div>
  );
}

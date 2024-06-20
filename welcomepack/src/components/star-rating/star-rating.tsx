import { For, JSXElement, createSignal } from "solid-js";

import "./star-rating.css";

interface RatingProps {
  rating: string;
}

export function StarRating({ rating }: RatingProps): JSXElement {
  const count = Math.round(Number(rating));

  //const [stars, setStars] = createSignal(0);

  let checkedStar = <span class="fa fa-star checked"></span>;

  let starArr = [];

  for (let i = 0; i < count; i++) {
    starArr.push(checkedStar);
  }

  // for loop counts the percentage and adds a star for each one
  // then work out how to do it out of 5

  return (
    <div class="ratings">
      {starArr}
      {/* <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span> */}
    </div>
  );
}

import { Index, JSXElement } from "solid-js";
import { A } from "@solidjs/router";

import { CartMini } from "../cart/cart-dropdown";
import { Search } from "../search/search";

import "./nav.css";

interface NavProps {
  links: string[];
}

export function Nav({ links }: NavProps): JSXElement {
  return (
    <nav>
      <ul class="nav-left">
        <a href={"/"}>
          <li>Home</li>
        </a>
        <Index each={links}>
          {(link) => (
            <A href={`/${link()}`}>
              <li>{link()}</li>
            </A>
          )}
        </Index>
      </ul>
      <ul class="nav-right">
        <Search />
        <CartMini />
      </ul>
    </nav>
  );
}

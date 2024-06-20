import { JSXElement } from "solid-js";

import { Nav } from "../nav/nav";
import { Banner } from "../banner";
import { Footer } from "../footer/footer";
import banner from "../../assets/banner.jpg";

import "./layout.css";

const navArr = ["products"];

export function Layout({ children }: any): JSXElement {
  return (
    <div class="layout">
      <Nav links={navArr} />
      <div class="inner-children">
        <Banner bannerImage={banner} />
        {children}
      </div>
      <Footer />
    </div>
  );
}

import { JSXElement } from "solid-js";

// image banner for homepage
export function Banner(bannerImage: any): JSXElement {
  return <img src={bannerImage.bannerImage} alt={"banner"} />;
}

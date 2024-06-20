import { For, createResource, Show, JSX } from "solid-js";
import { Card } from "../components/card/card";
import { Layout } from "../components/layout/layout";

const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
};

export function GetAllProducts(): JSX.Element {
  const [products] = createResource(fetchProducts);

  return (
    <Layout>
      <div class="product-list">
        <Show when={products()} fallback={<p>Loading...</p>}>
          <For each={products().products}>
            {(product) => (
              <Card
                img={product.images[0]}
                title={product.title}
                id={product.id}
                status={product.availabilityStatus}
              />
              // <li>
              //   <img src={product.images[0]} alt={product.title} />
              //   id: {product.id} - title: {product.title} - index: {index()}
              //   Description: {product.description}
              //   category: {product.category}
              //   price: {product.price}
              //   discountPercentage: {product.discountPercentage}
              //   rating: {product.rating} `[stars]`, stock: {product.stock}
              //   tags: {product.tags[0]}, {product.tags[1]}
              //   brand: {product.brand}
              //   sku: {product.sku}
              //   weight: {product.weight}g 2, dimensions: W:{" "}
              //   {product.dimensions.width} x H: {product.dimensions.height} x D:{" "}
              //   {product.dimensions.depth}
              //   warrantyInformation: {product.warrantyInformation}
              //   shippingInformation: {product.shippingInformation}
              //availabilityStatus: {product.availabilityStatus}
              //   minimumOrderQuantity: {product.minimumOrderQuantity}
              // </li>
            )}
          </For>
          {/* <p>{console.log(products().products)}</p> */}
        </Show>
      </div>
    </Layout>
  );
}

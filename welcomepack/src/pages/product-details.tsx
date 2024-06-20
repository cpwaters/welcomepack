import { JSXElement, Show, createResource } from "solid-js";
import { useParams } from "@solidjs/router";

import { Layout } from "../components/layout/layout";
import { HorizontalCard } from "../components/card/horizontal-card";
import { Table } from "../components/table/table";

const fetchProduct = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
};

export function ProductDetails(): JSXElement {
  const params = useParams();

  const [product] = createResource(params.id, fetchProduct);
  return (
    <Layout>
      <h2>Product Details</h2>
      <Show when={product()} fallback={<p>Loading...</p>}>
        <HorizontalCard {...product()} />
        <Table {...product()} />
      </Show>
    </Layout>
  );
}

import { JSXElement } from "solid-js";
import { Layout } from "../components/layout/layout";

export function Home(): JSXElement {
  return (
    <Layout>
      <h1>WelcomePack</h1>
      <p>We're here, for when you are!</p>
    </Layout>
  );
}

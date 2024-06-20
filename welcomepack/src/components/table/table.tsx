import { JSXElement } from "solid-js";

interface TableProps {
  category: string;
  tags: string[];
  weight: string;
  dimensions: {
    width: string;
    height: string;
    depth: string;
  };
}

export function Table({ ...props }: TableProps): JSXElement {
  return (
    <table>
      <tbody>
        <tr>
          <td>Category: </td>
          <td>{props.category}</td>
        </tr>
        <tr>
          <td>Tags: </td>
          <td>
            {props.tags[0]}, {props.tags[1]}
          </td>
        </tr>
        <tr>
          <td>Weight: </td>
          <td>{props.weight}g</td>
        </tr>
        <tr>
          <td>Dimensions: </td>
          <td>
            W: {props.dimensions.width} x H:
            {props.dimensions.height} x D:
            {props.dimensions.depth}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

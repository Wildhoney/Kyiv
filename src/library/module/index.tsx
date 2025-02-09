import { Stitched } from "../types/index.ts";
import { ModuleOptions } from "./types.ts";
import Tree from "./tree/index.tsx";
import { ElementName } from "./tree/types.ts";
import { ElementType } from "preact/compat";

export default function module<S extends Stitched>(name: TemplateStringsArray) {
  return (options: ModuleOptions<S>): ElementType<S["Props"]> => {
    const elementName = name.join("") as ElementName;

    return (elementProps) => (
      <Tree moduleOptions={{ ...options, elementName, elementProps }} />
    );
  };
}

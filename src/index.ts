import { format, parse } from "https://deno.land/std@0.189.0/path/mod.ts";

import inputArgs from "./handlers/cli/args.ts";
import { imageToPAA } from "./handlers/images/imageToPAA.ts";

imageToPAA(
  inputArgs.image,
  format({ ...parse(inputArgs.image), base: "", ext: ".paa" }),
);

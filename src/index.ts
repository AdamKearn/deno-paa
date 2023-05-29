import { format, parse } from "https://deno.land/std@0.189.0/path/mod.ts";
import { walk } from "https://deno.land/std@0.188.0/fs/walk.ts";

import args from "./handlers/cli/args.ts";
import { convertImage } from "./handlers/images/convertImage.ts";

import { frontMatter } from "./handlers/cli/frontMatter.ts";
console.log(frontMatter);

const pathInfo = await Deno.lstat(args.input);

if (pathInfo.isFile) {
  await convertImage(
    args.input,
    format({ ...parse(args.input), base: "", ext: ".paa" }),
  );
} else if (pathInfo.isDirectory) {
  for await (
    const image of walk(args.input, {
      includeDirs: false,
      maxDepth: args.recursive ? Infinity : 1,
      exts: ["jpg", "png"],
    })
  ) {
    await convertImage(
      image.path,
      format({ ...parse(image.path), base: "", ext: ".paa" }),
    );
  }
}

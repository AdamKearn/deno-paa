import yargs from "https://cdn.deno.land/yargs/versions/yargs-v16.2.1-deno/raw/deno.ts";

interface Arguments {
  image: string;
}

const inputArgs: Arguments = yargs(Deno.args)
  .option("image", {
    alias: "i",
    type: "string",
    description: "/path/to/image",
    required: true,
  })
  .argv;

export default inputArgs;

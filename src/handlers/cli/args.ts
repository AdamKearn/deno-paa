import yargs from "https://cdn.deno.land/yargs/versions/yargs-v16.2.1-deno/raw/deno.ts";

interface Arguments {
  input: string;
}

const args: Arguments = yargs(Deno.args)
  .option("input", {
    alias: "i",
    type: "string",
    description: "/path/to/image",
    required: true,
  })
  .argv;

export default args;

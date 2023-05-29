import { AFF } from "./aff_wasm.ts";
import { ImageData } from "./image_data.ts";
import * as ImageScript from "https://deno.land/x/imagescript@1.2.15/mod.ts";
import args from "../cli/args.ts";

const wasmCode = await Deno.readFile("./src/handlers/images/grad_aff_paa.wasm");
const response = new Response(wasmCode, {
  headers: { "Content-Type": "application/wasm" },
});

const aff = new AFF(response);

export const convertImage = async (imagePath: string, outputPath: string) => {
  await aff.ready;

  try {
    const imageBytes = await Deno.readFile(imagePath);
    const image = await ImageScript.decode(imageBytes);

    const imageData = new ImageData(image.bitmap, image.width, image.height);

    const bytes = aff.encode(imageData);
    await Deno.writeFile(outputPath, bytes);

    if (!args.silent) console.log("✅ converted:", imagePath);
  } catch (error) {
    if (!args.silent) {
      console.log("❌ failed to convert:", imagePath, "\n   reason:", error);
    }
  }
};

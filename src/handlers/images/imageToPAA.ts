import { AFF } from "./aff_wasm.ts";
import { ImageData } from "./image_data.ts";
import { decode } from "https://deno.land/x/pngs@0.1.1/mod.ts";
import args from "../cli/args.ts";

const wasmCode = await Deno.readFile("./src/handlers/images/grad_aff_paa.wasm");
const response = new Response(wasmCode, {
  headers: { "Content-Type": "application/wasm" },
});

const aff = new AFF(response);

export const imageToPAA = async (imagePath: string, outputPath: string) => {
  await aff.ready;

  try {
    const imageBytes = await Deno.readFile(imagePath);
    const image = decode(imageBytes);

    const imageData = new ImageData(
      new Uint8ClampedArray(image.image.buffer),
      image.width,
      image.height,
    );

    const bytes = aff.encode(imageData);
    await Deno.writeFile(outputPath, bytes);

    if (!args.silent) console.log("✅ converted:", imagePath);
  } catch (error) {
    if (!args.silent) {
      console.log("❌ failed to convert:", imagePath, "\n   reason:", error);
    }
  }
};

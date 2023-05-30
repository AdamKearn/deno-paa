import { AFF } from './aff_wasm.ts'
import { ImageData } from './image_data.ts'
import { parse, format } from 'https://deno.land/std@0.189.0/path/mod.ts'
import args from '../cli/args.ts'
import encode from 'npm:image-encode'
import decode from 'npm:image-decode'

const wasmCode = await Deno.readFile('./src/handlers/images/grad_aff_paa.wasm')
const response = new Response(wasmCode, {
    headers: { 'Content-Type': 'application/wasm' },
})

const aff = new AFF(response)

export const convertImage = async (imagePath: string) => {
    await aff.ready

    try {
        const imageExtension = parse(imagePath).ext
        const imageBytes = await Deno.readFile(imagePath)
        let imageData: ImageData, bytes: Uint8Array

        switch (imageExtension) {
            case '.paa':
                imageData = aff.decode(imageBytes)
                bytes = await encode(imageData, 'png')
                break

            default:
                imageData = await decode(imageBytes)
                bytes = aff.encode(imageData)
                break
        }

        const outputPath = format({
            ...parse(imagePath),
            base: '',
            ext: imageExtension == '.paa' ? '.png' : '.paa',
        })

        await Deno.writeFile(outputPath, bytes)

        if (!args.silent) console.log('✅ converted:', imagePath)
    } catch (error) {
        if (!args.silent) {
            console.log(
                '❌ failed to convert:',
                imagePath,
                '\n   reason:',
                error
            )
        }
    }
}

// This is needed as Deno doesn't seem to have ImageData added yet.
// There is an issue tracking this feature: https://github.com/denoland/deno/issues/19288

type ColorSpace = 'srgb' | 'display-p3'

export class ImageData {
    public readonly data: Uint8ClampedArray
    public readonly colorSpace: ColorSpace
    public readonly width: number
    public readonly height: number

    constructor(data: Uint8ClampedArray, width: number, height: number) {
        this.width = width
        this.height = height
        this.colorSpace = 'srgb'
        this.data = data
    }
}

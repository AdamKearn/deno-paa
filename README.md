<div align="center">
  <img src="https://github.com/AdamKearn/paa-cli/assets/30593259/6d6922f4-87ce-4519-a8cb-3c14aa37f2b7" />
</div>

This tool is built using deno and powered by the [grad_aff_wasm](https://github.com/gruppe-adler/grad_aff_wasm) package made by the amazing devs at [Gruppe Adler](https://github.com/gruppe-adler).

See the below notes for details on using/building this project.

Supported Formats: `paa, png, jpeg, jpg, jpe, jfif, bmp, tif, tiff, gif`

# Usage

For a full list of options/flags run `paa-cli --help`.

## Convert a single file.

This can be used to convert an image to and from PAA format

```
paa-cli -i "image.png"
```

## Convert all files in a directory.

Optionally you can also pass in `-r` to convert images in sub-directories.

```
paa-cli -i "path/to/folder/" [-r]
```

## Convert all PAA's in a directory back to PNG.

The `--convert-paa` flag tells `paa-cli` to only target `*.paa` files when searching directory(s).

```
paa-cli -i "path/to/folder/" [-r] --convert-paa
```

# Building form source

```
git clone https://github.com/AdamKearn/paa-cli.git

cd paa-cli

deno run --allow-read --allow-write --allow-env .\src\index.ts [args-here]
```

# Download

[Linux (x64)](https://github.com/AdamKearn/paa-cli/releases/latest/download/x86_64-unknown-linux-gnu.tar.gz)

[Windows (x64)](https://github.com/AdamKearn/paa-cli/releases/latest/download/x86_64-pc-windows-msvc.tar.gz)

[MacOS (x64)](https://github.com/AdamKearn/paa-cli/releases/latest/download/x86_64-apple-darwin.tar.gz)

[MacOS (aarch64)](https://github.com/AdamKearn/paa-cli/releases/latest/download/aarch64-apple-darwin.tar.gz)

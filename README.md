<div align="center">
  <img src="https://github.com/AdamKearn/deno-paa/assets/30593259/2bdb3d6f-5849-4936-8efe-baa1621b60d0" />
</div>

This tool is built using deno and powered by the [grad_aff_wasm](https://github.com/gruppe-adler/grad_aff_wasm) package made by the amazing devs at [Gruppe Adler](https://github.com/gruppe-adler).

See the below notes for details on using/building this project.

# Usage
For a full list of options/flags run `paa-cli --help`.

Convert a single file to a PAA in the current directory.
```
paa-cli -i "image.png"
```
Convert all files in a single directory.

Optionally you can also pass in `-r` to convert images in sub-directories. 
```
paa-cli -i "path/to/folder/" [-r]
```

# Download
[Linux (x64)](https://github.com/AdamKearn/paa-cli/releases/latest/download/x86_64-unknown-linux-gnu.tar.gz)

[Windows (x64)](https://github.com/AdamKearn/paa-cli/releases/latest/download/x86_64-pc-windows-msvc.tar.gz)

[MacOS (x64)](https://github.com/AdamKearn/paa-cli/releases/latest/download/x86_64-apple-darwin.tar.gz)

[MacOS (aarch64)](https://github.com/AdamKearn/paa-cli/releases/latest/download/aarch64-apple-darwin.tar.gz)

# Building form source
```
git clone https://github.com/AdamKearn/paa-cli.git

cd paa-cli

deno run --allow-read --allow-write --allow-env .\src\index.ts [args-here]
```

import yargs from 'https://cdn.deno.land/yargs/versions/yargs-v16.2.1-deno/raw/deno.ts'

interface Arguments {
    input: string
    recursive: boolean
    'convert-paa': boolean
    silent: boolean
}

const args: Arguments = yargs(Deno.args)
    .option('input', {
        alias: 'i',
        type: 'string',
        description: '/path/to/image',
        required: true,
    })
    .option('recursive', {
        alias: 'r',
        type: 'boolean',
        description: 'Recursively process more than one folder deep',
        required: false,
    })
    .option('convert-paa', {
        type: 'boolean',
        description: "Convert all PAA's in a folder",
        required: false,
    })
    .option('silent', {
        alias: 's',
        type: 'boolean',
        description: 'Hide console output form being displayed',
        required: false,
    }).argv

export default args

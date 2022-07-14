import { optimize, OptimizedSvg } from "https://esm.sh/svgo@2.8.0"

export default async function opt(inputPath: string, outputPath: string) {
    const file = await Deno.readTextFile(inputPath)
    const result = optimize(file, {
        floatPrecision: 1,
        multipass: true,
        plugins: [
            {
                name: "convertPathData"
            }
        ]
    }) as OptimizedSvg
    await Deno.writeTextFile(outputPath, result.data)
    const [inputSize, outputSize] = (await Promise.all(
        [inputPath, outputPath].map(Deno.stat)
    )).map(({size}) => size)
    console.log(
    `Optimizing successed!
    Original: ${(inputSize  / 1000).toFixed(0)}KB
    Result:   ${(outputSize / 1000).toFixed(0)}KB (${
        (outputSize / inputSize * 100).toFixed(1)
    }%)
    `)    
}
import { optimize, OptimizedSvg } from "https://esm.sh/svgo@2.8.0"

export default function opt(file: string) {
    const result = optimize(file, {
        floatPrecision: 1,
        multipass: true,
        plugins: [{ name: "convertPathData" }]
    }) as OptimizedSvg

    const [inputSize, outputSize] = [file, result.data].map(
        s => new TextEncoder().encode(s).length
    )
    
    console.log(
    `Successed optimizing!
    Original: ${(inputSize  / 1000).toFixed(0)}KB
    Result:   ${(outputSize / 1000).toFixed(0)}KB (${
        (outputSize / inputSize * 100).toFixed(1)
    }%)
    `)
    return result.data
}
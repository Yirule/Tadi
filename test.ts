import secrets from "./secrets.json" assert { type: "json" }

import { optimize, upload } from "./mod.ts"

await upload({
    filename: "봇 테스트.svg",
    file: new Blob([
        optimize(await Deno.readTextFile("world.svg"))
    ]),
    username: secrets.username,
    password: secrets.password,
})
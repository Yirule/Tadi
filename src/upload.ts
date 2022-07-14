import { Bot } from "https://denopkg.com/gnlow/deno-mw@main/mod.ts"

import secrets from "../secrets.json" assert { type: "json" }

const tadi = new Bot({
    apiUrl: "http://wiki.shtelo.org/api.php",
    username: secrets.username,
    password: secrets.password,
    userAgent: "TadiBot/0.1.0 (https://github.com/Yirule/Tadi)"
})

await tadi.login()

console.log(await tadi.upload({
    filename: "봇 테스트.svg",
    file: new Blob([await Deno.readTextFile("world_opt.svg")]),
}))
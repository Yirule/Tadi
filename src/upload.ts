import { Bot } from "https://denopkg.com/gnlow/deno-mw@main/mod.ts"

export interface Upload {
    filename: string
    file: Blob
    username: string
    password: string
}

export async function upload({
    filename,
    file,
    username,
    password,
}: Upload) {
    const tadi = new Bot({
        apiUrl: "http://wiki.shtelo.org/api.php",
        username,
        password,
        userAgent: "TadiBot/0.1.0 (https://github.com/Yirule/Tadi)"
    })

    await tadi.login()

    console.log(await tadi.upload({
        filename,
        file,
    }))
}
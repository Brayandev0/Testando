import sqlite3 from "sqlite3"
import { open } from "sqlite"

export async function Database(){
    return open({
        filename:"src/database/database.db",
        driver :sqlite3.Database
    })
}


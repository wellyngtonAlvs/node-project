import { sql } from './db.js'

sql`
    CREATE TABLE usuarios (
        id TEXT PRIMARY KEY,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
    );
`.then(() => {
    console.log('Tabela criada!')
})

const { Client } = require('pg');

const client = new Client({
    connectionString: "postgresql://postgres:Klik12345%21%40%23%24%25@db.arupayjscegymybyswfy.supabase.co:5432/postgres",
});

async function main() {
    console.log('Testing PG connection...');
    try {
        await client.connect();
        console.log('Connected successfully!');
        const res = await client.query('SELECT NOW()');
        console.log('Time:', res.rows[0]);
        await client.end();
    } catch (err) {
        console.error('Connection error', err.stack);
    }
}

main();

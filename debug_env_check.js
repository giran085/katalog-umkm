const fs = require('fs');
const path = require('path');

const envPath = path.resolve(process.cwd(), '.env');

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    console.log("Successfully read .env file");

    const lines = envContent.split('\n');
    let dbUrl = '';
    let directUrl = '';

    for (const line of lines) {
        if (line.trim().startsWith('DATABASE_URL=')) {
            dbUrl = line.split('=', 2)[1]?.trim().replace(/"/g, '');
        }
        if (line.trim().startsWith('DIRECT_URL=')) {
            directUrl = line.split('=', 2)[1]?.trim().replace(/"/g, '');
        }
    }

    function mask(str) {
        if (!str) return "UNDEFINED";
        try {
            // Simple manual masking
            if (str.includes('@')) {
                const parts = str.split('@');
                const credentials = parts[0];
                const host = parts[1];
                return credentials.split(':')[0] + ":****@" + host;
            }
            return str.substring(0, 15) + "...";
        } catch (e) {
            return "Error masking";
        }
    }

    console.log("DATABASE_URL found:", mask(dbUrl));
    console.log("DIRECT_URL found:  ", mask(directUrl));

    if (dbUrl && dbUrl.includes('pooler.supabase.com') && dbUrl.includes('6543')) {
        console.log("✅ DATABASE_URL looks correct (Pooler port 6543)");
    } else if (dbUrl && dbUrl.includes('5432')) {
        console.log("⚠️  DATABASE_URL is on port 5432. If this is Pooler, it might fail. If Direct, it's okay.");
    }

} catch (err) {
    console.error("Error reading .env:", err.message);
}

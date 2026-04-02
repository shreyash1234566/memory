module.exports = (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'application/json');

    res.statusCode = 200;
    res.end(JSON.stringify({
        source: 'vercel',
        supabaseUrl: process.env.SUPABASE_URL || '',
        supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
        pexelsApiKey: process.env.PEXELS_API_KEY || ''
    }));
};
// =============================================
// SUPABASE AUTH - Configurazione
// =============================================

const SUPABASE_URL = 'https://yvufepvbqvnclrkqfjcn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2dWZlcHZicXZuY2xya3FmamNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0MzAyMDYsImV4cCI6MjA5ODAwNjIwNn0.ZWeNh9MQKJUdiBD-nZ0y-LJEPPm3vmynmB-idqhp5Mk';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Se l'utente è già loggato, reindirizza a una pagina
async function checkAuthAndRedirect(redirectTo) {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) {
        window.location.href = redirectTo;
    }
}

// Proteggi una pagina: se non loggato, reindirizza al login
async function requireAuth(loginPage) {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) {
        window.location.href = loginPage;
    }
}

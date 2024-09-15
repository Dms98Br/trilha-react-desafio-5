import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://gdkcfqacymmxrisbavoe.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdka2NmcWFjeW1teHJpc2Jhdm9lIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjQwOTA3NCwiZXhwIjoyMDQxOTg1MDc0fQ.Itb1BMxPRd7-iY-S_fgPPNYzXkHIqHwCn0j1Pisy8jw",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdka2NmcWFjeW1teHJpc2Jhdm9lIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjQwOTA3NCwiZXhwIjoyMDQxOTg1MDc0fQ.Itb1BMxPRd7-iY-S_fgPPNYzXkHIqHwCn0j1Pisy8jw"
    }
})
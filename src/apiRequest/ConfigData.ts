const env: any = "dev";

export const API_URL = env === "prod" ? "http://localhost:5000/api/v1" : 'https://tms-backed-prod.vercel.app/api/v1/login'

export const managerCookies = "faf61ac9d4fdb0000025bdf7375e4fc90200123"

export const teamLeadCookies = "faf61ac9d4fdb0000025bdf7375e4fc90200456"

export const memberCookiers  = "faf61ac9d4fdb0000025bdf7375e4fc90200789"

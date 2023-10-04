import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const {
    NODE_ENV,
    PORT,
    JWT_SECRET_KEY,
JWT_EXPIRES_IN,
    LOG_FORMAT,
    DANS_BASE_URL,
    LOG_DIR,
    ORIGIN,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
} = process.env;

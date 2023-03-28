export const configEnv = {
    development: {
        PORT: process.env.PORT || 3030,
        DB_CONNECTION_STRING: 'mongodb://localhost:27017/e-commerce-react'
    },
    production: {
        PORT: process.env.PORT,
        DB_CONNECTION_STRING: '',
    }
}
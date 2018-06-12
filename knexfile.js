require('dotenv').config();


module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_URL,
      user: process.env.DATABASE_USER,
      insecureAuth: true,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    migrations: {
      directory: __dirname+'/database/migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_URL,
      user: process.env.DATABASE_USER,
      insecureAuth: true,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_URL,
      user: process.env.DATABASE_USER,
      insecureAuth: true,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: 'postgres://postgres:123456@localhost:5432/knex_test',
  
    migrations:{
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }



};

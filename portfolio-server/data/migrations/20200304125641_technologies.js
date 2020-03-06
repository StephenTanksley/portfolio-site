exports.up = async function(knex) {
  await knex.schema.createTable('technologies', (table) => {
      table.increments('id').primary()
      table.string('name')
        .notNullable()
        .unique()
      table.string('description')
        .notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('technologies')
};
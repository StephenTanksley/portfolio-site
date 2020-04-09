exports.up = async function(knex) {
    await knex.schema.createTable('projects', (table) => {
        table.increments('id').primary()
        table.string('title').notNullable()
        table.string('description', 512)
        table.string('project_url')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('projects')
};
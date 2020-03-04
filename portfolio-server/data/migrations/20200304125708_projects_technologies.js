exports.up = async function(knex) {
    await knex.schema.createTable('projects_technologies', (table) => {
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
        table.integer('technologies_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('technologies')

        table.primary(['project_id', 'technologies_id']);
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('projects_technologies')
};
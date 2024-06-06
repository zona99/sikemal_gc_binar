/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('laporan', function(table) {
        table.increments('id').primary();
        table.string('nama').notNullable();
        table.string('tlp').notNullable();
        table.string('alamat').notNullable();
        table.text('laporan').notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

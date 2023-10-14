exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("name");
    table.string("email");
    table.string("password");
    table.string("token");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {

    return knex.schema.dropTable("users");
};

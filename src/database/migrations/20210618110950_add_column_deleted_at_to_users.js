
exports.up = function(knex) {
  table.timestamp('deleted_at')
};

exports.down = function(knex) {
  table.dropColumn('deleted_at')
};

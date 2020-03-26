const db = require("../config/dbConfig");

class Model {
  constructor(tablename) {
    this.tablename = tablename;
  }

  get() {
    return db(this.tablename);
  }

  getBy(filter) {
    return db(this.tablename)
      .where(filter)
      .first();
  }

  getById(id) {
    return db(this.tablename)
      .where({ id })
      .first();
  }

  add(item) {
    return db(this.tablename)
      .insert(item)
      .returning("*");
  }

  update(id, item) {
    return db(this.tablename)
      .where({ id })
      .update(item)
      .returning("*");
  }

  remove(id) {
    return db(this.tablename)
      .where({ id })
      .del();
  }
}

export default Model;
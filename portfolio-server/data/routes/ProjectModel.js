const db = require('../config/dbConfig')

class Model {
    constructor(tablename) {
        this.tablename = tablename
    }

    find() {
        return db(this.tablename)
    }

    findBy(filter){
        return db(this.tablename)
            .where(filter)
            .first()
    }

    findById(id){
        return db(this.tablename)
            .where({ id })
            .first()
    }

    update(id, item){
        return db(this.tablename)
            .where({ id })
            .update(item)
            .returning("*")
    }

    remove(id){
        return db(this.tablename)
            .where({ id })
            .del()
    }
}

const Project = new Model('projects')
const Tech = new Model('technologies')

module.exports = {
    Project,
    Tech
}
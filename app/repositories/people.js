
const PeopleRepository = class PeopleRepository {
    constructor(db) {
        this._db = db;
    }

     getPeople()
    {
        return new Promise((resolve, reject) => {
            this._db.query('SELECT * FROM people', (err, result) => {
                if (err) return reject(err);
                return resolve(JSON.parse(JSON.stringify(result)));
            })

        })
    } 


    createPeople(name) {
        
        return new Promise((resolve, reject) => {
        const insert = `INSERT INTO people (name) values (?)`;
        this._db.query(insert, [name], function (err, result, fields) {
            if (err) return reject(err);
            return resolve(result.insertId)
            
        });
        })
       
       
      
    }
}
module.exports = PeopleRepository 
const express = require('express')
const app = express()
const PORT = 3000
const { connection } = require('./db/mysql')
const PeopleRepository = require('./repositories/people');
app.get('/', async (req, res) => { 
    const name = "Wildemar " + Math.floor(Math.random() * (10000 - 1 + 1) + 5);
    const peopleRepository = new PeopleRepository(connection);
    await peopleRepository.createPeople(name);
    const people = await peopleRepository.getPeople();
   
    let table = `<table style="width: 100%"><thead><th>ID</th><th>Nome</th></thead><tbody>`;

    
    people.map((people) => {
        table += `<tr><td>${people.id}</td><td style="text-align: center">${people.name}</td></tr>`
    })
    
    

    table += `</tbody></table>`

    res.send("<h1>Full Cycle Rocks!</h1>" + table);

});

app.listen(PORT, () => { console.log(`listening on port ${PORT}`) })
const fs = require('fs')

function saveData() {

    fs.readFile('./2-read-write-users.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading file from disk: ${err}`)
        } else {
            const databases = JSON.parse(data)

            databases.forEach(db => {
                fs.writeFile('${db.id}-${db.name}-${db.surname}.txt ', 'Name: ${db.name} Surname: ${db.surname} Street: ${db.address.street}      Zip Code: ${db.address.zipcode} City: ${ db.address.city }  Phone: ${ db.phone }', function (err) {
                    if (err) throw err;
                    console.log('File is created successfully.');
                })
            }
            )
        }
    })
}

export default { saveData };
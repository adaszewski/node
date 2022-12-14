const fs = require('fs')
const path = require('path')

function saveData(pathJSON, newDir, confirmCreate) {

  fs.mkdir(path.join(__dirname, newDir),
    { recursive: confirmCreate }, (err) => {
      if (err) { return console.error(err) }
      console.log("udało się utworzyć katalog!")
    });

  fs.readFile(path.join(__dirname, pathJSON), (err, data) => {
    if (err) {
      console.log(`błąd odczytu danych z dysku: ${err}`)
    } else {
      console.log('udało się odczytać plik JSON!')
      const databases = JSON.parse(data)
      databases.forEach(db => {
        fs.writeFile(`./test/${db.id}-${db.name}-${db.surname}.txt`, `Name: ${db.name} \nSurname: ${db.surname} \nStreet: ${db.address.street} \nZip Code: ${db.address.zipcode} \nCity: ${db.address.city} \nPhone: ${db.phone}`, { recursive: confirmCreate }, (err) => {
          if (err) {
            return console.error(err);
          }
        })
      })
    } console.log('udało się stworzyć pliki!')
  })
}
module.exports = saveData;
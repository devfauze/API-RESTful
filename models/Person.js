//[✅]Importações
const mongoose = require('mongoose')

//[✅]Cria um modelo de objeto
const Person = mongoose.model('Person', {
    name: String,
    salary: Number,
    aprroved: Boolean,
})

module.exports = Person
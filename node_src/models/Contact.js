let mongoose = require('mongoose');

let ContactSchema = new mongoose.Schema({
  id: String,
  title: String,
  name: String,
  birthDate: String,
  isFavorite: Boolean
});

module.exports = mongoose.model('Contact', ContactSchema);

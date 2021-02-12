const { Schema, model } = require('mongoose');

const mensagemSchema = new Schema({
  nome: {
    type: String,
  },
  msg: {
    type: String,
  },
  data: {
    type: Date,
    default: new Date(),
  },
});

const mensagemModel = model('comentarios', mensagemSchema);

module.exports = mensagemModel;
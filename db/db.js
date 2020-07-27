const db = require('@paralect/node-mongo').connect("mongodb://mongo/docker");

module.exports = db;

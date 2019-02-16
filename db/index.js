const config = require('../config');

let sql = null;

const db = {
  async connect(driver) {
    switch (driver) {
      case 'mssql':
        sql = require('mssql');

        try {
          await sql.connect(config.getConfig(driver));
          console.log('DB `' + driver + '` connected');
        } catch (error) {
          console.log('DB `' + driver + '` connection failed: \n' + error);
        }
        break;

      case 'mongodb':
        sql = require('mongoose');

        try {
          await sql.connect(config.getConfig(driver), { useNewUrlParser: true });
          console.log('DB `' + driver + '` connected');
        } catch (error) {
          console.log('DB `' + driver + '` connection failed: \n' + error);
        }
        break;

      default:
        console.log('DB Driver `' + driver + '` is not supported!');
    }
  }
}

module.exports = db;
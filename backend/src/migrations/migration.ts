/* eslint-disable @typescript-eslint/no-unused-vars */
import { Db } from 'mongodb';

module.exports = {
  async up(db: Db) {
    console.log('In migration Script');
  },
};

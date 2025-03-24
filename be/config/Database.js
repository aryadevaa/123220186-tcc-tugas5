import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("note_186", "root", "", {
  host: "34.60.192.82",
  dialect: "mysql",
});

export default db;

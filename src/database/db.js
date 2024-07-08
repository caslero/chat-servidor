import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

// Configuración de la conexión a la base de datos
// Configuración de la conexión a la base de datos
export const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  dialect: 'postgres', // Agrega esta línea
  dialectModule: pg // Agrega esta línea
});

export const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  correo: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  clave: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
});
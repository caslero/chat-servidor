import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Configuración de la conexión a la base de datos
export const sequelize = new Sequelize("postgres://default:URNVFZ6i2tYQ@ep-tiny-glitter-a44px9tx-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require", {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
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
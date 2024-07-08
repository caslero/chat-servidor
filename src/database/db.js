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
    allowNull: false
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


/**
 //Eliminar Una tabla
  async function dropUsersTable() {
    try {
      // Sincronizar el modelo de Usuario con la base de datos
      await sequelize.sync();
  
      // Eliminar la tabla "Users"
      await User.drop();
  
      console.log('Tabla "Users" eliminada correctamente.');
    } catch (error) {
      console.error('Error al eliminar la tabla "Users":', error);
    }
  }
  
  dropUsersTable();
 */
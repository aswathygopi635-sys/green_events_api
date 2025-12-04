import { DataSource } from 'typeorm';
import { config } from './environment';
import { User } from '../entities/User.entity';


export const AppDataSource = new DataSource({
  type: 'mysql',
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  synchronize: config.nodeEnv === 'development',
  logging: config.nodeEnv === 'development',
  entities: [User],
  migrations: [],
  subscribers: [],
});
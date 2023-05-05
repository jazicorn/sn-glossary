
import { config, ConnectionPool } from 'mssql';

// types: node_modules > @types > mssql > index.d.ts > config (interface) > server (key-value pair)
// type declarations: global.d.ts
/**
 * export interface config {
    driver?: string | undefined;
    user?: string | undefined;
    password?: string | undefined;
    server: string;
    port?: number | undefined;
    domain?: string | undefined;
    database?: string | undefined;
    connectionTimeout?: number | undefined;
    requestTimeout?: number | undefined;
    stream?: boolean | undefined;
    parseJSON?: boolean | undefined;
    options?: IOptions | undefined;
    pool?: PoolOpts<Connection> | undefined;
    arrayRowMode?: boolean | undefined;
    authentication?: tds.ConnectionAuthentication | undefined;
    /**
     * Invoked before opening the connection. The parameter conn is the configured
     * tedious Connection. It can be used for attaching event handlers.
     *//**
    beforeConnect?: ((conn: Connection) => void) | undefined
  }
 */

const sqlConfig: config = {
  server: process.env.SQLSERVER,
  user: process.env.SQLUSER,
  password: process.env.SQLPWD,
  database: process.env.SQLDB,
  port: parseInt(process.env.SQLPORT),
  // Only for Azure SQL Databases
  options: {
    encrypt: true,
  },
  connectionTimeout: 30000,
};

export const sqlConnect = async () => {
  const sqlDb = await new ConnectionPool(sqlConfig).connect();
  return sqlDb;
};
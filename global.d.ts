declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SQLSERVER: string;
            SQLUSER: string;
            SQLPWD: string;
            SQLDB: string;
            SQLPORT: string;
        }
    }
}

export {};
import Server from "./src/Server";
import Database from "./src/Database";

const app = Server.config();
const { APP_PORT, DB_NAME, DB_HOST, DB_PORT } = process.env;


Database.init(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
    .then(() => {
        console.log(`La base de données est connectée sur le port 27017`);
        app.listen(APP_PORT, () => {
            console.log(`Le serveur est connecté sur le port ${APP_PORT}`);
        });
    });



export default app;



import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import router from "./routes";
// import jwt from "./config/jwt";
// import swaggerUi from "swagger-ui-express";
// import swaggerJsdoc from "swagger-jsdoc";
// import yamlJs from "yamljs";
// const swaggerDoc = yamlJs.load('swagger.yaml');

class Server {
    static config() {
        const app = express();
        // app.use(jwt());

        // const swaggerDoc = swaggerJsdoc({
        //     swaggerDefinition: {
        //         info: {
        //             title: `Netfix API`,
        //             version: `1.0.0`,
        //             description: `Netflix API description`
        //         },
        //         securityDefinitions: {
        //             bearerAuth: {
        //                 type: 'apiKey',
        //                 name: 'Authorization',
        //                 scheme: 'bearer',
        //                 in: 'header'
        //             }
        //         }
        //     },
        //     apis: [`src/controllers/*.js`]
        // });
        // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

        // app.use('/uploads', express.static('uploads'));

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(cors({ origin: true }));

        // app.use('/', router);

        return app;
    }
}

export default Server
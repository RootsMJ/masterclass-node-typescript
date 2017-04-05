import * as express from 'express';
import { Application } from 'express';
import { Startup } from './config/Startup.service';
// import { initRestApi } from "./api/api";
// import { apiErrorHandler } from "./api/apiErrorHandler";

const bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());

Startup.initializeRoutes(app);

Startup.initializeMiddleware(app);

app.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
});

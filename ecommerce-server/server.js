import { connectDB } from './src/config/db.js';
import config from './src/config/environment.js';
import { app } from './src/app.js';
import logger from './src/utils/logger.js';
import { createServer } from 'http';

const { PORT } = config;

async function startServer() {
    try {
        logger.info("Connecting to database...");

        await connectDB();


        const httpServer = createServer(app);



        httpServer.listen(PORT, () => {
            logger.info(`Server running on http://localhost:${PORT}`);

        });
    } catch (error) {
        logger.error("Server failed to start:", error);
        process.exit(1);
    }
}


startServer();

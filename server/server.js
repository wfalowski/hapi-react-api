import Glue from 'glue';

import manifest from './config/manifest';

const options = {};

const startServer = async () => {
    try {
        const server = await Glue.compose(manifest, options);
        await server.start();
        console.info('Server started')
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

startServer();

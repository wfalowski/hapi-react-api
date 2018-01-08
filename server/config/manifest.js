import Boom from 'boom';
import HapiSwagger from 'hapi-swagger';

import swaggerOptions from './swagger';
import apiRoutes from '../api'

export default {
    server: {
        port: 8000,
        routes: {
            cors: {
                origin: ['*'],
            },
            validate: {
                failAction: async (request, h, err) => {
                    if (process.env.NODE_ENV === 'production') {
                        console.error('ValidationError:', err.message);
                        throw Boom.badRequest('Invalid request payload input');
                    } else {
                        console.error(err);
                        throw err;
                    }
                },
            },
        },
    },
    register: {
        plugins: [
            {
                plugin: 'inert',
            },
            {
                plugin: 'vision',
            },
            {
                plugin: HapiSwagger,
                options: swaggerOptions
            },
            {
                plugin: apiRoutes,
                routes: { prefix: '/api' },
            },
        ],
    },
};

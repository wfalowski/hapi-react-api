import Joi from 'joi';
import {
    addUserAction,
    getUsersAction,
} from '../controllers/users';

module.exports = (plugin) => {
    plugin.route({
        method: 'POST',
        path: '/user',
        config: {
            tags: ['api', 'user'],
            description: 'Add user',
            notes: 'Add new user',
            validate: {
                payload: {
                    name: Joi.string().required().description('User name'),
                },
            },
            handler: addUserAction,
        },
    });

    plugin.route({
        method: 'GET',
        path: '/user',
        config: {
            tags: ['api', 'user'],
            description: 'Get users list',
            notes: 'Get users list',
            validate: {},
            handler: getUsersAction,
        },
    });
};
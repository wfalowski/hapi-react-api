const Pack = require('../package');

export default {
    info: {
        title: 'Test API Documentation',
        version: Pack.version,
    },
    grouping: 'tags',
    tags: [
        {
            name: 'user',
            description: 'Users endpoints'
        },
    ],
}
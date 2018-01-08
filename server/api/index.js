import fs from 'fs';
import path from 'path';

const register = (server) => {
    const normalizedPath = path.join(__dirname, '/routes/');

    fs.readdirSync(normalizedPath).forEach((file) => {
        require(`./routes/${file}`)(server); // eslint-disable-line global-require,import/no-dynamic-require
    });
};

exports.plugin = {
    name: 'api',
    register,
};

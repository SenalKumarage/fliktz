const express = require('express');
const config = require('./config');

const startServer = async () => {

    const app = express();

    // This will load all the loaders
    await require('./loaders')(app);

    app.listen(config.port, err => {

        if (err) {
            process.exit(1);
            return;
        }

        console.log(`Server running on port ${config.port} ...`);
    })
}

startServer();
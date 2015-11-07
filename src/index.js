const fs = require('fs');
const path = require('path');

module.exports = (options) => {

    options = options || {};

    const rootPath = options.rootPath || path.resolve('./src');
    const folderContains = options.folderContains || '__tests__';
    const fileContains = options.fileContains || '.spec.js';

    const isDirectory = (name) => {
        return !~name.indexOf('.');
    };

    const searchForTests = (dir) => {

        const items = fs.readdirSync(dir);

        items.forEach((item) => {

            const directory = `${dir}/${item}`;

            if (~item.indexOf(folderContains)) {

                fs.readdirSync(directory).forEach((test) => {
                    if (~test.indexOf(fileContains)) {
                        require(`${directory}/${test}`);
                    }
                });

            } else if (isDirectory(item)) {

                searchForTests(directory);

            }
        });
    }

    searchForTests(rootPath);

};

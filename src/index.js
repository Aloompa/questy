var fs = require('fs');
var path = require('path');

module.exports = function (options) {

    options = options || {};

    var rootPaths = options.rootPaths || [options.rootPath || path.resolve('./src')];
    var folderContains = options.folderContains || '__tests__';
    var fileContains = options.fileContains || '.spec.js';

    var isDirectory = function (name) {
        try {
            return fs.statSync(name).isDirectory();
        } catch (err) {
            return false;
        }
    };

    var searchForTests = function (dir) {

        var items = fs.readdirSync(dir);

        items.forEach(function (item) {

            var directory = dir + '/' + item;
            var isDir = isDirectory(directory);

            if (isDir && ~item.indexOf(folderContains)) {

                fs.readdirSync(directory).forEach(function (test) {
                    if (~test.indexOf(fileContains)) {
                        require(directory + '/' + test);
                    }
                });

            } else if (isDir) {

                searchForTests(directory);

            }
        });
    }

    rootPaths.forEach(searchForTests);

};

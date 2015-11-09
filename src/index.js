var fs = require('fs');
var path = require('path');

module.exports = function (options) {

    options = options || {};

    var rootPath = options.rootPath || path.resolve('./src');
    var folderContains = options.folderContains || '__tests__';
    var fileContains = options.fileContains || '.spec.js';

    var isDirectory = function (name) {
        return !~name.indexOf('.');
    };

    var searchForTests = function (dir) {

        var items = fs.readdirSync(dir);

        items.forEach(function (item) {

            var directory = dir + '/' + item;

            if (~item.indexOf(folderContains)) {

                fs.readdirSync(directory).forEach(function (test) {
                    if (~test.indexOf(fileContains)) {
                        require(directory + '/' + test);
                    }
                });

            } else if (isDirectory(item)) {

                searchForTests(directory);

            }
        });
    }

    searchForTests(rootPath);

};

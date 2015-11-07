## Welcome to Questy

Require all of the files and folders that match a certain criteria. This is handy for tasks such as running Mocha tests from unusual places.

## Getting Started

Simple usage with defaults:

```
const questy = require('questy');

questy();
```

Advanced usage:

```
const questy = require('questy');

questy({
    rootPath: path.resolve(__dirname, '../app'),
    folderContains: '__specs__',
    fileContains: '.test.js'
});
```

## API

The `questy()` function takes a single options object. All of the options are optional and are defaulted to our best guess.

### rootPath ( defaults to `/src` of the current project )

This is the path that we use to start traversing through files at.

### folderContains ( defaults to `__tests__` )

A string to check against of what the folder name should contain for us to run the file.

### fileContains ( defaults to `.spec.js` )

A string that the file name must contain in order to be required.

## License

Questy is released under The [MIT License](http://www.opensource.org/licenses/MIT) (MIT)

Copyright (c) [2015] [Aloompa LLC]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

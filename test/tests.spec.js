const assert = require('assert');
const quester = require('../src');
const path = require('path');

describe('The Quester Test Suite', () => {
    describe('When we traverse a directory', () => {
        it('Should require files that match the search fileContains', () => {
            global.callCount = 0;

            quester({
                rootPath: path.resolve(__dirname, '../fixtures/shallow')
            });

            assert.ok(global.callCount);
        });
    });

    describe('When we traverse a deeply nested directory', () => {
        it('Should look down infinitely', () => {
            global.callCount = 0;

            quester({
                rootPath: path.resolve(__dirname, '../fixtures/deep')
            });

            assert.ok(global.callCount);
        });
    });

    describe('When we have multiple files that match', () => {
        it('Should require them all', () => {
            global.callCount = 0;

            quester({
                rootPath: path.resolve(__dirname, '../fixtures/multiple')
            });

            assert.equal(global.callCount, 4);
        });
    });

    describe('When we give it a custom directory', () => {
        it('Should use that instead of the default __test__', () => {
            global.callCount = 0;

            quester({
                rootPath: path.resolve(__dirname, '../fixtures/customDirectory'),
                folderContains: 'arnold'
            });

            assert.ok(global.callCount);
        });
    });

    describe('When we give it a custom file match', () => {
        it('Should match that instead of the default .spec', () => {
            global.callCount = 0;

            quester({
                rootPath: path.resolve(__dirname, '../fixtures/customFile'),
                fileContains: 'arnold'
            });

            assert.ok(global.callCount);
        });
    });

    describe('When we have directories and files', () => {
      it('Should only traverse directories', () => {
          global.callCount = 0;

          quester({
              rootPath: path.resolve(__dirname, '../fixtures/types'),
          });

          assert.ok(global.callCount);
      });
    });
});

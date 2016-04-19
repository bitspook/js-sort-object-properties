const sortObjectPropsInString = require('../src/sortObjectPropsInString');

describe('sortObjectPropsInString', function() {
    it ('sorts the properties of all objects in a string of code', function() {
        const unsorted = `var object = {c: 'c', z: 'z', d: 'd', D: 'D', a: 'a'};`;
        const sorted = `var object = {D: 'D', a: 'a', c: 'c', d: 'd', z: 'z'};`.replace(/\s/g, '');

        const expected = sortObjectPropsInString(unsorted).replace(/\s/g, '');

        expect(expected).toEqual(sorted);
    });

    it ('sorts the properties of nested objects in a string of code', function() {
        const unsorted = `var object = {c: 'c', z: 'z', m: {f: 'f', e: 'e', k: {l: 'l', c: 'c'}}, d: 'd', D: 'D', a: 'a'};`;
        const sorted = `var object = {D: 'D', a: 'a', c: 'c', d: 'd', m: {e: 'e', f: 'f', k: {c: 'c', l: 'l'}}, z: 'z'};`.replace(/\s/g, '');

        const expected = sortObjectPropsInString(unsorted).replace(/\s/g, '');

        expect(expected).toEqual(sorted);
    });
});

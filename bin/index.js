#!/usr/bin/env node

const stdin = process.stdin;
const stdout = process.stdout;
const sortObjectProps = require('../src');

const inputChunks = [];

stdin.resume();
stdin.setEncoding('utf-8');

stdin.on('data', (chunk) => {
    inputChunks.push(chunk);
});

stdin.on('end', () => {
    const inputFile = inputChunks.join();

    stdout.write(sortObjectProps(inputFile));
});

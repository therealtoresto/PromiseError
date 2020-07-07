'use strict';

const sum = (a, b) => new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
        resolve(a + b);
    } else {
        reject(new Error('a and b should be numbers'));
    }
});

process.on('multipleResolves', (type, reason, promise) => {
    console.log({ multipleResolves: { type, reason, promise } });
});

sum(7, 3)
    .then(res => {
        console.log({ res });
    });
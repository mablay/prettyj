#!/usr/bin/env node

var stdin = process.openStdin();

var data = "";

stdin.on('data', function(chunk) {
    data += chunk;
});

stdin.on('end', function() {
    try {
        console.log(JSON.stringify(JSON.parse(data.split('\n').join('')), null, 4));
    } catch (err) {
        console.error(err);
    }
});


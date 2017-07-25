#!/usr/bin/env node

var stdin = process.openStdin();

var data = "";

stdin.on('data', function(chunk) {
    data += chunk;
});

stdin.on('end', function() {
    try {
        data = data.split('\n').join(' ');
        var json = JSON.parse(data);
        var out = JSON.stringify(json, null, 4);
        console.log(out);
    } catch (err) {
        console.error(err);
    }
});
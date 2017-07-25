#!/usr/bin/env bash

declare TEST=$(cat ./test/foo.min.json | node ./index.js | md5)
declare EXPECTED=$(cat ./test/foo.pretty.json | md5)

if [ "$TEST" == "$EXPECTED" ]; then
    echo "TEST PASSED!"
else
    echo "TEST FAILED! JSON has NOT been transformed as expected."
fi
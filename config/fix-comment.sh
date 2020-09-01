#! /bin/bash

set -eu

if [ "$(uname)" == 'Darwin' ]; then
    # Mac

    find ./src -type f | xargs sed -i '' "s/'\\*\\//'\\* \\//g"
    find ./src -type f | xargs sed -i '' "s/\"\\*\\//\"\\* \\//g"
    find ./src -type f | xargs sed -i '' "s/GlobalFetch/WindowOrWorkerGlobalScope/g"

    sed -i '' "s/export \\* from '\\.\\/\\(.*\\)'/export {\\1} from '.\\/\\1'/g" ./src/apis/index.ts
else
    # Linux

    find ./src -type f | xargs sed -i "s/'\\*\\//'\\* \\//g"
    find ./src -type f | xargs sed -i "s/\"\\*\\//\"\\* \\//g"
    find ./src -type f | xargs sed -i "s/GlobalFetch/WindowOrWorkerGlobalScope/g"

    sed -i "s/export \\* from '\\.\\/\\(.*\\)'/export {\\1} from '.\\/\\1'/g" ./src/apis/index.ts
fi


#! /bin/sh

find ./src -type f | xargs sed -i "s/'\\*\\//'\\* \\//g"
find ./src -type f | xargs sed -i "s/\"\\*\\//\"\\* \\//g"

sed -i "s/export \\* from '\\.\\/\\(.*\\)'/export {\\1} from '.\\/\\1'/g" ./src/apis/index.ts
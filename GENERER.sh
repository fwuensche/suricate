#!/bin/bash

cd /Users/brunoferre/Desktop/MENU/suricate

git pull

npm run deploy

git add .
git commit -m "update"

if [ $? -eq 0 ]; then
    exit 0
else
    echo "UNE ERREUR EST SURVENUE"
    sleep 999
fi
#!/bin/bash

cd /Users/brunoferre/Desktop/MENU/suricate

git pull && npm install && npm run deploy && git add . && git commit -m "update" && git push

if [ $? -eq 0 ]; then
    exit 0
else
    echo "UNE ERREUR EST SURVENUE"
    sleep 999
fi
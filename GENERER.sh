#!/bin/bash

cd /Users/brunoferre/Desktop/MENU/suricate

npm run build && cp /Users/brunoferre/Desktop/MENU/suricate/dist/index.html /Users/brunoferre/Desktop/MENU/index.html

if [ $? -eq 0 ]; then
    exit 0
else
    echo "UNE ERREUR EST SURVENUE"
    sleep 9999999
fi
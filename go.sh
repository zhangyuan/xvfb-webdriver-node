#!/usr/bin/env bash

set -e

function loadNVM {
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
}

function setup {
    loadNVM
    npm install
}


setup
xvfb-run npm start
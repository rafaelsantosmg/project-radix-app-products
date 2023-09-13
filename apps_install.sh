#!/bin/bash

printf "\n> Instalando o front-end\n"
frontFolder="./app/frontend"
cacheFolderFront="/tmp/frontend-cache"
rm -rf $cacheFolderFront
yarn_config_loglevel=silent yarn --prefix ${frontFolder} --cache $cacheFolderFront

printf "\n> Instalando o back-end\n"
backFolder="./app/backend"
cacheFolderBack="/tmp/backend-cache"
rm -rf $cacheFolderBack
yarn_config_loglevel=silent yarn --prefix ${backFolder} --cache $cacheFolderBack

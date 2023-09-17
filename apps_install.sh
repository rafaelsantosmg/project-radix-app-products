#!/bin/bash

printf "\n> Instalando o front-end\n"
cd ./app/frontend
yarn install 

printf "\n> Instalando o back-end\n"
cd ./app/backend
yarn install

printf "\n> Iniciando Projeto\n"
cd ..
yarn start


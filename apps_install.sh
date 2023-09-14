#!/bin/bash

printf "\n> Instalando o front-end\n"
cd ./app/frontend
yarn install 

printf "\n> Instalando o back-end\n"
cd ../backend
yarn install  

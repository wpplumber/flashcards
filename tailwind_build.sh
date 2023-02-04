#!/bin/bash
# Install & rename tailwind binary so there's no need for node/NPM.
# ref: https://www.zappycode.com/tutorials/using-tailwind-css-3x-with-django
./tailwindcss -i input.css build -o css/style.css --watch

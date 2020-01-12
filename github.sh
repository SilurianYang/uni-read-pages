#!/bin/bash

npm run build

cp -avx ./README.md ./npm-package
cp -avx ./src/* ./npm-package


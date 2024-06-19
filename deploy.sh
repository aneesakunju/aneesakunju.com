#!/bin/bash
npm install && \
rm -rf build && \
rm -rf docs && \
npm run build && mv build docs && \
echo -n "aneesakunju.com" > docs/CNAME && \
git add . && git commit -m "deploy" && \
git push origin main;
#!/bin/bash
npm install && \
rm -rf build && \
rm -rf docs && \
# github serves up the docs folder, so moving build to docs below.
npm run build && mv build docs && \
echo -n "aneesakunju.com" > docs/CNAME && \
git add . && git commit -m "deploy" && \
git push origin main;
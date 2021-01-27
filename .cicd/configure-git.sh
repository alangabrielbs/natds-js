#!/bin/bash
set -e

printenv

git remote rm origin

# This remote is using a contributor account and an OAuth key from GitHub
# Adapted from https://stackoverflow.com/questions/23277391/how-to-publish-to-github-pages-from-travis-ci
git remote add origin "https://${NATDS_GH_TOKEN}@github.com/natura-cosmeticos/natds-js"

git fetch --quiet

BRANCH=$(bash ./.cicd/get-branch-name.sh)

git checkout "${BRANCH}"

# System Team will make the commit
git config --global user.email "designsystem@natura.net"
git config --global user.name "Natura Design System Team"

npm config set '//registry.npmjs.org/:_authToken' "${NATDS_NPM_TOKEN}"

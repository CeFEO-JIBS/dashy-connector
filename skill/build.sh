#!/bin/sh
# Rebuild the downloadable skill package served at
# https://claude.fbdashboard.org/dashy-connector-skill.zip
# Source of truth: skill/dashy-connector/SKILL.md
set -e
cd "$(dirname "$0")"
rm -f ../dashy-connector-skill.zip
zip -q -X -r ../dashy-connector-skill.zip dashy-connector -x '.*'
echo "built dashy-connector-skill.zip"
unzip -l ../dashy-connector-skill.zip

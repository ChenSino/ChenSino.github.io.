#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
git pull
git add -A
git commit -m '添加mysql笔记！'
git push


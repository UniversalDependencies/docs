---
layout: base
title:  'Tokenization'
permalink: zh/overview/tokenization.html
udver: '2'
---

# Tokenization

## UD Chinese

[Description not currently available]

## UD Chinese-HK, UD Chinese-CFL

These two treebanks (UD Chinese-HK to be released) follows the <a href="http://repository.upenn.edu/cgi/viewcontent.cgi?article=1038&context=ircs_reports">segmentation guidelines</a> for the <a href="https://catalog.ldc.upenn.edu/ldc2016t13">Chinese Treebank</a> with three notable exceptions: (a) V-R resultative compounds (see <a href="http://universaldependencies.org/zh/dep/compound-vv.html">`compound:vv`</a>) and (b) V-得-V and V-不-V compounds (also known as "potential complement" in the literature; see <a href="http://universaldependencies.org/zh/dep/compound-dir.html">`compound:dir`</a> and <a href="http://universaldependencies.org/zh/dep/compound-vv.html">`compound:vv`</a>). For both cases, while the Chinese Treebank treats each compound as a single token or as separated tokens depending on varying factors including semantic compositionality and multisyllabicity, UD Chinese-HK separates them all into separate tokens without exception.

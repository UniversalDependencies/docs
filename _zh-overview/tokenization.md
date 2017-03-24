---
layout: base
title:  'Tokenization'
permalink: zh/overview/tokenization.html
udver: '2'
---

# Tokenization

## UD Chinese

[Description not currently available]

## UD Chinese-HK

This treebank (to be released) follows the <a href="http://repository.upenn.edu/cgi/viewcontent.cgi?article=1038&context=ircs_reports">segmentation guidelines</a> for the <a href="https://catalog.ldc.upenn.edu/ldc2016t13">Chinese Treebank</a> with two notable exceptions: (a) V-R resultative compounds (see <a href="http://universaldependencies.org/zh/dep/compound-vv.html">`compound:vv`</a>) and (b) V-得-V and V-不-V compounds (also known as "potential complement" in the literature; see <a href="http://universaldependencies.org/zh/dep/compound-dir.html">`compound:dir`</a> and <a href="http://universaldependencies.org/zh/dep/compound-vv.html">`compound:vv`</a>). While the Chinese Treebank treats them as a single token or as separated tokens depending on varying factors (including semantic compositionality and multisyllabicity), UD Chinese-HK separates all these compounds into separate tokens without exception.

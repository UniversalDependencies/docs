---
layout: base
title:  'Tokenization'
permalink: zh/overview/tokenization.html
udver: '2'
---

# Tokenization

## UD Chinese

[Description not currently available. One key observed difference from the other treebanks, however, is the tokenization of certain prefixes and suffixes as individual tokens, linked to their "word stem" by the language-specific relations unique to this treebank, `case:pref` or `case:suff`.]

## UD Chinese-CFL

In addition to following the same tokenization guidelines as UD Chinese-HK, the UD Chinese-CFL treebank also addresses word segmentation issues caused by learner mistakes as follows.

Non-words are allowed only when there are spelling errors resulting from orthographic or phonetic confusion. An orthographic confusion must involve characters with similar appearance, e.g., between 了 and 子 in \*花花公了.

Phonetic confusion must involve characters with the same pronunciation but different tones, e.g., between 關 and 管 in the sentence \*不關多貴我也買; or, characters with easily confusable pairs such as {j, zh} and {x, sh}.

In these cases, the lemma of the misspelt word is its corrected version. For example, the lemma of \*花花公了 is 花花公子, and the lemma of 不關 is 不管.

## UD Chinese-HK 

This treebank follows the <a href="http://repository.upenn.edu/cgi/viewcontent.cgi?article=1038&context=ircs_reports">segmentation guidelines</a> for the <a href="https://catalog.ldc.upenn.edu/ldc2016t13">Chinese Treebank</a> (formerly "Penn Chinese") with three notable exceptions: (a) V-R resultative compounds (see <a href="http://universaldependencies.org/zh/dep/compound-vv.html">`compound:vv`</a>) and (b) V-得-V and V-不-V compounds (also known as "potential complement" in the literature; see <a href="http://universaldependencies.org/zh/dep/compound-dir.html">`compound:dir`</a> and <a href="http://universaldependencies.org/zh/dep/compound-vv.html">`compound:vv`</a>). For both cases, while the Chinese Treebank treats each compound as a single token or as separated tokens depending on varying factors including semantic compositionality and multisyllabicity, UD Chinese-HK separates them all into separate tokens without exception.

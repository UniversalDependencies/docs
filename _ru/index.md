---
layout: base
title:  'Russian UD'
udver: '2'
---

# UD for Russian <span class="flagspan"><img class="flag" src="../../flags/svg/RU.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters.
* According to typographical rules, many punctuation marks and special symbols (_$_, _%_) are attached to a neighboring word. We tokenize them as separate tokens (words) in most cases.
Description of exceptions follows:

  * conventional multi-character punctuation marks: -- , ... , ?! and emojis and smileys: :) , ^_^;
  * abbreviations such as _т.д._ “etc.” (two tokens instead of four).
If the period overlaps with the end of sentence period then it is written only once as a separate token (denoting end-of-sentence);
  * hyphenated compounds such as _премьер-министр_ “prime minister” (one token instead of three) (if the first part of the compound is not inflected);
  * prepositions such as _из-за_  “because of” (one token instead of two);
  * alphanumeric compounds with hyphen such as _5-летняя девочка_ “5-years-old girl” (two tokens instead of four);
  * numerical expressions including decimal numbers, such as 245000, 3,14, are treated as single tokens;
  * time expressions such as 20:55 are treated as a single token;
  * dates such as 20.04.2012 are treated as a single token;
  * email addresses, URLs, and tweet-style names are treated as a single token: {no@mail.ru}, {https://github.com}, {@anna_li};

The Russian UD treebanks do not contain multiword tokens.

## Morphology

### Tags

TBD

### Features

TBD

## Syntax

### Relations Overview

* The following relation subtypes are used in Russian:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [aux:pass]() for passive auxiliaries
  * [obl:agent]() for agents of passive verbs
  * [acl:relcl]() for the traditional class of relative clauses
  * [nummod:gov]() for cardinal numbers that are attached as children of the counted noun but govern its case
  * [nummod:entity]() numeric modifier governed by a noun
  * [flat:foreign]() for non-first words in quoted foreign phrases
  * [flat:name]() for non-first words in multiword proper names

* [clf]() is not used in Russians at all.
  

## Treebanks

There are [four](../treebanks/ru/index.html) Russian UD treebanks:

  * [Russian-SynTagRus](../treebanks/ru_syntagrus/index.html)
  * [Russian-GSD](../treebanks/ru_gsd/index.html)
  * [Russian-Taiga](../treebanks/ru_taiga/index.html)
  * [Russian-PUD](../treebanks/ru_pud/index.html)


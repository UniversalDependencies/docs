---
layout: postag
title: 'PART'
shortdef: 'particle'
---

In Portuguese, `PART` is used to tag prefixes that form complex words, but not compounds.  In `ex-presidente, anti-capitalista, vice-diretor, pós-graduação`, the morphemes `ex-, anti-, vice-, pós-` should be tagged as `PART`. Note that when one uses one of those prefixes alone (in a sentence as `Minha pós não acaba nunca. (My post-grad never ends.)`) "pós" still stands for "pós-graduação". This is different from compound words, such as `norte-americano, meio-campo, porta-voz`, in which there is no particle and one cannot use only the prefix to recall the entire sense of the compound. Weekday names, such as `segunda-feira`, are analysed as compound words, even if the first part is used for the whole e.g. `Essa quarta, sem falta (This Wednesday, without failing.)`. Words such as `fim-de-semana, a partir de, de novo` are `MWE`s and their elements should not be tagged as `PART`.

This means that  prefixed words should be split in the tokenization step. Note that hyphenation is still a big issue here, since many of those complex words formed by particles would not necessarily  be split by a hyphen. Hyphenation is discussed in the new Regulation of Portuguese Orthography (2009) and some specific cases are explictly ruled: vice- and ex- always come with hyphen. But not all cases are specified and many dictionaries (and old corpora) carry both forms  `anti-capitalista` and `anticapitalista`.

`Part` is also used for negative particles, as `não, nem` in predicative contexts. Note that negative adverbs, as `nunca, jamais` are still tagged as `ADV`. 

Examples:

Negative particles: não, nem 

Prefixes: anti-, ex-, pós-, vice-, primeiro-, pró-, infra-
<!-- Interlanguage links updated Út zář 29 20:42:56 CEST 2020 -->

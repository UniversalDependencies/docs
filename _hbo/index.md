---
layout: base
title:  'Ancient Hebrew UD'
udver: '2'
---

# UD for Ancient Hebrew <span class="flagspan"><img class="flag" src="../../flags/svg/IL.svg" /></span>

## Tokenization and Word Segmentation

No tokens in the Ancient Hebrew treebank should contain whitespace. The following are treated as clitics and made into separate tokens:

* Prepositions (ב, ל, מ, ...)
* Possessive and object pronouns (ני, נו, ו, ם, ...)
  * The corresponding independent pronoun is used as the lemma
* Conjunction ו
* Definite determiner ה

## Morphology

### Tags

All tags are used except `X` and `SYM`. `AUX` is used for the copula היה and the positive and negative existentials ישׁ and אין.

### Features

* [Gender](hbo-feat/Gender): [NOUN](hbo-pos/NOUN), [PRON](hbo-pos/PRON), [ADJ](hbo-pos/ADJ), [VERB](hbo-pos/VERB)
* [Number](hbo-feat/Number): [NOUN](hbo-pos/NOUN), [PRON](hbo-pos/PRON), [ADJ](hbo-pos/ADJ), [VERB](hbo-pos/VERB)

## Syntax

* Unused: `iobj`, `expl`, `clf`
* Subtypes: [compound:smixut](hbo-dep/compound-smixut), [nmod:poss](hbo-dep/nmod-poss)

## Treebanks

There is [1](../treebanks/hbo-comparison.html) Ancient Hebrew UD treebank:

  * [Ancient Hebrew-PTNK](../treebanks/hbo_ptnk/index.html)

---
layout: base
title:  'Swedish Sign Language UD'
udver: '2'
---

# UD for Swedish Sign Language <span class="flagspan"><img class="flag" src="../../flags/svg/SE.svg" /></span>

## Tokenization and Word Segmentation

* Sign glosses are always delimited by whitespace.
* There is no punctuation.
* Multiword tokens are not used.

## Morphology

### Tags

* Swedish Sign Language uses 12 of the universal tags.
* The following tags are not used:
  * SYM and PUNCT are not used because this is not a written-language corpus.
  * PART is not used because we do not see signs that are special enough to warrant this.
  * PROPN is not used because there is no syntactic/morphological distinction with other nouns, and the corresponding semantic information is present in the glosses (proper nouns contain the `@en` substring).
  * SCONJ is not used because subordination is often only marked with non-manual markers that are not present in the transcription, or in a few cases with adverbs.
* The auxiliary tag (AUX) is used for the following cases, with remaining verb-like signs being tagged as VERB:
  * The copula *VARA* (be) and the copula-like verbs *HETA* (be named) and *SE-UT* (look like).
  * The signs *PERF* and *PERF-NEG* that mark perfect tense.
  * Modal verbs such as *SKA*, *VILL*, *KAN* that are used with a main verb.
* The tag DET is used for:
  * The sign *EN* (one) when modifying a noun as an article.
  * Pointing signs used with a noun.
* The tag PRON is used for:
  * Pronoun signs such as *PRO1*, *NÅGON* (somebody), etc.
  * Pointing signs when used as heads of noun phrases.


### Features

* No morphological features are used for Swedish Sign Language.

## Syntax

* Subjects have the following characteristics: ...
* Objects have the following characteristics: ...
* Copula constructions in nonverbal clauses are used for: ...
* The following subtypes are used in Swedish Sign Language:
  * [acl:relcl]() for relative clauses
  * [compound:prt]() for verb particles
  * [compound:svc]() for serial verb constructions
  * [nmod:poss]() for possessive/genitive modifiers

## Treebanks

There is [1](../treebanks/Swedish_Sign_Language-comparison.html) Swedish Sign Language UD treebank:

  * [Swedish_Sign_Language-SSLC](../treebanks/swl_sslc/index.html)


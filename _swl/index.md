---
layout: base
title:  'Swedish Sign Language UD'
udver: '2'
---

# UD for Swedish Sign Language <span class="flagspan"><img class="flag" src="../../flags/svg/SE.svg" /></span>

## Tokenization and Word Segmentation

* The Swedish Sign Language Corpus (SSLC) treebank depends on the sign glosses
  provided in the SSLC source material, so the source text is already
  tokenized.
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

* No UD morphological features are used for Swedish Sign Language.
* Note that linearizing and transcribing or glossing a signed language is not
  trivial, and results in some degree of information loss. If data in Swedish
  Sign Language, or some other sign language, using a different convention
  than the Swedish Sign Language Corpus (glossing of manual signs) is to be
  included in UD, this may be different.
* Negated verbs have glosses that end with `-INTE` (semantically negative) or
  `*INTE` (non-manual negation marking).
* Lemmas are not used.

## Syntax

* Subjects may occur on either side of the verb, and often subjects are
  repeated and may occur on both sides of the verb. In this case, the [conj]()
  relation holds between the second and the first sign, and the first sign has
  an [nsubj]() relation to the verb.
* Objects generally follow the verb, without preposition.
* Copula constructions in nonverbal clauses are used for ...
* The following subtypes are used in Swedish Sign Language:
  * [acl:relcl]() for relative clauses
  * [compound:prt]() for verb particles
  * [compound:svc]() for serial verb constructions
  * [nmod:poss]() for possessive/genitive modifiers

## Treebanks

There is one Swedish Sign Language UD treebank:

  * [Swedish_Sign_Language-SSLC](https://github.com/UniversalDependencies/docs/blob/pages-source/treebanks/swl_sslc/index.html)


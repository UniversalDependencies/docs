---
layout: base
title:  'Punjabi UD'
udver: '2'
---

# UD for Punjabi <span class="flagspan"><img class="flag" src="../../flags/svg/PK.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* Tokenize with whitespace and punctuation basically.
* Compounds with hyphens should be split.
* Some clitics have apostrophes at the beginning and could be written merged with the previous word (e.g. 'ਚ "in"). These should be tokenized separately.

## Morphology

### Tags

* Use the full range of UPOS tags.
* Aspectual light verbs should be tagged [VERB]() since they take full inflectional paradigms.
  * Pay special attention to ਜਾਣਾ "to go",  which is usually [VERB]() (including as a light verb) but [AUX]() if it is passivising a verb.

### Features

* TBD

## Syntax

* Special relations:
  * [acl:relcl]() for relative adnominal clauses. These have to have a relative pronoun in them (otherwise just [acl]()).
  * [aux:pass]() for passive auxiliary ਜਾਣਾ.
  * [compound:lvc]() for noun/adjective + verb constructions.
  * [compound:redup]() for reduplication.
  * [compound:svc]() for aspectual light verbs.
  * [nsubj:pass]() for passivized subjects.

## Treebanks

There are [1](../treebanks/pa-comparison.html) Punjabi UD treebanks:

  * [Punjabi-PunTB](../treebanks/pa_puntb/index.html)

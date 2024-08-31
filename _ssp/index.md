---
layout: base
title:  'Spanish Sign Language UD'
udver: '2'
---

# UD for SPANISH SIGN LANGUAGE (LSE) 

## Tokenization and Word Segmentation

* The Spanish Sign Language treebank depends on the sign glosses provided in the source material, so the source texts is already tokenized. Each token corresponds to an id-gloss, i.e. a word that uniquely identifies each LSE sign. Sign glosses consist of uppercase Spanish rough equivalents. English equivalents are also provided as Gloss_en. Depicting constructions (also known as "classifier constructions") are preceded by "cl"
* Note that linearizing and transcribing or glossing a signed language is not trivial, and results in some degree of information loss. The gloss provided correspond to dominant hand (i.e., in most cases, right hand) articulations. However, non manual components are not included.
* Sign glosses are always delimited by whitespace.
* There is no punctuation.
* Multiword tokens are not used.
* Lemmas are not used.

## Morphology

### Tags

* Spanish Sign Language uses 13 of the universal tags: ADJ, ADP, ADV, AUX, CCONJ, DET, NOUN, NUM, PART, PRON, SCONJ, VERB, X
* The following tags are not used:
    * INTJ
    * PROPN
    * PUNCT
    * SYM
* PART is used for the negative sign glossed as "NO"
* AUX is used for an indexing sign that occasionally accompanies a lexical verb, pointing to the core participants.
* DET is used for indefinites, possessives and pointing signs (INDX) accompanying a noun
* PRON is used for pointing signs that head a noun phrase

### Features

* No UD morphological features are used for Spanish Sign Language treebank

## Syntax

* Subject and object are core participants that usually precede or occasionally follow the main verb.
* Nonverbal predicates do not make use of copula constructions.
* The following subtypes are used for Spanish Sign Language:
    * [compound:redup](deps/compound-redup.md) for the repetition of a sign
    * [compound:svc](deps/compound-svc.md) for serial verb construction
    * [compound:vsc](deps/compound-vsc.md) for the repetition of a verb before and after an argument


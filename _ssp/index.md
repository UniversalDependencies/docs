---
layout: base
title:  'Spanish Sign Language UD'
udver: '2'
---

# UD for Spanish Sign Language (Lengua de Signos Española, LSE) <span class="flagspan"><img class="flag" src="../../flags/svg/ES.svg" /></span>

## Tokenization and Word Segmentation

* The Spanish Sign Language treebank depends on the sign glosses provided in the source material, so the source texts is already tokenized. Each token corresponds to an id-gloss, i.e., a word that uniquely identifies each LSE sign. Sign glosses consist of uppercase Spanish rough equivalents. English equivalents are also provided as `Gloss_en`. Depicting constructions (also known as “classifier constructions”) are preceded by “cl”
* Note that linearizing and transcribing or glossing a signed language is not trivial, and results in some degree of information loss. The gloss provided correspond to dominant hand (i.e., in most cases, right hand) articulations. However, non manual components are not included.
* Sign glosses are always delimited by whitespace.
* There is no punctuation.
* Multiword tokens are not used.
* Lemmas are not used.

## Morphology

### Tags

* Spanish Sign Language uses 13 of the universal tags: [ADJ](), [ADP](), [ADV](), [AUX](), [CCONJ](), [DET](), [NOUN](), [NUM](), [PART](), [PRON](), [SCONJ](), [VERB](), [X]()
* The following tags are not used:
    * [PROPN]()
    * [INTJ]()
    * [PUNCT]()
    * [SYM]()
* PART is used for the negative sign glossed as “NO”.
* AUX is used for an indexing sign that occasionally accompanies a lexical verb, pointing to the core participants.
* DET is used for indefinites, possessives and pointing signs (INDX) accompanying a noun.
* PRON is used for pointing signs that head a noun phrase.

### Features

* No UD morphological features are used in the Spanish Sign Language treebank.

## Syntax

* Spanish Sign Language uses 27 relation types: [acl](), [advcl](), [amod](), [appos](), [aux](), [case](), [cc](), [ccomp](), [compound:redup](), [compound:svc](), [compound:vsc](), [conj](), [dep](), [det](), [discourse](), [iobj](), [mark](), [nmod](), [nsubj](), [nummod](), [obj](), [obl](), [parataxis](), [reparandum](), [root](), [vocative](), [xcomp]()
* Subject and object are core participants that usually precede or occasionally follow the main verb.
* Nonverbal predicates do not make use of copula constructions.
* The following subtypes are used for Spanish Sign Language:
    * [compound:redup]() for the repetition of a sign
    * [compound:svc]() for serial verb construction
    * [compound:vsc]() for the repetition of a verb before and after an argument

## Treebanks

There is one Spanish Sign Language UD treebank:

  * [Spanish Sign Language-LSE](../treebanks/ssp_lse/index.html)

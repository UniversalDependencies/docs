---
layout: base
title:  'Skolt Sámi UD'
udver: '2'
---

# UD for Skolt Sámi <span class="flagspan"><img class="flag" src="../../flags/svg/SAMI.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. Exceptions:
  * Numerical expressions (including dates) are treated as single words and may contain punctuation or whitespace: *1.1.1970*, *11:00*, *2 000*.
  * Abbreviations are treated as single words and may contain punctuation or whitespace.
* Multiword tokens are not used in Skolt Sámi.


## Morphology

### Tags

* Skolt Sámi uses 16 of the 17 universal part-of-speech tags: ADJ, ADP, ADV, AUX, CCONJ, CONJ, DET, INTJ, NOUN, NPROP, NUM, PRON, PROPN, PUNCT, SCONJ, VERB .
* There are two copulas leeʹd and iʹlla. The first one means “to be“, and the second one means “is not“.
* Verbs of negation and negative particles have been labled AUX with an aux:neg relation.


### Features

#### Nominal features

* Case has 9 possible values: Abe, Acc, Com, Ess, Gen, Ill, Loc, Nom, Par. They occur with following word POS: NOUN, PROPN, PRON, NUM, ADJ. 
* The cases Ess and Par make no distinction for a singular-to-plural split, and therefore no number category is associated with them.
* Skolt Sámi has possessive suffixes that distinguish three categories of person and two for number.

#### Degree and Polarity
* The comparative is formed with the suffix -Vb '-er', and the superlative is formed by adding the -mõs, -mmus. 
* Polarity in Skolt Sámi is found in the negative verbs and particles.


## Syntax

* Word order generally follows an SO, SV and VO strategy, but more research is required to establish what the actual deviations are from this.
* Objects ([obj]()) can be nominals in the accusative case, without preposition.
* The copula verbs _leeʹd_ (be) and _iʹlla_ (not be) are used in equational, attributional, locative, possessive and benefactory nonverbal clauses.

* The following subtypes are used in Skolt Sámi:
  * [advmod:tmod]() for advmod with temporal value
  * [aux:neg]() for the negative auxiliary verbs and particles
  * [flat:name]() for flat used in person names
  * [obl:tmod]() for obl relation with temporal value


## Treebanks

There are [1](../treebanks/sms-comparison.html) Skolt Sámi UD treebanks:

  * [UD_Skolt_Sami-Giellagas](../treebanks/sms_giellagas/index.html)


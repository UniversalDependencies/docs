---
layout: base
title:  'Maltese UD'
udver: '2.4'
---

# UD for Maltese <span class="flagspan"><img class="flag" src="http://universaldependencies.org/flags/svg/MT.svg" height="20"/></span>

## Tokenization and Word Segmentation

* Tokens are delimited by a) whitespace, b) apostrophe and c) hyphen as follows:
  * Whitespace is the default token delimiter
  * Apostrophe is a delimiter for proclitic variants of prepositions/case markers *b'*, *f'*, *m'*, *s'* and *t'*
  * Hyphens is a delimiter for the definite article *il-* and its assimilated forms which include prepositions/case markers with fused definite definite article; these are - for the moment - treated as single tokens.
* A comma is treated as a token separator in numbers, e.g. *1,500* is three tokens: 1 - , - 500.
* Words with spaces or multi-word tokens do not occur in MUDT.


## Morphology

### Tags

* The native tagset (XPOS) is as follows:


* MUDT uses all 17 UPOS
* Four types are considered UPOS AUX in MUDT:
  * XPOS KIEN (the verb *kien*) in all its forms
  * XPOS VERB_PSEU *għad* and its negative form *għadx*
  * XPOS VERB_PSEU *tantx* (this one only provisionally so pending further study)
  * XPOS PRON_PERS_NEG and XPOS PRON_PERS when preceded by XPOS NEG
* Modal verbs are not considered AUX in MUDT
* UPOS PART is used for the following types:
  * *ma* (XPOS NEG)
  * *lanqas* (XPOS FOC) when used as negator
  * XPOS FUT (*se*, *ħa*, *għad*) and XPOS PROG (*qed* and its variants)
* The distinction between PRON and DET is syntactic: in addition to obvious candidates for DET-hood like XPOS DEF, PRON_DEM and PRON_DEM_DEF, those XPOS PRON occurring in complement to XPOS DEF are annotated as UPOS DET.


### Features

* Morphological features are not employed in MUDT.
* PRON types are encoded in the native tagset (see above).

## Syntax
### General

* Five types of clauses are defined in MUDT:
  * Verbal clauses (those with XPOS VERB or VERB_PSEU as the root)
  * Copular clauses (
  * Non-copular verbless clauses
  * Existential clauses (those with XPOS HEMM as the root)
  * Non-expletive subjectless clauses (all the rest)
* There are four types of copular clauses
  * No copula (Type i)
  * Personal pronoun (XPOS PRON_PERS) as the copula (Type ii)
  * XPOS PART_ACT *qiegħed* and its forms as the copula (Type iii)
  * XPOS KIEN as the copula (Type iv)

### Core and oblique arguments
* A nominal subject (`nsubj`) is primarily defined as the nominal dependent of verbal, copular and existential clauses that
  * agrees with the predicate in gender, number and person  (most verbal and all type (iv) copular clauses)
  * agrees with the predicate in gender and number (type (ii) and type (iii) copular clauses)
  * is the only obligatory nominal dependent of the predicate for type (i) copular
clauses and main existential clauses
* An object (`obj` or `iobj`) is primarily defined as
  * a verbal dependents that bears the XPOS LIL/LIL_DEF case markers
  * a verbal dependent not bearing the case markers cited above or prepositions that is replaceable or can be co-referential with the respective member of either of the verbal clitic sets
* Additionally, MUDT recognizes another type of core argument, the non-canonical object, which is for the purposes of UD designated `obl:arg`. This relation is used for the following verbal dependents:
  * obligatory arguments realized by means of prepositional phrases, regardless of how many and what other arguments the verb has
  * obligatory arguments realized by means of prepositional phrases that alternate with noun phrases (including clitics) normally annotated as `obj`
  * obligatory arguments indicating the outcome, effect or origin, regardless of whether they are realized as noun phrases or prepositional phrases and regardless of how many and what other arguments the verb has
* All non-obligatory prepositional phrases with adverbial function are attached as `obl`

### Relations overview
* The following relation subtypes are used in MUDT:
  * advmod:neg
  * aux:neg
  * aux:part
  * aux:pass
  * case:det
  * cop:expl
  * flat:name
  * nmod:poss
  * nsubj:pass
  * obl:arg
  * obl:agent

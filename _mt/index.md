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
* Words with spaces or multi-word tokens do not occur in MUDT.


## Morphology

### Tags

* The native tagset (XPOS) is as follows:
* MUDT uses all 17 UPOS; the mapping between XPOS and UPOS is 

### Features

* Morphological features are not employed in MUDT.
* PRON types are encoded in the native tagset (see above).

## Syntax

* Five types of clauses are defined in MUDT:
 * Verbal clauses (those with XPOS VERB or VERB_PSEU as the root)
 * Copular clauses (
 * Non-copular verbless clauses
 * Existential clauses (those with XPOS HEMM as the root)
 * Non-expletive subjectless clauses (all the rest)
* There are four types of copular clauses
 * No copula
 * Personal pronoun (XPOS PRON_PERS) as the copula
 * XPOS PART_ACT *qiegħed* and its forms as the copula
 * XPOS KIEN as the copula
* The following relations are used in MUDT:

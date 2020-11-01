---
layout: base
title:  'Akkadian UD'
udver: '2'
---

# UD for Akkadian <span class="flagspan"><img class="flag" src="../../flags/svg/IQ.svg" /></span>

## Tokenization and Word Segmentation

* Words are only exceptionally delimited by whitespace or punctuation in the original cuneiform texts. Thus, this treebank is based on the bound transcription (normalized text)

* In [RIAO](../treebanks/akk_RIAO/index.html), sentence boundaries were arrived at by syntactically annotating the unsegmented corpus, and identifying words that are head words but are not themselves dependents of other words. The separate trees produced this way were considered to be separate sentences.

## Morphology

### Tags

* In [RIAO](../treebanks/akk_RIAO/index.html), 13 universal tags have been used. 
* The tags AUX, INTJ, PUNCT, SYM were not used.

### Nominal Features

* Number has 2 possible values: Sing and Plur.

### Verbal Features

In [RIAO](../treebanks/akk_RIAO/index.html), the following subcategories of verbs are annotated:
* finiteness (finite, infinitive, stative),
* stem (G, D, Š, N etc.),
* mood (indicative, imperative, precative, prohibitive),
* tense (present, preterite, perfect), person (1, 2, 3),
* number (singular, plural) and
* gender (masculine, feminine).
Following Streck (2011: 363), we consider subordinative and ventive as subcategories of their own, which we tag as boolean values. For nouns, adjectives and non-finite verbal forms the subcategories are:
* case (nominative, accusative, genitive),
* number (as above),
* gender (as above) and
* base, which can have four different values:
a) free (status rectus),
b) bound (status constructus),
c) suffixal (followed by pronominal suffixes) and
d) terminal (status absolutus). 

## Syntax

### Word order
For the most part, Akkadian word order is SOV structure.

### Core Arguments, Oblique Arguments and Adjuncts
* Nominal subjects are in the nominative case without an adposition.

### Relations Overview

* The following relation main types are not used in this treebank: aux, clf, compound, cop, dislocated, expl, flat, orphan, punct, reparandum.
* The following relation subtypes are used in Akkadian:
  * acl:relcl for relative clauses
  * advmod:emph for the particle lū in its asseverative function
  * advmod:neg for the negation particles lā and ul
  * det:poss for possessive determiners
  * nmod:poss for the construct state

## Treebanks

There are [2](../treebanks/akk-comparison.html) Akkadian UD treebanks:

  * [PISANDUB](../treebanks/akk_PISANDUB/index.html)
  * [RIAO](../treebanks/akk_RIAO/index.html)

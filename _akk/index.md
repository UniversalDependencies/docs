---
layout: base
title:  'Akkadian UD'
udver: '2'
---

# UD for Akkadian <span class="flagspan"><img class="flag" src="../../flags/svg/IQ.svg" /></span>

## Tokenization and Word Segmentation

* Words are only exceptionally delimited by whitespace or punctuation in the original cuneiform texts. Thus, this treebank is based on the bound transcription (normalized text)

## Morphology

### Tags

* In this Akkadian treebank, 13 universal tags have been used. 
* The tags AUX, INTJ, PUNCT, SYM are not used.

### Nominal Features

* Number has 2 possible values: Sing and Plur.

### Verbal Features

* In this treebank, mood has 4 possible values: Ind(icative), Imp(erative), Precative, Prohibitive.

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts
* Nominal subject is in the nominative case without an adposition.

### Relations Overview

* The following relation main types are not used in this treebank: aux, clf, compound, cop, dislocated, expl, flat, orphan, punct, reparandum.
* The following relation subtypes are used in Akkadian:
  * acl:relcl for relative clauses
  * advmod:emph for the particle lū in its asseverative function
  * advmod:neg for the negation particles lā and ul
  * det:poss for possessive determiners
  * nmod:poss for the construct state

## Treebanks

There are 2 (../treebanks/LCODE-comparison.html) Akkadian UD treebanks:

  * [Akkadian-PISANDUB](../treebanks/LCODE_a/index.html)
  * [Akkadian-RIAO](../treebanks/LCODE_b/index.html)


There are 2 (../treebanks/akk-comparison.html) Akkadian UD treebanks:

  * [PISANDUB](../treebanks/akk_PISANDUB/index.html)
  * [RIAO](../treebanks/akk_RIAO/index.html)

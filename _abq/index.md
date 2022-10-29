---
layout: base
title:  'Abaza UD'
udver: '2'
---

# UD for Abaza <!-- <span class="flagspan"><img class="flag" src="../../flags/svg/RU-ABAZA.svg" /></span> -->


## Tokenization and Word Segmentation

* All words are converted to lower case.
* All punctuation marks are removed from the texts.
* Words are delimited by whitespace characters.


## Morphology

### Tags

Abaza uses all universal POS tags except PUNCT and SYM.

### Features

Morphological features are added automatically based on glosses and then manually checked. Not all glosses are converted to morphological features. The selected morphological features available for most nouns and verbs are presented below.

#### Nominal features

* [Definite](): `Def`, `Ind`.
* [Number](): `Sing`, `Plur`.
* [Gender[psor]](): `Fem`, `Masc`, `Neut`.
* [Number[psor]](): `Sing`, `Plur`.
* [Person[psor]](): `1`, `2`, `3`.

#### Verbal features

* [Gender[abs]](), [Gender[erg]](), [Gender[io]](): `Com`, `Fem`, `Masc`, `Neut`.
* [Number[abs]](), [Number[erg]](), [Number[io]](): `Sing`, `Plur`.
* [Person[abs]](), [Person[erg]](), [Person[io]](): `1`, `2`, `3`.
* [VerbForm](): `Fin`, `NonFin`, `Conv`.
* [Tense](): `Pres`, `Aor`, `Imp`, `Past`, `Fut`, `Fut2`, `Subj`, `Subj2`.


## Syntax

#### Arguments

Abaza is a morphologically ergative but syntactically nominative-accusative language. Subjects are usually cross-referenced on the verb as absolutive (in intransitive clauses) or ergative (in transitive clauses) arguments, direct objects are usually cross-referenced on the verb as absolutive arguments (in transitive clauses), indirect objects are cross-referenced on the verb as indirect objects, oblique arguments are not marked on the verb.

#### Relations Overview

Abaza uses all universal UD relations except `appos`, `clf`, `compound`, `dep`, `expl`, `goeswith`, `list`, `orphan` and `punct`.

One language-specific relation is introduced for the Abaza treebank: [dep:repeat]().


## Treebanks

There is just one Abaza UD treebank:

  * [Abaza-ATB](../treebanks/abq/index.html)

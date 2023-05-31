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
* Nominal complexes, e.g. *хI-скIолкIа-кI* (three-splinter-UNIT), are treated as single words.


## Morphology

### Tags

Abaza uses all universal POS tags except `PUNCT` and `SYM`.

The POS tag `VERB` is applied to all word-forms which have at least some verbal affixes.

Two predicates in the treebank are marked as auxiliaries: *акIвызлара* 'be' and *чпара* 'do'. The verb *чпара* 'do' is marked as an auxililiary when it is used in constructions with lexical verbs borrowed from Russian, e.g., *вязать й-с-чпа-тI* (knit.INF (Rus) 3PL.ABS-1SG.ERG-do-DCL) 'I knitted them'.

### Features

Morphological features are added automatically based on glosses and then manually checked. Not all glosses are converted to morphological features. The selected morphological features available for most nouns and verbs are presented below.

#### Nominal features

* Definite: `Def`, `Ind`.
* Number: `Sing`, `Plur`.
* Gender[psor]: `Fem`, `Masc`, `Neut`.
* Number[psor]: `Sing`, `Plur`.
* Person[psor]: `1`, `2`, `3`.

#### Verbal features

* Gender[abs], Gender[erg], Gender[io]: `Com`, `Fem`, `Masc`, `Neut`.
* Number[abs], Number[erg], Number[io]: `Sing`, `Plur`.
* Person[abs], Person[erg], Person[io]: `1`, `2`, `3`.
* VermForm: `Fin`, `NonFin`, `Conv`.
* Tense: `Pres`, `Aor`, `Imp`, `Past`, `Fut`, `Fut2`, `Subj`, `Subj2`.

Negative verbal forms have the feature `Polarity=Neg`. Verbal forms with the causative prefix have the feature `Caus=Yes`. Interrogative verbal forms have the feature `Int=Yes`. Imperative verbal forms have the feature `Mood=Imp`. For relative verbal forms, the type of the relative clause is specified: `RelType=Abs`, `RelType=Mnr`, `RelType=Tmp`, etc.

## Syntax

#### Arguments

Abaza is a morphologically ergative but syntactically nominative-accusative language. Subjects are usually cross-referenced on the verb as absolutive (in intransitive clauses) or ergative (in transitive clauses) arguments, direct objects are usually cross-referenced on the verb as absolutive arguments (in transitive clauses), indirect objects are cross-referenced on the verb as indirect objects, oblique arguments are not marked on the verb.

#### Relations Overview

Abaza uses all universal UD relations except `appos`, `clf`, `compound`, `dep`, `expl`, `goeswith`, `list`, `orphan` and `punct`.

One language-specific relation is introduced for the Abaza treebank: `dep:repeat`. It is used when a word is repeated for no particular reason.


## Treebanks

There is just one Abaza UD treebank:

  * [Abaza](../treebanks/abq/index.html)



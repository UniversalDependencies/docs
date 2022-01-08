---
layout: base
title:  'Prakrit UD'
udver: '2'
---

# UD for Prakrit <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* Many Prakrit documents and inscriptions do not have whitespace to segment words. Attempt to follow the
  Sanskrit guidelines, including splitting transparent compounds and undoing sandhi.
* Do not separate preverbs.

## Morphology

### Tags

* All universal POS tags can be used (in theory).
* Earlier inscriptions lack punctuation (no [SYM]()) and auxiliary verbs are a late Prakrit innovation (no [AUX]()).

### Nominal features

* Nominals ([NOUN](), [PROPN](), [ADJ](), some [PRON](), [DET](), [NUM](), and nominalised forms
  of [VERB]()) have an inherent [Gender]() feature with possible values `Masc`, `Fem`, or `Neut`.
* [Number]() on nominals has 3 possible values: `Sing`, `Dual` (rare) and `Plur`.
* [Case]() on nominals has 8 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Loc`, `Abl`, `Ins`, `Voc`.

### Degree and Polarity

* [Polarity]() has two values, `Pos` and `Neg`, and applies to adverbs ([ADV]()).

### Verbal Features

* [Aspect]() is marked if it is perfective (`Perf`).
* [Mood]() has 2 possible values: `Ind`, `Imp`.
* [Voice]() has 4 possible values: `Act`, `Pass`, `Mid`, `Cau` (which combines with the others).

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()) and determiners ([DET]()).
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  * Person is also marked on finite verbs ([VERB](), [AUX]()).

### Other Features

* There is one language-specific feature:
  * [Compound](feat/Compound.html)

## Syntax

* Special relations:
  * [acl:relcl]() for relative adnominal clauses.
  * [advmod:lmod]() and [obl:lmod]() for adverbs/oblique nominals specifying a spatial relation.
  * [advmod:lmod]() and [obl:tmod]() for adverbs/oblique nominals specifying a temporal relation.
  * [compound:redup]() for reduplication.
  * [nmod:desc]() for nominal epithets/regnal titles.

## Treebanks

There is [1](../treebanks/pra-comparison.html) Prakrit UD treebank:

  * [Prakrit-DIPI](../treebanks/pra_dipi/index.html) (for imperial Prakrit inscriptions, including Ashokan edicts)

---
layout: base
title:  'Finnish UD'
udver: '2'
---

# UD for Finnish <span class="flagspan"><img class="flag" src="../../flags/svg/FI.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters.
* Multitoken words (a single syntactic word corresponds to multiple ortographic tokens) include:
     - Emoticons like ": )"
     - Numerical expressions like "20 000"
* Multiword tokens (a single orthographic token corresponds to multiple syntactic words) include:
     - E.g. "ettei" --> "että ei"
     - "miksen" --> "miksi en"
     - "emmä" --> "en mä"
* Punctuation marks are treated as separate tokens; the exceptions include:
     - ordinary numbers (1. tammikuuta)
     - abbreviations (esim.)
* Emoticons are single tokens

## Morphology

### Tags

* Finnish uses all 17 universal POS categories
     - However, [DET]() and [PART]() are not used in Finnish-TDT and Finnish-PUD
* Finnish has following auxiliary verbs:
     - olla, ei, voida, pitää, saattaa, täytyä, joutua, aikoa, taitaa, tarvita, mahtaa (Finnish-TDT and Finnish-PUD)
* Finnish has one copula verb:
     - olla

### Verbal Features

* There are three main verbal forms distinguished by the value of [VerbForm]() feature:
     - Finite verb [Fin]()
     - Infinite verb [Inf]()
     - Participle verb [Part]()
* [Mood]() has four values: `Cnd`, `Imp`, `Ind` or `Pot`.
* [Tense]() has two values: `Past` or `Pres`.
* [Voice]() has two values: `Act` and `Pass`.
* [Person]() has four values, `0`, `1`, `2` and `3`.
* [Number]() has values `Sing` or `Plur`.

### Nominal Features

* Finnish does not have Gender feature
* [Number]() feature has two possible values: `Sing` and `Plur`
* [Case]() has 15 possible values: `Abe`, `Abl`, `Acc`, `Ade`, `All`, `Com`, `Ela`, `Ess`, `Gen`, `Ill`, `Ine`, `Ins`, `Nom`, `Par`, `Tra`

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()), adverbs ([ADV]()) and participle verbs ([VERB]() or [AUX]()), and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() has only value `Neg`, and applies to negative verb 'ei'
* [Connegative]() has only value `Yes` and applies to verbs which have been negated by 'ei'

## Syntax

* Nominal subject ([nsubj]()) is a nominal in the nominative, genitive or partitive case (pronouns also accusative), without preposition.
* Objects ([obj]()) can be nominals in nominative, genitive or partitive case (pronouns also accusative), without preposition.
* The copula verb _olla_ (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.

### Relations Overview

* The following relation subtypes are used in Finnish:
  - [acl:relcl]() for relative clauses
  - [aux:pass]() for passive auxiliaries
  - [cc:preconj]() for constructions like _sekä ... että_
  - [compound:nn]() for noun compound modifiers and appellation modifiers
  - [compound:prt]() for adverbal components of particle verbs
  - [cop:own]() for possessive copula clauses like _Minulla on kynä_
  - [csubj:cop]() for clausal subject in copula clauses
  - [flat:foreign]() for foreign-language token sequences
  - [flat:name]() for multi-token proper names
  - [nmod:gobj]() for genitive objects of noun derivations of verbs (like _talon rakentaminen_)
  - [nmod:gsubj]() for genitive subjects of noun derivations of verbs (like _maljakon särkyminen_)
  - [nmod:poss]() for posessive genitive modifiers
  - [nsubj:cop]() for nominal subject in copula clauses
  - [xcomp:ds]() for clausal complements with different subject

* The following relation types are not used in Finnish at all:
  - [clf](), [dislocated](), [iobj](), [list]()

## Treebanks

There are [three](../treebanks/fi-comparison.html) Finnish UD treebanks:

  * [Finnish-TDT](http://universaldependencies.org/treebanks/fi_tdt/index.html)
  * [Finnish-FTB](http://universaldependencies.org/treebanks/fi_ftb/index.html)
  * [Finnish-PUD](http://universaldependencies.org/treebanks/fi_pud/index.html)

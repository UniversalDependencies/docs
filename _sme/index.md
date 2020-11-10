---
layout: base
title:  'North Sami UD'
udver: '2'
---

# UD for North Sami <span class="flagspan"><img class="flag" src="../../flags/svg/SAMI.svg" /></span>

## Tokenization and Word Segmentation

* The tokenisation is mainly based on white-space.
* The punctuation is used as part of the token for ordinals written with
  digits: "123." as well some abbreviations.
* The initial tokenisation for the currently only treebank was made based on
  [morphological analyser from giellatekno](https://giellatekno.uit.no).


## Morphology

### Tags

* North Sámi uses all 17 universal POS categories
  - [PART]() is currently not used
  - [DET]() is currently not used
* North sámi has following auxiliaries:
  - "leat" (to be, also to own etc.)
  - "ii" (inflected negation verb)
  - modals: ... (list will be extended as the corpora gets larger)


### Features


### Verbal Features

* There are three main verbal forms distinguished by the value of [VerbForm]()
  feature:
     - Finite verb [Fin]()
     - Infinite verb [Inf]()
     - Participle verb [Part]()
     - Gerund [Ger]()
* [Mood]() has four values: `Cnd`, `Imp`, `Ind` or `Pot`.
* [Tense]() has two values: `Past` or `Pres`.
* [Voice]() has two values: `Act` and `Pass`.
* [Person]() has three values, `1`, `2` and `3`.
* [Number]() has values `Sing`, `Plur` and `Dual`.

#### Nominal Features

* North Sámi does not have Gender feature
* [Number]() feature has values: `Sing`, `Plur` and `Dual`
* [Case]() has 8 possible values:  `Nom`, `Gen`, `Acc`, `Loc`, `Ill`, `Ess`,
  `Com`, `Abe`

#### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()), adverbs ([ADV]()) and participles
  ([VERB]() or [AUX]()), and has one of three possible values: `Pos`,
  `Cmp`, `Sup`.
* [Polarity]() has only value `Neg`, and applies to negative verb 'ei'
* [Connegative]() has only value `Yes` and applies to verbs which have been
  negated by 'ii'

#### Possessives

* Layered features are used for possessive suffixes:
  - [Number[psor]]() for number and [Person[psor]]() for person of possessor


## Syntax

* Nominal subject ([nsubj]()) is typically a nominal in the nominative,
  genitive or partitive case, without preposition.
* Objects ([obj]()) can be nominals in nominative, genitive, partitive
  or accusative case
* The copula verb _leat_ (be) is used in equational, attributional, locative,
  possessive and benefactory nonverbal clauses.
* genetive modifier uses [nmod:poss]() subtype
* [acl:relcl]() is used for relative clauses
* [aux:neg]() is used for negation
* [compound:nn]() is used for titles etc compounds structures

---

## Treebanks

There is [1](../treebanks/sme-comparison.html) North Sámi UD treebanks:

  * [Northern Sámi-Giella](../treebanks/sme_giella/index.html)


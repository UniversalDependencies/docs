---
layout: base
title:  'Veps UD'
udver: '2'
---

# UD for Veps <span class="flagspan"><img class="flag" src="../../flags/svg/RU-VEPS.svg" /></span>

## Tokenization and Word Segmentation

* The main tokenization is the standard white-space delimited approach with punctuations separated.
* Punctuation marks are treated as separate tokens; the exceptions include apostrophes, what mark palatalizations; ordinary numbers (23. sügüz'ku) abbreviations (they can be written with and without period).


## Morphology

### Tags

* Veps uses 13 universal POS categories
  - DET (determiner), INT (interjection), SYM (symbol), X (other) categories are currently not used
* Veps has the following auxiliary verbs:
  - "olda" (to be, also to own etc.)
  - "ei" (negation of verb)
  - modals: "voida", "sada" (can), "pidada" (must).
       (list can be extended as the corpora gets larger)


### Features

### Verbal Features

* There are five main verbal forms, distinguished by the value of the [VerbForm]() feature:
  - Infinitive `Inf`, tagged [VERB]() or [AUX]().
  - Finite verb `Fin`, tagged [VERB]() or [AUX]().
  - Participle `Part`, tagged [VERB]() or [AUX]() (the so-called l-participle) or [ADJ]() (all other participle types).
  - Supine `Sup`, tagged [VERB]() or [AUX]().
  - Converb `Conv`, tagged [VERB]() or [AUX]().
* [Mood]() has two values: `Cnd` or `Ind`.
  - values `Imp` and `Pot` can be added as the corpora gets larger
* [Tense]() has two values: `Past` or `Pres`.
* [Voice]() has two values: `Act` and `Pass`.
* [Person]() has three values, `1`, `2` and `3`.
* [Number]() has two values `Sing` or `Plur`.

### Nominal Features

* Veps does not have Gender feature
* [Number]() feature has two possible values: `Sing` and `Plur`
* [Case]() has 15 possible values: `Abl`, `Ade`, `All`, `Apr`, `Com`,
  `Ela`, `Ess`, `Gen`, `Ill`, `Ine`, `Nom`, `Par`, `Pro`, `Ter`, `Tra`
  - values `Abe` and `Egr` can be added as the corpora gets larger

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and has one of two possible values: `Pos`, `Cmp`
  - value `Sup` can be added as the corpora gets larger
  - value `Dim` can be added and applied to nouns as the corpora gets larger
* [Polarity]() has only value `Neg`, and applies to auxiliarie 'ei'
* [Connegative]() has only value `Yes` and applies to verbs which have been negated by 'ei'.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()).
* [NumType]() is used with numerals ([NUM]()) and adjectives ([ADJ]()).
* The [Reflex]() feature marks reflexive pronouns _(ičeze)_.
  In Veps it is always used together with `PronType=Prs`.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
* [PronType]() is a list based feature of pronouns and determiners and it has the following values:
   * "PronType=Dem" for demonstrative pronouns
   * "PronType=Int" for interrogative pronouns
   * "PronType=Prs" for personal pronouns
   * "PronType=Tot" for total (collective) pronouns (_kaik_)
 
 ### Other Features

* Veps treebank has the following language-specific features:
  * [NumForm]() has two values: `Digit` or `Letter`.
  * [NumType]() has a value `Card` for cardinal numbers and `Ord` for ordinal numbers.
  * [AdpType]() distincts preopositions `AdpType=Prep` and postpositions `AdpType=Post`.
  * [Clitic]() marks an indefinite article as a clitic _(se)_


## Syntax

* Nominal subject ([nsubj]()) is typically a nominal in the nominative,
  genitive or partitive case, without preposition.
  -    An infinitive verb may serve as the subject and is labeled as clausal subject, [csubj]().
* Objects ([obj]()) can be nominals in nominative, genitive or partitive case.
  - The infinitival complement is labeled as [xcomp]() or [ccomp]().
* The copula verb _olda_ (be) is used in equational, attributional, locative,
  possessive and benefactory nonverbal clauses.

### Relations Overview

* The following relation subtypes are used in Veps:
  * [acl:relcl]() for relative clauses
  * [csubj:cop]() for clausal or infinitive subject in copula clauses.
  * [nsubj:cop]() for nominal subject in copula clauses
  * [flat:name]() for names with two or more components.

## Treebanks

There is [1](../treebanks/vep-comparison.html) Veps UD treebanks:

  * [Veps-VWT](../treebanks/vep_vwt/index.html)



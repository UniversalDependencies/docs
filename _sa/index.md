---
layout: base
title:  'Sanskrit UD'
udver: '2'
---

<!-- Inspired by an old proposal for language-specific documentation here: http://universaldependencies.org/v2/minimaldoc.html
     If we agree on a scheme like this, the old proposal should be updated and made visible in the “How to Contribute” section;
     right now it is probably not linked from anywhere. -->

# UD for Sanskrit <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* If a punctuation mark is attached to a neighboring word, we tokenize it as a separate token (word).
* Compounds are split and sandhi undone as it is the custom in Sanskrit linguistics.
  Sometimes it is necessary because one or more parts of an orthographic word is syntactically independent of the others.
  However, even parts of a nominal compound may be separated in order to make compound splitting consistent and predictable.
  Occasionally it is possible that parts of a multi-word token end up being connected with a [compound]() relation.

## Morphology

### Tags

* Sanskrit uses 16 universal POS categories;
  the current data does not contain any occurrences of the [SYM]() category.
* The only auxiliary verb is the copula अस् _(as)_ “to be”.

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with values `Masc`, `Fem` or `Neut`.
* [Number]() has 3 possible values: `Sing`, `Dual` and `Plur`.
* [Case]() has 8 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Loc`, `Abl`, `Ins`, `Voc`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM]().
  It also occurs with some non-finite verb forms such as participles.

### Degree and Polarity

* [Polarity]() has two values, `Pos` and `Neg`, and applies to adjectives ([ADJ]()) and participles.

### Verbal Features

* [Aspect]() is marked if it is perfective (`Perf`).
* [Mood]() has 4 possible values: `Ind`, `Imp`, `Jus`, `Opt`.
* [Voice]() has 4 possible values: `Act`, `Pass`, `Mid`, `Caus`.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()) and determiners ([DET]()).
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).

### Other Features

* There is one language-specific feature:
  * [Compound](feat/Compound.html)

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
* For the purpose of UD the objects are divided to core objects, labeled [obj]() or [iobj](),
  and oblique objects, labeled [obl:arg]().
  * Bare accusative objects are considered core.
  * All prepositional objects are considered oblique.
* In passive clauses, the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.

### Non-verbal Clauses

* Clauses with nominal predicates either use the copula अस् _(as)_ “to be”,
  or they use simple juxtaposition without copula.

### Relations Overview

* The following relation subtypes are used in Sanskrit:
  * [acl:relcl]() for relative adnominal clauses
  * [nsubj:cop]() for subjects of nominal clauses (with or without copula)
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
  * [obl:arg]() for prepositional objects
  * [nmod:poss]() for possessive/genitive modifiers
  * [nummod:gov]() for cardinal numbers that are attached as children of the counted noun but govern its case
  * [advmod:emph]() for adverbs or particles that modify noun phrases and emphasize or negate them

## Treebanks

There is one Sanskrit UD treebank:

  * [Sanskrit-UFAL](../treebanks/sa_ufal/index.html)

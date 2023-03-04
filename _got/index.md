---
layout: base
title:  'Gothic UD'
udver: '2'
---

# UD for Gothic

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters.
* Punctuation such as commas and periods is not included in the data.
  Occasionally a punctuation symbol (typically a hyphen) is part of a word, as in _at-gaf, þat-ain, ga-seƕi_.
* There are no multi-word tokens.
* There are no words with spaces.

## Morphology

### Tags

* Gothic uses 14 universal POS categories. There are no particles, punctuation and other symbols in the data.
* The only auxiliary verb ([AUX]()) in Gothic is _wisan_ “to be”. It is used as copula (_ni aiw swa uskunþ <b>was</b> in Israela_ “it was never so seen in Israel”).
* There are three main (de)verbal forms, distinguished by the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]().

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of three values: `Masc`, `Fem` or `Neut`.
  * The following parts of speech inflect for `Gender` because they must agree with nouns: [ADJ](), [DET](), [NUM](),
    [VERB](), [AUX](). For verbs (including auxiliaries), only participles can inflect for gender. Finite verbs don't.
* The three values of the [Number]() feature are `Sing`, `Dual`, and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM](), [VERB](), [AUX]() (finite and participles).
  The dual number is distinguished for pronouns and verbs (including auxiliary) but not for nouns, adjectives or determiners.
* [Case]() has 5 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Voc`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM]().
  For verbs ([VERB]()) and auxiliaries ([AUX]()) it occurs with participles (`VerbForm=Part`).

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() is used to mark the negative adverbs _ni, nih, niþ, nis, nibai, nei,_ i.e., only the `Neg` value is used.

### Verbal Features

* Finite verbs always have one of three values of [Mood](): `Ind`, `Imp` or `Opt`.
* Indicative and verbs always have one of two values of [Tense](): `Past`, `Pres`.
* The feature [Aspect]() is used with perfect participles, i.e., the only value is `Perf`.
* There are two values of [Voice](): `Act`, `Pass`.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()) and adverbs ([ADV]()): `Prs`, `Rcp`, `Int`, `Rel`.
* The [Poss]() feature marks possessive personal adjectives (e.g. _meins_ “my”).
* The [Reflex]() feature is always used together with `PronType=Prs` and it marks reflexive pronouns _(sik)_ and reflexive possessive adjectives _(seins)_.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive adjectives ([ADJ]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).

### Other Features

* There is one language-specific feature:
  * [Strength]() with two values, `Strong` and `Weak`, is used with adjectives and participles to distinguish
    forms of the [strong vs. weak declension](https://en.wikipedia.org/wiki/Gothic_declension#Adjectives).
    For example, masculine singular nom-gen-dat-acc strong _blinds, blindis, blindamma, blindana_ “blind”;
    weak _blinda, blindins, blindin, blindan_ “blind”.

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
  * A subordinate clause may serve as the subject and is labeled `csubj`.
* Nominal direct object ([obj]()) is a noun phrase in the accusative case, without preposition.
* Nominal indirect object ([iobj]()) is a noun phrase in the dative case, without preposition.
* Other nominal dependents of a predicate are labeled as oblique ([obl]()).
* In passive clauses, the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
  * If the demoted agent is present, its relation is labeled [obl:agent]().

### Relations Overview

* The following relation subtypes are used in Gothic:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
  * [flat:name]() for parts of a personal name

## Treebanks

There is 1 Gothic UD treebank:

  * [Gothic-PROIEL](../treebanks/got_proiel/index.html)

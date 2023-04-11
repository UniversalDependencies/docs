---
layout: base
title:  'Old Church Slavonic UD'
udver: '2'
---

# UD for Old Church Slavonic <span class="flagspan"><img class="flag" src="../../flags/svg/MORAVA.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters.
* Punctuation such as commas and periods is not included in the data.
  Occasionally a punctuation symbol (typically a hyphen) is part of a word, as in _вꙑ-инѫ_.
* There are no multi-word tokens.
* There are no words with spaces.

## Morphology

### Tags

* Old Church Slavonic uses 14 universal POS categories. There are no particles, punctuation and other symbols in the data.
* The only auxiliary verb ([AUX]()) in Old Church Slavonic is _бꙑти_ “to be”. It is used as copula (_съ ними <b>естъ</b> женихъ_ “the bridegroom is with them”).
* There are five main (de)verbal forms, distinguished by the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]().
  * Resultative participle `PartRes`, tagged [VERB]() or [AUX]().
  * Supine `Sup`, tagged [VERB]() or [AUX]().

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of three values: `Masc`, `Fem` or `Neut`.
  * The following parts of speech inflect for `Gender` because they must agree with nouns: [ADJ](), [DET](), [NUM](),
    [VERB](), [AUX](). For verbs (including auxiliaries), only participles can inflect for gender. Finite verbs don't.
* The three values of the [Number]() feature are `Sing`, `Dual`, and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM](), [VERB](), [AUX]() (finite and participles).
* [Case]() has 7 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Ins`, `Loc`, `Voc`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM]().
  For verbs ([VERB]()) and auxiliaries ([AUX]()) it occurs with participles (`VerbForm=Part`).

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of two possible values: `Pos`, `Cmp`.
* [Polarity]() is used to mark the negative adverbs _не, ни, нѣ,_ and the negative forms of the auxiliary _нѣстъ, нѣсмъ, нѣсте, нѣси, нѣсмь, нѣсть,_ i.e., only the `Neg` value is used.

### Verbal Features

* Finite verbs always have one of three values of [Mood](): `Ind`, `Imp` or `Sub`.
* Indicative verbs always have one of three values of [Tense](): `Past`, `Pres`, `Fut`.
  The future tense is only annotated on the future forms of the auxiliary verb.
* There are two values of [Aspect](): `Imp`, `Perf`.
* There are two values of [Voice](): `Act`, `Pass`.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()) and adverbs ([ADV]()): `Prs`, `Rcp`, `Int`, `Rel`.
* The [Poss]() feature marks possessive personal adjectives (e.g. _мои_ “my”).
* The [Reflex]() feature is always used together with `PronType=Prs` and it marks reflexive pronouns _(сѧ)_ and reflexive possessive adjectives _(свои)_.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive adjectives ([ADJ]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).

### Other Features

* There is one language-specific feature:
  * [Variant]() with one value, `Short`, is used with adjectives and participles to mark the short or
    _nominal_ forms (as opposed to the long or _pronominal_ forms).
    For example, masculine singular nominative short _золъ_ “bad”; long _зълꙑ_ “bad”.

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
  * [aux:pass]() for the passive auxiliary
  * [flat:name]() for parts of a personal name
  * [advcl:cmp]() for adverbial clauses of comparison

## Treebanks

There is 1 Old Church Slavonic UD treebank:

  * [Old Church Slavonic-PROIEL](../treebanks/cu_proiel/index.html)

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

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is 1 Old Church Slavonic UD treebank:

  * [Old Church Slavonic-PROIEL](../treebanks/cu_proiel/index.html)

---
layout: base
title:  'Kurmanji UD'
udver: '2'
---

# UD for Kurmanji <span class="flagspan"><img class="flag" src="../../flags/svg/TR.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/IQ-KRD.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We tokenize them as separate tokens (words), except the following cases:
  * The period marking an abbreviation: _Dr._ “doctor” is one token.
  * The apostrophe (or occasionally a hyphen) is not treated as punctuation when it occurs between a number and its morphological suffix, as in _15'ê_, _1932'an_.
* There is a type of verb called 'Lêkerên hevedudanî' which is similar to English phrasal verbs. These verbs typically consist of two or three parts that are separated by spaces when written. However, in passive voice and causative forms, these parts are written adjacent.
* There are several closed classes of contractions that are treated as multi-word tokens and segmented to individual syntactic words.
  The most prominent type is a pronoun fused with the future auxiliary: _ezê = ez + dê_ “I will”.

## Morphology

### Tags

* Kurmanji uses all 17 universal POS categories, including particles ([PART]()).
  Only 2 word types are tagged [PART](): _jî_ “also”, _ma_.
* Kurmanji has four auxiliaries; three of them inflect like verbs (and can act as full verbs depending on context), while _dê_ is an uninflected particle:
  * The copula _bûn_ “to be”.
  * The future tense marker _dê_.
  * The passive auxiliary _hatin_ “to come” (it combines with an infinitive of the lexical verb).
  * The causative auxiliary _dan_ “to give” (it combines with an infinitive of the lexical verb).
* Verbs with modal meaning are not considered auxiliary in Kurmanji.
* There are four main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]().
  * Verbal noun, derived from the infinitive, tagged [NOUN](), currently without a `VerbForm` feature (it could be `Vnoun` in future).

### Nominal Features

* Nominal words ([NOUN](), [PROPN]()) have an inherent [Gender]() feature with one of two values: `Masc` or `Fem`.
  The gender of the referent is reflected by [PRON]() and [DET]().
* The two values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [DET](), [VERB](), [AUX](), marginally [NUM]().
* [Case]() has 4 possible values: `Nom`, `Acc`, `Con`, `Voc`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM]().

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
  For example, _zêde_ “a lot of”, _zêdetir_ “more”, _zêdetirîn_ “most”.
* [Polarity]() has one value, `Neg` (while `Pos` is not marked explicitly), and applies primarily to verbs ([VERB](), [AUX]()), determiners ([DET]()) and adverbs ([ADV]()).

### Verbal Features

* [Aspect]() is `Perf` (perfective) and `Prog` (progressive); it can be also unmarked.
* Finite verbs always have one of four values of [Mood](): `Ind`, `Imp`, `Opt` or `Sub`.
* Verbs in the indicative mood always have one of four values of [Tense](): `Pqp`, `Past`, `Pres` or `Fut`.
* [Evident]() (evidentiality) has only one value, `Nfh` (non-first-hand).

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]() – only `Card`).
* The [Reflex]() feature marks reflexive pronouns _(xwe)_.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
* Objects may be bare noun phrases in accusative (oblique).

### Non-verbal Clauses

* The copula verb _bûn_ (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.

## Treebanks

There is 1 Kurmanji UD treebank:

  * [Kurmanji-MG](../treebanks/kmr_mg/index.html)

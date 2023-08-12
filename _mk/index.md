---
layout: base
title:  'Macedonian UD'
udver: '2'
---

# UD for Macedonian <span class="flagspan"><img class="flag" src="../../flags/svg/MK.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters.
* The numbers are analyzed as one token when used as expression without spaces (20000) or with an internal comma as indicator (10,434).



## Morphology

### Tags

* Macedonian uses 15 universal POS categories. It does not make use of ([SYM]()) and ([X]()).
* Negative particles are analyzed as ([PART]()). Infinitive markers / complementizers _да_ / da (“to, that”) are tagged as subordinating conjunctions ([SCONJ]()).
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is handled as follows:
  * as pronouns – personal and reflexive pronouns, and all entity-pointing other pronouns (demonstrative, interrogative, relative, indefinite, collective, negative).
  * as determiners – the attributive and possessive atributive forms of the demonstrative, interrogative, relative, indefinite, collective, negative pronouns; the long forms of the possessive pronouns.
* Macedonian has just one auxiliary verb ([AUX]()), _сум_ / sum (“to be”), but the lemmas _биде_ / bide, _би_ / bi (“would”) are also possible.
* Modal verbs are analyzed as ([VERB]()).
* The following POS are tagged as ([ADJ]()): adjectives; ordinal numerals; partciples in adjectival usage adjectives derived from family names.
* The following POS are tagged as ([VERB]()): personal and impersonal verbs; participles when used as verbal forms – indicators of evidentiality; and converbs.

### Features

#### Nominal Features

* Nouns [NOUN]() and PROPN]() have an inherent [Gender]() feature with one of the three values: `Masc`, `Fem` or `Neut`.
* [ADJ](), [DET](), [NUM](), [PART]() inflect for `Gender` and `Number`, and agree with nouns.
* Macedonian nominals (nouns, adjectives, ordinal numerals, attributively used participles) make use of the `Definite` feature.
  When the form has a definite suffix, it is marked as `Def`. When no definite suffix is attached, it is marked as `Ind`.

#### Degree and Polarity

* [Degree]() is an inherent feature for adjectives ([ADJ]()) and adverbs ([ADV]()). It has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() has two values, `Pos` and `Neg`, and applies primarily to negative and affirmative particles [PART]().

#### Verbal Features

* Similarly to other Slavic languages, Macedonian verbs have as a lexically classifying feature [Aspect](), either imperfective (`Imp`) or perfective (`Perf`).
* Finite verbs always have one of three values of [Mood](): `Ind`, `Imp` or `Cnd`.
  The conditional mood is only used with the special conditional auxiliaries.
  The l-participle of the main verb, which is needed to form the analytic conditional, is not marked with this feature.
* Verbs in the indicative mood always have one of three values of [Tense](): `Past`, `Imp` and `Pres`.
  `Fut` is not used because this tense is always analytic and formed with a special particle.
* There are two values of the [Voice]() feature: `Act` and `Pass`. Only the passive participle has `Voice=Pass`. All other verb forms have `Voice=Act`.

#### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()), determiners ([DET]()) and adverbs ([ADV]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _мој_ / moj “my”),
  possessive interrogative, indefinite or negative determiners (e.g. _чиј_ / čij “whose”),
  possessive relative determiners (e.g. _чијто_ / čijto “whose”).
  It also marks the clitic personal pronouns `Prs` and reflexive pronouns.
* The [Reflex]() feature marks reflexive pronouns _(себе си, се, си)_ / sebe si, se, si and determiners _(свој)_ / svoj “one's own” and possesive clitic pronoun _си_ / si.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.



## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in a nominative case, without a preposition.
* A finite subordinate clause can serve the role of a subject. In such a case it is labeled as clausal subject, [csubj]().
  There is no infinitive in Macedonian. The inheritant cosnstruction is finite – _да дојдам_ / da dojdam “to come / that I come”.
* Objects can be bare noun phrases in the position of an accusative pronoun.
* Bare accusative, dative and prepositinal dative are considered core arguments (with the preposition _на_ / na).
* All other prepositional objects are considered oblique [obl]().
* Accusative objects of some verbs alternate with finite clausal complements, which are labeled [ccomp]().
* If a verb subcategorizes for modal verbs or verbs of control, the infinitival complement is labeled [xcomp]().
* Adjuncts are usually prepositional phrases, but they can be bare noun phrases as well. They are labeled [obl]().
* In Macedonian there is the phenomenon of clitic doubling. Thus, when the short pronoun appears alone,
  it takes the role of [obj]() or [iobj](). However, when the full-fledged pronoun or phrase is present,
  the short doubling pronoun is marked [expl](). Expletive [expl]() is used also for the reflexive short
  pronouns when they are semantically empty and are part of the lexical verb. For example: _се смеам_ / se smeam “I am laughing”.
* In Macedonian the copula [cop]() is expressed by the auxiliary verb _сум_ / sum “to be” and its synonyms that are semantically vacuous.
* In passive clauses (both reflexive and periphrastic passive), the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
* The auxiliary verb in periphrastic passive is labeled [aux:pass]().

### Other relations:

* In Macedonian the yes-no questions are formed with the question particle _дали_ / dali.
  At the moment this particle is annotated with the [discourse]() relation.

### No used relations:

* `compound`, `dislocated`, `clf`, `list`, `reparandum`, `orphan`, `dep`



## Treebanks

There is 1 Macedonian UD treebank:

  * [Macedonian-MTB](../treebanks/mk_mtb/index.html)

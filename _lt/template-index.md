---
layout: base
title:  'Lithuanian UD'
udver: '2'
---

# UD for Lithuanian <span class="flagspan"><img class="flag" src="../../flags/svg/LT.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We mostly tokenize them as separate tokens (words).
  One exception is foreign hyphenated compounds such as _Pierre-Louis_ “Pierre-Louis” (one token).
  On the other hand, abbreviations such as _mlrd._ “billions” are split to the abbreviated word and the period
  (two tokens).
* A whitespace separating digits in a large number is not treated as a word separator. For example, _1&nbsp;000&nbsp;000_ (“1,000,000” by English
  rules) is one token.
* Certain multi-word expressions such as the indefinite pronouns _kas nors_ “something”, _bet kas_ “anything” are currently
  annotated as words with spaces and occupy a single node. This is a legacy of the ALKSNIS treebank.
  In the future, these nodes should be split and the new nodes connected via the [fixed]() relation.

## Morphology

### Tags

* Lithuanian uses all 17 universal POS categories, including particles ([PART]()).
  Particles include the negative particle _ne_ and the question particle _ir._
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is based on word lists because the traditional grammar does not define determiners.
  In general, words that inflect for gender, to be able to agree with a modified noun, are tagged [DET](), even if they
  act independently in a given sentence.
* Lithuanian has just one auxiliary verb ([AUX]()), _būti_ (“to be”).
  The auxiliary verb is used as the copula with non-verbal predicates.
* Verbs with modal meaning are not considered auxiliary in Lithuanian.
* There are five main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature.
  Converb, gerund and gerundive are labels we use for different types of adverbial participles.
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]().
  * Converb `Conv`, tagged [VERB]() or [AUX]().
  * Gerund `Ger`, tagged [VERB]() or [AUX]().
  * Gerundive `Gdv`, tagged [VERB]() or [AUX]().

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of two values: `Masc` or `Fem`.
  * The following parts of speech inflect for `Gender` and `Animacy` because they must agree with nouns: [ADJ](), [DET](), [NUM](),
    [VERB](), [AUX]().
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite, participles and converbs), marginally [NUM]().
  * The dual number (`Dual`) survives in some dialects of Lithuanian.
* [Case]() has 7 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Voc`, `Loc`, `Ins`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM]().
  It can also occur with participles.

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() has two values, `Pos` and `Neg`, and applies primarily to verbs ([VERB](), [AUX]())
  that can be negated using the bound morpheme _ne-_.

### Verbal Features

* Finite verbs always have one of three values of [Mood](): `Ind`, `Imp` or `Sub`.
* Verbs in the indicative mood always have one of three values of [Tense](): `Past`, `Pres` or `Fut`.
* There are two values of the [Voice]() feature: `Act` and `Pass`.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()), determiners ([DET]()) and adverbs ([ADV]()).
* The [Reflex]() feature marks reflexive pronouns _(savęs)_ and verbs.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
  * A subordinate clause may serve as the subject and is labeled `csubj`.
* In the context of UD, bare noun phrases in accusative, dative, genitive or instrumental can be labeled as objects ([obj]() or [iobj]()),
  while prepositional arguments are always considered oblique. They are labeled [obl:arg](), while adjuncts are labeled [obl]().

### Non-verbal Clauses

* The copula verb _būti_ (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
* Nominal predicates without copula are not uncommon.

### Relations Overview

* The following relation subtypes are used in Lithuanian:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
  * [obl:arg]() for prepositional objects
  * [aux:pass]() for passive auxiliaries
  * [acl:relcl]() for relative adnominal clauses
  * [nummod:gov]() for cardinal numbers that are attached as children of the counted noun but govern its case
  * [det:numgov]() for pronominal quantifiers that are attached as children of the quantified noun but govern its case
  * [advmod:emph]() for adverbs or particles that modify noun phrases and emphasize or negate them
  * [flat:foreign]() for non-first words in quoted foreign phrases
* The following relation types are not used in Lithuanian at all:
  [clf](), [expl]()

## Treebanks

There are [2](../treebanks/lt-comparison.html) Lithuanian UD treebanks:

  * [Lithuanian-ALKSNIS](../treebanks/lt_alksnis/index.html)
  * [Lithuanian-HSE](../treebanks/lt_hse/index.html)

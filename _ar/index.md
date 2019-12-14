---
layout: base
title:  'Arabic UD'
udver: '2'
---

<!-- Inspired by an old proposal for language-specific documentation here: http://universaldependencies.org/v2/minimaldoc.html
     If we agree on a scheme like this, the old proposal should be updated and made visible in the “How to Contribute” section;
     right now it is probably not linked from anywhere. -->

# UD for Arabic <span class="flagspan"><img class="flag" src="../../flags/svg/SA-AL.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words);
  that holds even for hyphenated compounds and for abbreviations.
* Enclitic pronouns, proclitic conjunctions and prepositions are cut off during tokenization and marked as multi-word tokens.
* Definite articles are treated as bound morphemes and they are not cut off during tokenization.

## Morphology

### Tags

* Arabic uses 16 universal POS categories; at present, subordinating and coordinating conjunctions are not distinguished
  (the [CCONJ]() tag is used).
* Some Arabic auxiliaries inflect like verbs, some do not inflect at all.
  The following auxiliaries are found in the data:
  * The copula كَان _(kān)_ and the negative copulas لَيس _(lays)_ and لسنا _(lasnā)._
  * Future tense particle سَ _(sa)_ “will”
  * Modal particle قَد _(qad)_ “may”
  * Modal particle رُبَّمَا _(rubbamā)_ “maybe, perhaps”

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with values `Masc` or `Fem`.
  * Verbs inflect for `Gender` because they must agree with nouns.
* [Number]() has 3 possible values: `Sing`, `Dual` and `Plur`.
* [Case]() has 3 possible values: `Nom`, `Gen`, `Acc`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM]().

### Degree and Polarity

* [Polarity]() has two values, `Pos` and `Neg`, and applies to adjectives ([ADJ]()).

### Verbal Features

* [Aspect]() is inflectional, either imperfective (`Imp`) or perfective (`Perf`).
* [Mood]() has 4 possible values: `Ind`, `Imp`, `Jus`, `Sub`.
* [Voice]() has 2 possible values: `Act`, `Pass`.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()) and determiners ([DET]()).
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).

### Other Features

* There are several language-specific features:
  * [NumForm]()
  * [NumValue]()
  * [AdpType]()
  * [ConjType]()

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
* For the purpose of UD the objects are divided to core objects, labeled [obj]() or [iobj](),
  and oblique objects, labeled [obl:arg]().
  * Bare accusative and genitive objects are considered core.
  * All prepositional objects are considered oblique.
* In passive clauses, the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.

### Non-verbal Clauses

* Besides the auxiliary copulas mentioned above, a personal pronoun can also serve as a copula.

### Relations Overview

* The following relation subtypes are used in Arabic:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [obl:arg]() for prepositional objects
  * [nmod:poss]() for possessive/genitive modifiers
  * [advmod:emph]() for adverbs or particles that modify noun phrases and emphasize or negate them
  * [flat:name]() for non-first personal names
  * [flat:foreign]() for non-first words in quoted foreign phrases

## Treebanks

There are [three](../treebanks/ar-comparison.html) Arabic UD treebanks:

  * [Arabic-PADT](../treebanks/ar_padt/index.html)
  * [Arabic-PUD](../treebanks/ar_pud/index.html)
  * [Arabic-NYUAD](../treebanks/ar_nyuad/index.html)

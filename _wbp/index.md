---
layout: base
title:  'Warlpiri UD'
udver: '2'
---

# UD for Warlpiri <span class="flagspan"><img class="flag" src="../../flags/svg/AU-ABORIGINAL.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words).

## Morphology

### Tags

* The small data sample that is currently available in UD contains only a subset of the universal POS categories.
  It does not necessarily mean that the other categories do not exist in the language.
* The only auxiliary verb is _ka_. It indicates the tense and sometimes it has a suffix that cross-references a core argument's person and number.
* Finite verbs are morphologically distinguished from infinitives.

### Nominal Features

* Nominal categories ([NOUN](), [PROPN](), [PRON]()) inflect for [Number](). Besides singular (`Sing`) and plural (`Plur`),
  there is also dual (`Dual`) and paucal (`Pauc`).
* [Case]() has 3 syntactic and a number of possible semantic values.
  The syntactic cases are ergative (`Erg`), dative (`Dat`), and absolutive (`Abs`).
  Nine semantic cases are currently attested in the treebank:
  locative (`Loc`), allative (`All`), elative (`Ela`), perlative (`Per`), comitative (`Com`),
  instrumental (`Ins`), causative (`Cau`), considerative (`Cns`), genitive/possessive (`Gen`).

### Verbal Features

* [Tense]() has three values: `Past`, `Pres`, `Fut`. It can be marked on the main verb or on the auxiliary _ka_.

### Pronouns, Determiners, Quantifiers

* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
  * Verbs can also cross-reference arguments other than the subject.
    In order to distinguish features of different cross-references arguments, [layered features](../../u/overview/feat-layers.html)
    have been introduced:
    [Person[obj]]() and [Number[obj]]() are features of the absolutive object.
    [Person[dat]]() and [Person[sdat]]() refer to a dative argument.

### Other Features

* Besides the layered features listed above, there is one other language-specific feature:
  * [Clitic]()

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the ergative case (for two-argument predicates)
  or in the absolutive (for intransitive predicates).
* The object of a transitive (two-argument) predicate is in the absolutive case.

### Relations Overview

* The following relation subtypes are used in Warlpiri:
  * [nmod:poss]() for genitive/possessive modifiers of nominals
  * [obl:tmod]() for nominals acting as temporal adjuncts in clauses

There is one Warlpiri UD treebank:

  * [Warlpiri-UFAL](../treebanks/wbp_ufal/index.html)

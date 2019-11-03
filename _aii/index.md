---
layout: base
title:  'Assyrian UD'
udver: '2'
---

# UD for Assyrian <span class="flagspan"><img class="flag" src="../../flags/svg/IQ-AII.svg" /></span>


## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation.
* Punctuation marks are attached to the neighboring word. We always tokenize them as separate tokens.
* Coordinating conjunction and prepositions are separated from the words that follows them in a sentence.
* Multiword tokens are not used in Assyrian.


## Morphology

### Tags

* The tags `NUM`, `INTJ`, `SYM`, and `X` are not used.
* In this Assyrian treebank, 13 universal tags have been used.
* Certain words like “ܒܜ , ܩܡ ,ܟܝ , ܚܘܫ , ܫܘܩ” are tagged as [PART]() and have a dependency relation as [aux](). Together with the following [VERB](), these words change the verb tense.

### Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with values `Masc` or `Fem`.
  * The following parts of speech inflect for `Gender` because they must agree with nouns: [ADJ](), [DET](),
    [VERB](), [AUX]().
* [Number]() has 2 possible values: Sing and Plur.
* Verbs inflect for [Gender](), [Number](), [Person](), [Tense]() and [Mood](). There are two types of verb forms ([VerbForm]()): the finite verb (`Fin`) and the participle (`Part`).
  * [Voice]() is marked only for passive forms; we do not use `Voice=Act`.
* [PronType]() is used with pronouns ([PRON]()) and determiners ([DET]()).
* The [Poss]() feature marks possessive personal pronouns.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).


## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* <!-- ??? -->

### Non-verbal Clauses

* The copula verb ܗܵܘܹܐ (be) is used in <!-- ??? equational, attributional, locative, possessive and benefactory nonverbal clauses. -->

### Relations Overview

* The following relation subtypes are used in Assyrian:
  * [acl:relcl]() for relative clauses
  * [aux:poss]()
  * [nmod:poss]()
* The following relation types are not used in Assyrian at all:
  [expl](), [dislocated](), [vocative](), [appos](), [nummod](), [clf](), [fixed](), [flat](), [list](), [orphan](), [goeswith](), [reparandum](), [dep]()


## Treebanks

There is only one Assyrian UD treebank at present:

  * [Assyrian-AS](../treebanks/aii_as/index.html)

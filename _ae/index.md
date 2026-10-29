---
layout: base
title:  'Avestan UD'
udver: '2'
---

# UD for Avestan <span class="flagspan"><img class="flag" src="../../flags/svg/IR-KAVIANI.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace and punctuation (a dot at the end of each word). Exceptions:
 - The conjunction '-ca' is a clitic attached to the previous word.
 - Sometimes there are also dots in the middle of a word.


--

## Morphology

### Tags

* Avestan does not use the AUX, DET, PUNCT, X and SYM UPOS tags. Currently interjections and numerals are not present in the treebank yet, as this is a small treebank.

---

### Features

* Nouns ([NOUN]()) and proper names ([PROPN]()) inflect for [Case]() and [Number](). They also have a particular [Gender]().
* Adjectives ([ADJ]()) inflect for [Case](),  [Gender]() and [Number](). In addition, many adjectives inflect for [Degree]() (positive, comparative, superlative).
* Adverbs inflect only for [Degree]().
* Verbs can be finite or infinite (reflected in [VerbForm]()), as well as participles and verbal nouns. Finite forms inflect for [Tense](), [Mood](), [Aspect](), [Person](), [Number]() and [Voice](). Infinitives inflect for [Tense](), [Aspect]() and [Voice](). Participles inflect for [Tense](), [Aspect](), [Voice](), [Case](),  [Gender]() and [Number](). Verbal nouns inflect for [Case](),  [Gender]() and [Number]().
* The type of pronoun is reflected in [PronType](). Personal and possessive pronouns are inflected for [Case](),  [Gender]() and [Number](), as well as marked by [Person](). Demonstrative, interogative, relative and indefinite pronouns are inflected for [Case](),  [Gender]() and [Number]().
Articles are definite or indefinite ([Definite]()). Personal and reflexive pronouns are inflected for [Number](), [Case]() (nominative or accusative/oblique) and [Person](); possessive pronouns for [Number]() and [Person]().

## Syntax

* Subjects have the following characteristics:
  * Case marking: Subjects occur in nominative case without adpositions.
* Objects have the following characteristics:
  * Case marking: Objects occur in the accusative case without adpositions.
* Indirect objects have the following characteristics:
  * Case marking: Objects occur in the dative case without adpositions.


### Relations Overview

* The following relation subtypes can be used in Avestan:
  * [acl:relcl]() for adnominal relative clause modifiers.

## Treebanks

There is one Avestan UD treebank:

  * [Old Avestan](../treebanks/ae_old/index.html)

---


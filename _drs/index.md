---
layout: base
title:  'Gedeo UD'
udver: '2'
---

# UD for Gedeo <span class="flagspan"><img class="flag" src="../../flags/svg/ET.svg" /></span>

## Tokenization and Word Segmentation

* The underlying text is provided in a Latin-based writing system (not in the Ethiopic script).
* In general, surface tokens (orthographic words) are separated by whitespace.

## Morphology

Gedeo is morphologically a complex language. It is mostly a suffixing language.
Nominals in Gedeo inflect for number, gender, and case.
They inflect for nine cases and also mark singulative which give rise for the notion of
definiteness or specificity. The verbs inflect for person number, tense/aspect, and mood. A fully
inflected declarative verb may inflect for perfective, perfect and imperfective forms. The latter
include the present and past progressive, as well as future forms. The number of underived
adjectives in Gedeo is few. Like nouns adjectives distinguish case, gender and number. They
share grammatical features with nouns.

### Tags

* Gedeo currently uses 13 of the 17 universal POS categories, including particles ([PART]()).
  The [AUX](), [SCONJ](), [SYM](), [X]() categories do not occur in the present data.

### Nominal Features

* The two values of the [Number]() feature are `Sing` and `Plur`.
* [Case](): `Nom`, `Abs`, `Gen`, `Dat`.

### Verbal Features

* There is no [Tense]() feature but there is [Aspect]() with two values: `Imp` and `Perf`.

### Personal Pronouns

<pre>
ani	PRON	Number=Sing|Person=1|PronType=Prs		I
ati	PRON	Gender=Masc|Number=Sing|Person=2|PronType=Prs	you
isi	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	he
no?o	PRON	Number=Plur|Person=1|PronType=Prs		we
koo	PRON	Number=Plur|Person=2|PronType=Prs		you
insa?ne	PRON	Number=Plur|Person=3|PronType=Prs		they
</pre>

## Syntax

The constituent order is SOV/OV. A simple sentence is formed of a single NP subject and a
predicate VP. A noun phrase consists minimally of a head nominal: a common noun, a pronoun
or a proper name. Modifiers are optional constituents of an NP, which can be any of the
following: demonstratives, numerals, quantifiers, and nominal attributives. A simple verb phrase
(VP) is formed of a simple verb which can be expanded by adding modifying elements such as
adverbs and other modifiers. Simple sentences are often categorized into declarative,
interrogative, and imperative. A declarative sentence can be classified as eventive/stative,
copular, possessive, and existential.

## Treebanks

There is one Gedeo UD treebank:

  * [Gedeo-GDT](../treebanks/drs_gdt/index.html)

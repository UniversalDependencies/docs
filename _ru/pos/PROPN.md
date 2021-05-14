---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
---

### Definition

A proper noun is a noun that is the name
of a specific individual, place, or object.
Russian proper nouns are always written starting with an uppercase letter.

Single-word named entities should be tagged `PROPN` though they originate
from a common noun _(Грязь)&nbsp;_(village) or an adjective _(Белая)&nbsp;_(river).
Even if they were originally adjectives and inflect according to adjectival
paradigms, they behave syntactically as nouns. For instance, _Белая&nbsp;_
(a river in Bashkortostan) is originally feminine form of the
adjective _белый&nbsp;_ “warm” but as a geographical name, it is a noun.
It denotes a concrete location (rather than a property of somebody/something)
and its feminine gender is fixed (while adjectives have forms in all three
genders).

Note that adjectives derived from geographical names _(русский, английский&nbsp;_ “Russian, English”)
are written in lowercase and are not tagged `PROPN`.

Personal names are typically treated as a sequence of proper nouns
(one or more given names and one or more surnames).
If the name contains prepositions, conjunctions or articles (foreign names), these are tagged as `ADP`, `CCONJ` and `DET`,
respectively.

Russian (and other Slavic) multi-word named entities have internal syntactic
structure, which is preserved in the annotation. The headword is always noun
and there may be other nouns involved. They will be tagged either `PROPN` or
`NOUN` and possible ambiguities must be resolved individually.
Modifying adjectives are never tagged `PROPN`. Even if an adjective is the
first word of a multi-word name, and thus it starts with an uppercase letter,
it is still tagged `ADJ`.
Similarly, function words in named entities retain their normal tags.
These rules are less strict for foreign named entities where the original
part of speech is hidden for a Russian speaker.

### Examples

- _Белая_.`ADJ` _река_.`NOUN` “White River”. Even though the two words
  together are a name of a particular river, _река_ is a common noun and is
  tagged as such.
- _Организация_.`NOUN` _Объединенных_.`ADJ` _Наций_.`NOUN` “United Nations Organization”
  consists of three words, none of which is proper noun. However, the acronym
  _<b>ООН</b>&nbsp;_ “UNO” is a single-token name and is tagged `PROPN`.

<!-- Interlanguage links updated Pá kvě 14 11:08:24 CEST 2021 -->

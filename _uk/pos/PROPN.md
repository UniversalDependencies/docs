---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
---

### Definition

A proper noun is a noun that is the name of a specific individual, place, or object. Ukrainian proper nouns are always written starting with an uppercase letter. Note that names of days of week, names of months, names of languages, and adjectives derived from geographical names are not written capitalized (unlike in English) and are not considered proper nouns.

Single-word named entities should be tagged `PROPN` even if they originate from a common noun _(Заєць, Бук)&nbsp;_ or an adjective _(Довгополий, Масна).&nbsp;_ Even if they were originally adjectives and inflect according to adjectival paradigms, they behave syntactically as nouns. For instance, _Масна&nbsp;_ (the feminine version of surname _Масний&nbsp;_) is originally feminine form of the adjective _масний&nbsp;_ “fatty” but as an anthroponimic name, it is a noun. It denotes a concrete person (rather than a property of somebody/something) and its gender is limited to feminine and masculine (while adjectives have forms in all three genders).

Personal names are typically treated as a sequence of proper nouns (one or more given names and one or more surnames). If the name contains prepositions, conjunctions or particles (foreign names), these are tagged as `ADP`, `CCONJ` and `DET`, respectively.

Ukrainian (and other Slavic) multi-word named entities have internal syntactic structure, which is preserved in the annotation. The headword is always noun and there may be other nouns involved. They will be tagged either `PROPN` or `NOUN` and possible ambiguities must be resolved individually. Modifying adjectives are never tagged `PROPN`. Even if an adjective is the first word of a multi-word name, and thus it starts with an uppercase letter, it is still tagged `ADJ`. Similarly, function words in named entities retain their normal tags. These rules are less strict for foreign named entities where the original part of speech is hidden for a Ukrainian speaker.

### Examples

- _<b>Франкфурт</b>_`PROPN` _на_`ADP` _<b>Майні</b>_`PROPN` is a city. _Франкфурт&nbsp;_ is the head and the _на Майні&nbsp;_ part refers to the river flowing through the city, to distinguish it from other Frankfurts.
- _Організація_`NOUN` _об'єднаних_`ADJ` _націй_`NOUN` “United Nations Organization” consists of three words, none of which is proper noun. However, the acronym _<b>ООН</b>&nbsp;_ “UN” is a single-token name and is tagged `PROPN`.
<!-- Interlanguage links updated St lis 3 20:58:13 CET 2021 -->

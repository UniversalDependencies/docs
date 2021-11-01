---
layout: postag
title: 'NOUN'
shortdef: 'noun'
---

### Definition

Nouns are a part of speech typically denoting a person, place, thing,
animal or idea.

The `NOUN` tag is intended for common nouns only. See [PROPN]() for
proper nouns and [PRON]() for pronouns.

Tatar nouns inflect for [tt-feat/Number](), [possessor](tt-feat/Person-psor) and [tt-feat/Case]().

<!-- We also mark the non-root [inflectional groups](../overview/tokenization.html) as `NOUN` in complex derivation involving some suffixes, and subordinate clauses that function as a noun phrase.
For details, see the section on subordination in [specific constructions](tr-overview/specific-syntax). -->

All adjectives and some of the adverbs may function as a noun without additional derivation, in this cases, we keep the POS tag of the original word, but assign nominal features to the word.
(**TODO:** this needs more discussion)

Verbal nouns with the suffix _-у_ / _-ү_ are tagged as `VERB`, but are specified as `VerbForm=Vnoun` in the `FEAT` column.

### Examples

- _кыз_ "girl"
- _песи_ "cat"
- _агач_ "tree"
- _яшьлек_ "youth"
- _кешелеклелек_ "humanity"
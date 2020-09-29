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

Turkish nouns inflect for [tr-feat/Number](), [possessor](tr-feat/Person-psor) and [tr-feat/Case]().

We also mark the non-root [inflectional groups](../overview/tokenization.html) as `NOUN` in complex derivation involving some suffixes, and subordinate clauses that function as a noun phrase.
For details, see the section on subordination in [specific constructions](tr-overview/specific-syntax).

All adjectives and some of the adverbs may function as a noun without additional derivation, in this cases, we keep the POS tag of the original word, but assign nominal features to the word.
(**TODO:** this needs more discussion)

### Examples

- _kız_ "girl"
- _kedi_ "cat"
- _ağaç_ "tree"
<!-- Interlanguage links updated Út zář 29 18:40:46 CEST 2020 -->

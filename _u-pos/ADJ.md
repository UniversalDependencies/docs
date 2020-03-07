---
layout: postag
title: 'ADJ'
shortdef: 'adjective'
udver: '2'
---

### Definition

Adjectives are words that typically modify nouns and specify their
properties or attributes:

_The **oldest French** bridge_

They may also function as predicates, as in:

_The car is **green**._

The `ADJ` tag is intended for ordinary adjectives only. See [DET]()
for determiners and [NUM]() for (cardinal) numbers. `ADJ` is used for “proper adjectives”
such as *European*.

**Numbers vs. Adjectives:** In general, cardinal numbers receive the
part of speech [NUM](), while _ordinal numbers_ (more
precisely _adjectival_ ordinal numerals) receive the tag `ADJ`.

There are words that may traditionally be called numerals in
some languages (e.g., Czech) but which are treated as adjectives in our
universal tagging scheme. In particular, the _adjectival_ ordinal numerals
(note: Czech also has adverbial ones) behave both morphologically and syntactically as
adjectives and are tagged `ADJ`.

**Nouns vs. Adjectives:** A noun modifying another noun to form a compound noun is given the tag [NOUN]() not `ADJ`.

**Participles:** Participles are word forms that may share properties and
usage of any of adjectives, nouns, and verbs. Depending on the language and context, they
may be classified as any of `ADJ`, [NOUN]() or [VERB]().

**Adjectival modifiers of adjectives:** In general, an `ADJ` is modified by an [ADV]() (_**very** strong_).
However, sometimes a word modifying an `ADJ` is still regarded as an `ADJ`. These cases include: (i) ordinal numeral modifiers of a superlative adjective (_the **third** oldest bridge_) and (ii) when a pair of adjectives form a compound adjectival modifier (_an **African American** mayor_).


### Examples

- _big_
- _old_
- _green_
- _African_
- _incomprehensible_
- _first, second, third_

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is an adjective?](https://glossary.sil.org/term/adjective)
- [Wikipedia](http://en.wikipedia.org/wiki/Adjective)

---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
udver: '2'
---

### Definition

A proper noun is a noun (or nominal content word) that is the name (or
part of the name) of a specific individual, place, or object. Armenian proper nouns are always written starting with an uppercase letter. 

Single-word named entities should be tagged `PROPN` though they originate from a common noun (Աշտարական) (town) or an adjective (Սիզավետ) (village). Even if they were originally adjectives and dont inflect, they behave syntactically as nouns. For instance, Белая  (a river in Bashkortostan) is originally feminine form of the adjective белый  “warm” but as a geographical name, it is a noun. It denotes a concrete location (rather than a property of somebody/something) and its feminine gender is fixed (while adjectives have forms in all three genders).

Note that `PROPN` is only used for the subclass of nouns that are used
as names and that often exhibit special syntactic properties (such as
occurring without an article in the singular in English). When other
phrases or sentences are used as names, the component words retain
their original tags. For example, in _Cat on a Hot Tin Roof_, _Cat_ is
[NOUN](), _on_ is [ADP](), _a_ is [DET](), etc.

A fine point is that it is not uncommon to regard words that are
etymologically adjectives or participles as proper nouns when they
appear as part of a multiword name that overall functions like a
proper noun, for example in _the Yellow Pages_, _United Airlines_ or
_Thrall Manufacturing Company_.  This is certainly the practice for
the English Penn Treebank tag set.

Note that names of languages (հայերեն, անգլերեն) and adjectives derived from geographical names (հայկական, հայոց, անգլիական, “Armenian, English”) are written in lowercase and are not tagged `PROPN`.

Acronyms of proper nouns, such as _UN_ and _NATO_, should be tagged `PROPN`.
Even if they contain numbers (as in various product names), they are tagged `PROPN` and not [SYM]():
_130XE_, _DC10_, _DC-10_.
However, if the token consists entirely of digits (like _7_ in _Windows 7_), it is tagged [NUM]().

### Examples

- _Mary_, _John_
- _London_
- _NATO_, _HBO_

---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
---

### Definition

A proper noun is a noun (or nominal content word) that is the name (or
part of the name) of a specific individual, place, or object.

Note that `PROPN` is only used for the subclass of nouns that are used
as names and that often exhibit special syntactic properties. When other
phrases or sentences are used as names, the component words retain
their original tags. For example, in _Cat on a Hot Tin Roof_, _Cat_ is
[NOUN](), _on_ is [ADP](), _a_ is [DET](), etc. 
However, for now, the Portuguese corpora are not very consistently annotated, as many proper nouns (that are  mwes)
are not split.


Acronyms of proper nouns, such as _EUA_ and _NATO_, should be tagged `PROPN`.
Even if they contain numbers (as in various product names), they are tagged `PROPN` and not [SYM]():
_130XE_, _DC10_, _DC-10_.
However, if the token consists entirely of digits (like _7_ in _Windows 7_), it is tagged [NUM]().

### Examples

- _Maria_, _João_
- _Londres, Goiânia_
- _ONG_, _EUA_
<!-- Interlanguage links updated Út zář 29 20:31:30 CEST 2020 -->

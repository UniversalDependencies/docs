---
layout: postag
title: 'DET'
shortdef: 'determiner'
udver: '2'
---

### Definition

Determiners (or pro-adjectives) are words that modify [nouns](NOUN) or noun phrases and
express the reference of the noun phrase in context. That is, a
determiner may indicate whether the noun is referring to a definite or
indefinite element of a class, to a closer or more distant element, to
an element belonging to a specified person or thing, to a particular
number or quantity, etc.

An important point to note is that the traditional grammar of Czech does not
define determiners as a separate word class. Czech does not have articles.
Most determiners are traditionally called pronouns; that is, an UD-conformant
annotation of Czech must distinguish between substantive pronouns (UD tag [PRON]())
and attributive pronouns (UD tag `DET`).

Also note that the `DET` tag includes (pronominal) _quantifiers_ (words
like _mnoho, málo&nbsp;_ “many, few”), which the traditional grammar classifies
as a special subclass of numerals. However,
_cardinal numerals_ in the narrow sense _(jeden, pět, sto)_ are not
tagged `DET` even though some authors would include them in
quantifiers. Cardinal numbers have their own tag [NUM]().

### Conversion from the Prague Dependency Treebank

Since the PDT tagset (like all other Czech tagsets) does not distinguish
substantive and attributive pronouns, morphological tags alone are not enough
to find the correct universal POS tag.
Morphological rules could help, as the inflection patterns of some pronouns
bear similarities to adjectival inflection (especially the ability to inflect for gender).
Unlike in UD v1, we no longer use the dependency tree to distinguish between determiners and pronouns.
Instead, we use a pre-defined list of lemmas that are `DET` if their PDT tag indicates pronoun.
See also [here](../../sla/pos/PRON.html) for a Slavic-wide discussion of the distinction between determiners and pronouns.

### Examples

- possessive determiners: _můj, tvůj, jeho, její, náš, váš, jejich&nbsp;_ “my, your, his, her, our, your, their”
- reflexive possessive determiner: _svůj&nbsp;_ “one's own”
- demonstrative determiners: _tohle&nbsp;_ as in _<b>Tohle</b> auto jsem viděl včera.&nbsp;_ “I saw <b>this</b> car yesterday.”
- interrogative determiners: _který&nbsp;_ as in _<b>Které</b> auto se ti líbí?&nbsp;_ “<b>Which</b> car do you like?”
- relative determiners: _který&nbsp;_ as in _Zajímá mě, <b>které</b> auto se ti líbí.&nbsp;_ “I wonder <b>which</b> car you like.”
- relative possessive determiner: _jehož&nbsp;_ “whose”
- indefinite determiners: _nějaký, některý_
- total determiners: _každý, všechen_
- negative determiners: _žádný&nbsp;_ as in _Nemáme <b>žádná</b> auta.&nbsp;_ “We have <b>no</b> cars available.”

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is a determiner?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsADeterminer.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Determiner)
<!-- Interlanguage links updated Út zář 29 20:42:54 CEST 2020 -->

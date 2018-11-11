---
layout: postag
title: 'DET'
shortdef: 'determiner'
udver: '2'
---

### Definition

Determiners are words that modify [nouns](NOUN) or noun phrases and
express the reference of the noun phrase in context. That is, a
determiner may indicate whether the noun is referring to a definite or
indefinite element of a class, to a closer or more distant element, to
an element belonging to a specified person or thing, to a particular
number or quantity, etc.

Determiners under this definition include both _articles_
and _pro-adjectives (pronominal adjectives)_, which is a slightly broader
sense than what is usually regarded as determiners in English.
In particular, there is no general requirement that a nominal can be
modified by at most one determiner, although some languages may show
a strong tendency towards such a constraint.
(For example, an English nominal usually allows only one `DET` modifier,
but there are occasional cases of _addeterminers_, which appear outside
the usual determiner, such as [en] _all_ in _<b>all</b> the children survived_.
In such cases, both _all_ and _the_ are given the POS `DET`.)

Note that the `DET` tag includes (pronominal) _quantifiers_ (words
like _many, few, several),_ which are included among determiners in
some languages but may belong to numerals in others. However,
_cardinal numerals_ in the narrow sense _(one, five, hundred)_ are not
tagged `DET` even though some authors would include them in
quantifiers. Cardinal numbers have their own tag [NUM]().

Also note that the notion of determiners is unknown in traditional grammar of
some languages (e.g. Czech); words equivalent to English determiners
may be traditionally classified as [pronouns](PRON) and/or
[numerals](NUM) in these languages. In order to annotate the same
thing the same way across languages, the words satisfying our definition
of determiners should be tagged `DET` in these languages as well.

It is not always crystal clear where pronouns end and determiners start.
Unlike in UD v1 it is no longer required that they are told apart solely on
the base of the context. The words can be pre-classified in the dictionary
as either `PRON` or `DET`, based on their _typical_ syntactic distribution
(and morphology, when applicable).
Language-specific documentation should list all determiners (it is a closed class)
and point out ambiguities, if any.

See also [general principles on pronominal words](../overview/morphology.html#pronominal-words)
for more tips on how to define determiners.
In particular:

* Articles _(the, a, an)_ are always tagged `DET`; their [PronType](/u/feat/PronType.html) is `Art`.
* Pronominal numerals (quantifiers) are tagged `DET`; besides `PronType`, they also use the [NumType](/u/feat/NumType.html) feature.
* Words that behave similar to adjectives are `DET`. Similar behavior means:
  * They are more likely to be used attributively (modifying a noun phrase) than substantively (replacing a noun phrase). They may occur alone, though.
    If they do, it is either because of ellipsis, or because the hypothetical modified noun is something unspecified and general, as in _All [visitors] must pay._
  * Their inflection (if applicable) is similar to that of adjectives, and distinct from nouns.
    They agree with the nouns they modify.
    Especially the ability to inflect for gender is typical for adjectives and determiners.
    (Gender of nouns is determined lexically and determiners may be required by the grammar to agree with their nouns in gender; therefore they need to inflect for gender.)
* Possessives vary across languages. In some languages the above tests put them in the `DET` category.
  In others, they are more like a normal personal pronoun in a specific case (often the genitive), or a personal pronoun with an adposition; they are tagged `PRON`.

### Examples

- articles (a closed class indicating definiteness, specificity or givenness): _a, an, the_
- possessive determiners (which modify a nominal): [cs] _můj, tvůj, jeho, její, náš, váš, jejich_; [en] _my, your_
- demonstrative determiners: _this_ as in _I saw <b>this</b> car yesterday._
- interrogative determiners: _which_ as in _"<b>Which</b> car do you like?"_
- relative determiners: _which_ as in _"I wonder <b>which</b> car you like."_
- quantity determiners (quantifiers): indefinite _any_, universal: _all_, and negative _no_ as in _"We have <b>no</b> cars available."_

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is a determiner?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsADeterminer.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Determiner)

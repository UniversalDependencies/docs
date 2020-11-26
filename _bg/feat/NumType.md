---
layout: feature
title: 'NumType'
shortdef: 'numeral type'
udver: '2'
---

NumType

Some languages (especially Slavic) have a complex system of
[numerals](u-pos/NUM). For example, in the school grammar of Czech,
the main part of speech is "numeral", it includes almost everything
where counting is involved and there are various subtypes. It also
includes interrogative, relative, indefinite and demonstrative words
referring to numbers (words like _kolik / how many, tolik / so many,
několik / some, a few),_ so at the same time we may have a non-empty
value of [PronType]().  (In English, these words are called
quantifiers and they are considered a subgroup of
[determiners](u-pos/DET).)

In this respect Bulgarian behaves like Czech language.

From the syntactic point of view, some numtypes behave like adjectives
and some behave like adverbs. We tag them [u-pos/ADJ]() and
[u-pos/ADV]() respectively. Thus the `NumType` feature applies to
several different parts of speech:

* [u-pos/NUM](): cardinal numerals
* [u-pos/DET](): quantifiers
* [u-pos/ADJ](): definite adjectival, e.g. ordinal numerals
* [u-pos/ADV](): adverbial (e.g. ordinal and multiplicative) numerals, both definite and pronominal

### <a name="Card">`Card`</a>: cardinal number or corresponding interrogative / relative / indefinite / demonstrative word

Note that in some Indo-European languages there is a fuzzy borderline
between numerals and nouns for _thousand, million_ and _billion._

#### Examples

* [bg] едно, две, три / _edno, dve, tri_ "one, two, three"; колко / _kolko_ "how many";
  няколко / _nyakolko_ "some"; толкова / _tolkova_ "so many"; много / _mnogo_ "many"; малко / _malko_ "few"

### <a name="Ord">`Ord`</a>: ordinal number or corresponding interrogative / relative / indefinite / demonstrative word

This is a subtype of adjective.

#### Examples

* [bg] adjectival: първи / _parvi_ "first"; втори / _vtori_ "second", трети / _treti_ "third", etc.

### <a name="Mult">`Mult`</a>: multiplicative numeral or corresponding interrogative / relative / indefinite / demonstrative word

This is subtype of adverb.

#### Examples

* [bg] веднъж / _vednazh_ "once"; дваж / _dvazh_ "twice"

### <a name="Frac">`Frac`</a>: fraction

This is a subtype of cardinal numbers, occasionally distinguished in
corpora. It may denote a fraction or just the denominator of the
fraction. In Bulgarian the numerator is cardinal numeral and denominator is ordinal numeral.

#### Examples

* [bg] две трети / _dve treti_ "two thirds"
<!-- Interlanguage links updated Čt lis 12 09:43:04 CET 2020 -->

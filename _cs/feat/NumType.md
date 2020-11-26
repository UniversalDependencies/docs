---
layout: feature
title: 'NumType'
shortdef: 'numeral type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Card">Card</a></td>
  <td><a href="#Frac">Frac</a></td>
  <td><a href="#Mult">Mult</a></td>
  <td><a href="#Ord">Ord</a></td>
  <td><a href="#Sets">Sets</a></td>
</tr>
</table>

Czech has a complex system of
[numerals](cs-pos/NUM). For example, in the school grammar of Czech,
the main part of speech is “numeral”, it includes almost everything
where counting is involved and there are various subtypes. It also
includes interrogative, relative, indefinite and demonstrative quantifiers
(words like _kolik&nbsp;_ “how many”, _tolik&nbsp;_ “so many”,
_několik&nbsp;_ “several”), so at the same time we may have a non-empty
value of [PronType]().

From the syntactic point of view, some numtypes behave like adjectives
and some behave like adverbs. We tag them [cs-pos/ADJ]() and
[cs-pos/ADV]() respectively. Thus the `NumType` feature applies to
several different parts of speech:

* [cs-pos/NUM](): cardinal numerals
* [cs-pos/DET](): quantifiers
* [cs-pos/ADJ](): adjectival ordinal and some generic numerals
* [cs-pos/ADV](): adverbial (e.g. ordinal and multiplicative) numerals

### <a name="Card">`Card`</a>: cardinal number or corresponding interrogative / relative / indefinite / demonstrative word

#### Examples

* _jeden, dva, tři&nbsp;_ “one, two, three”
* _kolik&nbsp;_ “how many”
* _několik&nbsp;_ “several”, _mnoho&nbsp;_ “many”, _málo&nbsp;_ “few”
* _tolik&nbsp;_ “so many”
* _<b>čtvero, patero, desatero</b>&nbsp;_ (specific forms of four,
  five, ten; they are morphologically, syntactically and stylistically
  distinct from the default forms _čtyři, pět, deset_)

### <a name="Ord">`Ord`</a>: ordinal number or corresponding interrogative / relative / indefinite / demonstrative word

This is a subtype of adjective or adverb.

#### Examples

Adjectival:

* _první&nbsp;_ “first”; _druhý&nbsp;_ “second”, _třetí&nbsp;_ “third”
* _kolikátý&nbsp;_ lit. _how manieth&nbsp;_ “which rank”
* _několikátý&nbsp;_ “some rank”
* _tolikátý&nbsp;_ “this/that rank”

Adverbial:

* _poprvé&nbsp;_ “for the first time”; _podruhé&nbsp;_ “for the second time”; _potřetí&nbsp;_ “for the third time”
* _pokolikáté&nbsp;_ “for which time”
* _poněkolikáté&nbsp;_ “for x-th time”
* _potolikáté&nbsp;_ “it has been so many times”

### <a name="Mult">`Mult`</a>: multiplicative numeral or corresponding interrogative / relative / indefinite / demonstrative word

This is subtype of adjective or adverb.

#### Examples

* _<b>dvojí, trojí, čtverý</b>&nbsp;_ (twofold, threefold, fourfold; these are
  morphologically and syntactically adjectives)
* _jednou&nbsp;_ “once”; _dvakrát&nbsp;_ “twice”; _třikrát&nbsp;_ “three times”
* _kolikrát&nbsp;_ “how many times”
* _několikrát&nbsp;_ “several times”
* _tolikrát&nbsp;_ “so many times”

### <a name="Frac">`Frac`</a>: fraction

This is a subtype of cardinal numbers.
It may denote a fraction or just the denominator of the
fraction.

#### Examples

* _půl / polovina&nbsp;_ “half”; _třetina&nbsp;_ “one third”; _čtvrt / čtvrtina&nbsp;_ “quarter”

### <a name="Sets">`Sets`</a>: number of sets of things; collective numeral

Morphologically distinct class of numerals used to count sets of
things, or nouns that are pluralia tantum.

#### Examples

* _<b>dvoje</b> / <b>troje</b> boty&nbsp;_ “<b>two</b> / <b>three</b> [pairs of] shoes”;
  as opposed to normal cardinal numbers: _dvě / tři boty&nbsp;_ “two / three shoes”
<!-- Interlanguage links updated Čt lis 12 09:43:04 CET 2020 -->

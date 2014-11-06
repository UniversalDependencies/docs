---
layout: feature
title: 'NumType'
shortdef: 'numeral type'
---

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

From the syntactic point of view, some numtypes behave like adjectives
and some behave like adverbs. We tag them [u-pos/ADJ]() and
[u-pos/ADV]() respectively. Thus the `NumType` feature applies to
several different parts of speech:

* [u-pos/NUM](): cardinal numerals
* [u-pos/DET](): quantifiers
* [u-pos/ADJ](): definite adjectival, e.g. ordinal numerals
* [u-pos/ADV](): adverbial (e.g. ordinal and multiplicative) numerals, both definite and pronominal

### `Card`: cardinal number or corresponding interrogative / relative / indefinite / demonstrative word

Note that in some Indo-European languages there is a fuzzy borderline
between numerals and nouns for _thousand, million_ and _billion._

#### Examples

* [en] _one, two, three_ 
* [cs] _jeden, dva, tři_ "one, two, three"; _kolik_ "how many";
  _několik_ "some"; _tolik_ "so many"; _mnoho_ "many"; _málo_ "few"

### `Ord`: ordinal number or corresponding interrogative / relative / indefinite / demonstrative word

This is a subtype of adjective or (in some languages) of adverb.

#### Examples

* [en] _first, second, third;_ 
* [cs] adjectival: _první_ "first"; _druhý_ "second", _třetí_ "third";
  _kolikátý_ lit. _how manieth_ "which rank"; _několikátý_ "some
  rank"; _tolikátý_ "this/that rank"
* [cs] adverbial: _poprvé_ "for the first time"; _podruhé_ "for the
  second time"; _potřetí_ "for the third time"; _pokolikáté_ "for
  which time", _poněkolikáté_ "for x-th time", _potolikáté_

### `Mult`: multiplicative numeral or corresponding interrogative / relative / indefinite / demonstrative word

This is subtype of adverb.

#### Examples

* [cs] _jednou_ "once"; _dvakrát_ "twice"; _třikrát_ "three times";
  _kolikrát_ "how many times", _několikrát_ "several times";
  _tolikrát_ "so many times"

### `Frac`: fraction

This is a subtype of cardinal numbers, occasionally distinguished in
corpora. It may denote a fraction or just the denominator of the
fraction. In various languages these words may behave morphologically
and syntactically as nouns or ordinal numerals.

#### Examples

* [en] _three-quarters_
* [cs] _půl / polovina_ "half"; _třetina_ "one third"; _čtvrt /
  čtvrtina_ "quarter"

### `Sets`: number of sets of things

Morphologically distinct class of numerals used to count sets of
things, or nouns that are pluralia tantum.

#### Examples

* [cs] _<b>dvoje</b> / <b>troje</b> boty_ "<b>two</b> / <b>three</b>
  [pairs of] shoes"; as opposed to normal cardinal numbers: _dvě / tři
  boty_ "two / three shoes"

### `Dist`: distributive numeral

Used to express that the same quantity is distributed to each member
in a set of targets.

#### Examples

* [hu] _három-három in gyermekenként <b>három-három</b> ezer
  forinttal_ "three thousand forint per child"

### `Range`: range of values

This could be considered a subtype of cardinal numbers, occasionally
distinguished in corpora.

#### Examples

* [en] _two-five_ "two to five" (provided tokenization leaves it as
  one token.)

### `Gen`: generic numeral, i.e. a numeral that is neither of the above

Czech school grammar distinguishes this subclass, which is why it
appears in Czech tagsets. Other Slavic languages may have similar
words but their traditional classification may differ. (Note that
"generic numerals" in Czech grammar also include the `Sets` subclass
mentioned above.)

#### Examples

* [cs] _<b>čtvero, patero, desatero</b>_ (specific forms of four,
  five, ten; they are morphologically, syntactically and stylistically
  distinct from the default forms _čtyři, pět, deset_); _<b>dvojí,
  trojí, čtverý</b>_ (twofold, threefold, fourfold; these are
  morphologically and syntactically adjectives).

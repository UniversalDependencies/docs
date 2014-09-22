---
layout: base
title: 'NumType'
shortdef: 'numeral type'
---

## {{ page.title }}: {{ page.shortdef }}

Some languages (especially Slavic) have a complex system of
<a href="../ud-pos/NUM.html">numerals</a>.
For example, in the school grammar of Czech, the main part of speech
is “numeral”, it includes almost everything where counting is
involved and there are various subtypes. It also includes
interrogative, relative, indefinite and demonstrative words referring
to numbers (words like _kolik / how many, tolik / so many, několik / some, a few),_
so at the same time we may have a non-empty value of
<a href="PronType.html">PronType</a>.
(In English, these words are called quantifiers and they are
considered a subgroup of <a href="../ud-pos/DET.html">determiners</a>.)

From the syntactic point of view, some numtypes behave like
adjectives and some behave like adverbs. We tag them <a href="../ud-pos/ADJ.html">ADJ</a>
and <a href="../ud-pos/ADV.html">ADV</a> respectively.
Thus the {{ page.title }} feature applies to several different parts of speech:

* <a href="../ud-pos/NUM.html">NUM</a>: cardinal numerals
* <a href="../ud-pos/DET.html">DET</a>: quantifiers
* <a href="../ud-pos/ADJ.html">ADJ</a>: definite adjectival, e.g. ordinal numerals
* <a href="../ud-pos/ADV.html">ADV</a>: adverbial (e.g. ordinal and multiplicative) numerals, both definite and pronominal

### Card: cardinal number or corresponding interrogative / relative / indefinite / demonstrative word

Note that in some Indo-European languages there is a fuzzy borderline
between numerals and nouns for _thousand, million_ and _billion._

Examples: [en] _one, two, three;_ [cs] _jeden, dva, tři; kolik_ (how many), _několik_ (some),
_tolik_ (so many), _mnoho_ (many), _málo_ (few)_

### Ord: ordinal number or corresponding interrogative / relative / indefinite / demonstrative word

This is a subtype of adjective or (in some languages) of adverb.

Examples: [en] _first, second, third;_ [cs] adjectival: _první_ (first), _druhý_ (second), _třetí_
(third); _kolikátý_ (“how manieth” = which rank), _několikátý_ (some
rank), _tolikátý_ (this/that rank); [cs] adverbial: _poprvé_ (for the first time), _podruhé_ (for
the second time), _potřetí_ (for the third time); _pokolikáté_ (for which
time), _poněkolikáté_ (for x-th time), _potolikáté_

### Mult: multiplicative numeral or corresponding interrogative / relative / indefinite / demonstrative word

This is subtype of adverb.

Examples: [cs] _jednou_ (once), _dvakrát_ (twice), _třikrát_ (three times);
_kolikrát_ (how many times), _několikrát_ (several times), _tolikrát_ (so
many times)

### Frac: fraction

This is a subtype of cardinal numbers, occasionally distinguished in corpora.
It may denote a fraction or just the denominator of the fraction.
In various languages these words may behave morphologically and syntactically
as nouns or ordinal numerals.

Examples: [en] _three-quarters;_ [cs] _půl / polovina_ (half), _třetina_ (one third), _čtvrt / čtvrtina_ (quarter)

### Sets: number of sets of things

Morphologically distinct class of numerals used to count sets of
things, or nouns that are pluralia tantum.

Examples: [cs] _<span style='color:red'>dvoje</span> / <span style='color:red'>troje</span> boty_ (two / three [pairs of] shoes); as opposed to normal cardinal numbers: _dvě / tři boty_ (two / three shoes)

### Dist: distributive numeral

Used to express that the same quantity is distributed to each member in a set of targets.

Examples: [hu] _három-három_ in _gyermekenként <span style='color:red'>három-három</span> ezer
forinttal_ (three thousand forint per child)

### Range: range of values

This could be considered a subtype of cardinal numbers, occasionally distinguished in corpora.

Examples: [en] _two-five_ (two to five) – provided tokenization
leaves it as one token.

### Gen: generic numeral, i.e. a numeral that is neither of the above

Czech school grammar distinguishes this subclass, which is why it
appears in Czech tagsets. Other Slavic languages may have similar
words but their traditional classification may differ. (Note that
“generic numerals” in Czech grammar also include the `Sets` subclass
mentioned above.)

Examples: [cs] _<span style='color:red'>čtvero, patero, desatero</span>_ (specific forms of four,
five, ten; they are morphologically, syntactically and stylistically distinct from the default
forms _čtyři, pět, deset_);
_<span style='color:red'>dvojí, trojí, čtverý</span>_ (twofold, threefold, fourfold; these are
morphologically and syntactically adjectives).

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
  <td><a href="#Mult">Mult</a></td>
  <td><a href="#Ord">Ord</a></td>
  <td><a href="#Sets">Sets</a></td>
</tr>
</table>


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

- _ένα, δύο, τρία_ "one, two, three"


### <a name="Ord">`Ord`</a>: ordinal number or corresponding interrogative / relative / indefinite / demonstrative word

This is a subtype of adjective or (in some languages) of adverb.

#### Examples

- _πρώτος, δεύτερος, τρίτος_  "first, second, third"


### <a name="Mult">`Mult`</a>: multiplicative numeral or corresponding interrogative / relative / indefinite / demonstrative word

This is subtype of adjective or adverb.

#### Examples

-  _διπλός_ "double, twofold"; _τριπλός_ "triple, threefold"; _τετραπλός_ "fourfold"

- _άπαξ_ "once"


### <a name="Sets">`Sets`</a>: number of sets of things; collective numeral

Morphologically distinct class of numerals used to count sets of
things, or nouns that are pluralia tantum. Some authors call this type
collective numeral.

#### Examples

- _ζευγάρι_ "pair of"
- _δωδεκάδα, ντουζίνα_ "set of twelve objects"




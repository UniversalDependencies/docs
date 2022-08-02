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

 Thus the `NumType` feature applies to
the following parts of speech:

* [el-pos/NUM](): cardinal numerals
* [el-pos/NOUN](): set denoting nouns
* [el-pos/ADJ]():  ordinal and multiplicative adjectives
* [el-pos/ADV](): multiplicative adverbs

### <a name="Card">`Card`</a>: cardinal number

#### Examples

-	0, 1, 2, 3, 4, 5, 2014, 1000000, 3.14159265359
-	 *ένα, δύο, τρία, εβδομήντα πέντε* "one, two, three, seventy five"


### <a name="Ord">`Ord`</a>: ordinal number or corresponding interrogative / relative / indefinite / demonstrative word

This is a subtype of adjective.

#### Examples

<b>Adjectives</b>
- _πρώτος, δεύτερος, τρίτος_  "first, second, third"

### <a name="Frac">`Frac`</a>: fraction

This is a subtype of cardinal numbers, occasionally distinguished in
corpora. It may denote a fraction or just the denominator of the
fraction. In Modern Greek these words may behave morphologically
and syntactically as nouns or adjectives assigned the feature-value pair 'NumType=Ord' (aka ordinal numerals). 

#### Examples

- _τρία τέταρτα_ "three _quarters_" (_τρία_ is a cardinal numeral  and _τέταρτα_ an adjective assigned the feature-value pair 'NumType=Frac')
- _μία και μισή_ "half past one" (_μία_ is a cardinal numeral  and _μισή_ an adjective assigned the feature-value pair 'NumType=Frac')

### <a name="Mult">`Mult`</a>: multiplicative numeral or corresponding interrogative / relative / indefinite / demonstrative word

This is subtype of adjective or adverb.

#### Examples

<b>Adjectives</b>
-  _διπλός_ "double, twofold"; _τριπλός_ "triple, threefold"; _τετραπλός_ "fourfold"

<b>Adverbs</b>
- _άπαξ_ "once"


### <a name="Sets">`Sets`</a>: number of sets of things; collective numeral

The feature is assigned to set denoting nouns.

#### Examples

- _ζευγάρι_ "pair of"
- _δωδεκάδα, ντουζίνα_ "set of twelve objects"




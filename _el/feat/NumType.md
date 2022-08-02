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

 Thus the `NumType` feature applies to
the following parts of speech:

* [el-pos/NUM](): cardinal numerals
* [el-pos/NOUN](): set denoting nouns
* [el-pos/ADJ]():  ordinal and multiplicative adjectives
* [el-pos/ADV]():  ordinal and multiplicative adverbs

### <a name="Card">`Card`</a>: cardinal number 

#### Examples

-		0, 1, 2, 3, 4, 5, 2014, 1000000, 3.14159265359
-	 *ένα, δύο, τρία, εβδομήντα πέντε* "one, two, three, seventy five"


### <a name="Ord">`Ord`</a>: ordinal number

This is a subtype of adjective or (in some languages) of adverb.

#### Examples

<b>Adjectives</b>
- _πρώτος, δεύτερος, τρίτος_  "first, second, third"

<b>Adverbs></b>
- _πρώτον_ "firstly"


### <a name="Mult">`Mult`</a>: multiplicative numeral or corresponding interrogative / relative / indefinite / demonstrative word

This is subtype of adjective or adverb.

#### Examples

<b>Adjectives</b>
-  _διπλός_ "double, twofold"; _τριπλός_ "triple, threefold"; _τετραπλός_ "fourfold"

<b>Adverbs></b>
- _άπαξ_ "once"


### <a name="Sets">`Sets`</a>: number of sets of things; collective numeral

These are tagged as [NOUN]().

#### Examples

- _ζευγάρι_ "pair of"
- _δωδεκάδα, ντουζίνα_ "set of twelve objects"




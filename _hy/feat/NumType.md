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
  <td><a href="#Dist">Dist</a></td>
  <td><a href="#Frac">Frac</a></td>
  <td><a href="#Ord">Ord</a></td>
  <td><a href="#Range">Range</a></td>
</tr>
</table>

Armenian has a complex system of [numerals](NUM). In the school grammar of Armenian, the part of speech “numeral” includes only words where a precise counting or quantity is involved.

From the syntactic point of view, some numtypes behave like adjectives and some behave like adverbs. We tag them [ADJ]() and [ADV]() respectively. Thus the `NumType` feature applies to several different parts of speech:

* [NUM](): cardinal numerals
* [DET](): quantifiers
* [ADJ](): adjectival ordinal numerals
* [ADV](): adverbial distributive numerals

Note that there are no _adverbial ordinal_ and _multiplicative numerals_ in Armenian.

### <a name="Card">`Card`</a>: cardinal number

Note that in some Indo-European languages there is a fuzzy borderline
between numerals and nouns for _thousand, million_ and _billion._

#### Examples

* _1, 2, 3_
* _մեկ_ "one", _երկու_ "two", _երեք_ "three"

### <a name="Ord">`Ord`</a>: ordinal number

This is a subtype of adjective.

#### Examples

* _1-ին, 2-րդ, 3-րդ_
* _առաջին_ "first", _երկրորդ_ "second", _երրորդ_ "third"

### <a name="Frac">`Frac`</a>: fraction

This is a subtype of cardinal numbers. It may denote a fraction or just the denominator of the fraction.

#### Examples

* _երեք <b>քառորդ</b>_ "three-quarters"
* _կես_ "half", _մեկ <b>երրորդ</b>_ մասը "one third", _քառորդ_ "quarter"

### <a name="Dist">`Dist`</a>: distributive numeral

Used to express that the same quantity is distributed to each member in a set of targets.

#### Examples

* _<b>երեքական (երեք-երեք)</b> խնձոր յուրաքանչյուրին_ "three apples per / for each one"

### <a name="Range">`Range`</a>: range of values

This could be considered a subtype of cardinal numbers (provided tokenization leaves it as one token.)

#### Examples

* _չորս-հինգ_ "four-five" ("eiter four or five")
* _տասից-տասնհինգ_ "ten-fifteen" ("from ten to fifteen")

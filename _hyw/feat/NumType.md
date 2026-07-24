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
* [ADJ](): adjectival ordinal numerals
* [ADV](): adverbial distributive numerals

Note that there are no _adverbial ordinal_ and _multiplicative numerals_ in Armenian.

### <a name="Card">`Card`</a>: cardinal number

Note that in some Indo-European languages there is a fuzzy borderline between numerals and nouns for _thousand_, _million_ and _billion._

#### Examples

* _1, 2, 3_
* _մէկ_/_mēk_ “one”, _երկու_/_erkow_ “two”, _երեք_/_erekʼ_ “three”

### <a name="Ord">`Ord`</a>: ordinal number

This is a subtype of adjective.

#### Examples

* _1-ին_/_1-in_ “1st”, _2-րդ_/_2-rd_ “2nd”, _3-րդ_/_3-rd_ “3rd”
* _առաջին_/_aṙaǰin_ “first”, _երկրորդ_/_erkrord_ “second”, _երրորդ_/_errord_ “third”

### <a name="Frac">`Frac`</a>: fraction

This is a subtype of cardinal numbers. It may denote a fraction or just the denominator of the fraction.

#### Examples

* _3/4_, _երեք քառորդ_/_erekʼ kʼaṙord_ “three quarters”
* _կէս_/_kēs_ “half”, _քառորդ_/_kʼaṙord_ “quarter”, _<b>1/3 (մէկ երրորդ)</b> մասը_/_1/3 (mēk errord) masë_ “one <b>third</b> part”

### <a name="Dist">`Dist`</a>: distributive numeral

Used to express that the same quantity is distributed to each member in a set of targets.

Note that _<b>20-ական, 30-ական</b> թուականներուն_/_<b>20-akan, 30-akan</b> tʼowakannerown_ `Plur` “by twentieth, thirties” are not considered distributive numerals, we mark them either `ADJ` or `NOUN`.

#### Examples

* _<b>երեքական (երեք-երեք)</b> խնձոր իւրաքանչիւրին_/_erekʼakan (erekʼ-erekʼ) xnjor iwrakʼančiwrin_ “three apples per / for each one”
* _<b>3-ական</b> խնձոր իւրաքանչիւրին_/_3-akan xnjor iwrakʼančiwrin_ “three apples per / for each one”

### <a name="Range">`Range`</a>: range of values

This could be considered a subtype of cardinal numbers (provided tokenization leaves it as one token).

#### Examples

* _4-5 (չորս-հինգ)_/_4-5 (čors-hing)_ “four or five”
* _10-15 (տասը-տասնհինգ)_/_10-15 (tasë-tasnhing)_ “from ten to fifteen”
<!-- Interlanguage links updated Út 30. června 2026, 10:59:03 CEST -->

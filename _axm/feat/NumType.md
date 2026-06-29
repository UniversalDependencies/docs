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

In Middle Armenian the part of speech [numerals](NUM) includes only words where a precise counting or quantity is involved.

From the syntactic point of view, some numtypes behave like adjectives and some behave like adverbs. We tag them [ADJ]() and [ADV]() respectively. Thus the `NumType` feature applies to several different parts of speech:

* [NUM](): cardinal numerals
* [ADJ](): adjectival ordinal numerals
* [ADV](): adverbial distributive numerals

Note that there are no _adverbial ordinal_ and _multiplicative numerals_ in Middle Armenian.

### <a name="Card">`Card`</a>: cardinal number

Note that in some Indo-European languages there is a fuzzy borderline
between numerals and nouns for _thousand, million_ and _billion._

#### Examples

* _1, 2, 3_
*  _մեկ/mek, երկու/erkow, իրեք (երեք)/irek’ (erek’)_ “one, two, three”

### <a name="Ord">`Ord`</a>: ordinal number

This is a subtype of adjective.

#### Examples

* _առջի/aṙǰi, երկուսում/erkowsowm, իրեքում/irek’owm_ “first, second, third”

### <a name="Frac">`Frac`</a>: fraction

This is a subtype of cardinal numbers. It may denote a fraction or just the denominator of the fraction.

#### Examples

* _կէս/kēs, չարէկ/čarēk_ “one-half, quarter”
* _երեքակ/erek’ak, հնկակ/hnkak, տասնակ/tasnak_ “one third, one fifth, one tenth”

### <a name="Dist">`Dist`</a>: distributive numeral

Used to express that the same quantity is distributed to each member in a set of targets.

#### Examples

*_մէկ-մէկ/mēk-mēk, երկու-երկու/erkow-erkow, իրեք-իրեք/irek’-irek’_ “one at a time, two at a time, three at a time”

### <a name="Range">`Range`</a>: range of values

This could be considered a subtype of cardinal numbers (provided tokenization leaves it as one token).

#### Examples

* _4-5 (չորս-հինգ)_ “four-five” (“either four or five”)
* _10-15 (տասն-տասնուհինկ)_ “ten fifteen” (“from ten to fifteen”)
<!-- Interlanguage links updated Po 29. června 2026, 18:11:00 CEST -->

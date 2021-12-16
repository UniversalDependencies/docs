---
layout: feature
title: 'Uninflect'
shortdef: 'uninflected word'
udver: '2'
---

If a word belongs to a part-of-speech category where inflection is expected, yet the actual word form
lacks the inflection, the boolean feature `Uninflect` is set to `Yes`. This applies to abbreviations,
numerals expressed with digits, and frozen forms outside inflection paradigms.

### <a name="Yes">`Yes`</a>: it is reflexive

Note that there is no `No` value. If the word is inflected, the `Uninflect` feature will just not be
mentioned in the `FEAT` column. (Which means that empty value has the `No` meaning.)

#### Examples

* uninflectable possessive determiners: _його_ “his”, _її_ “her”, _їх_ “their”
* uninflectable surname of a female person: _Лариса <b>Косач</b>_ “Larysa Kosač”
* abbreviations: _т, і_
* years: _1897_

<!-- Interlanguage links updated St lis 3 20:58:31 CET 2021 -->

---
layout: postag
title: 'NUM'
shortdef: 'numeral'
udver: '2'
---

### Definition

A numeral is a word, functioning most typically as a determiner, adjective or pronoun, that expresses a number and a relation to the number, such as quantity, sequence, frequency or fraction.

Note that cardinal numerals are covered by `NUM` whether they are used as determiners or not and whether they are expressed as words _(չորս)_, digits _(4)_, or Armenian letters _(Դ)_. Other words functioning as determiners (including pronominal quantifiers: demonstrative (_հանչաք, հէնչափ/hančak’, hēnčap’_ “that much”); indefinite (_մէկ մի/mēk mi_ “some”); definite (_ամէն/amēn_ “every”) are tagged [DET]().

Note that some words that may be traditionally called numerals, are not tagged `NUM`, based on their syntactic and morphological behavior. _Adverbial (multiplicative)_ numerals are taged as adverbs [ADV]() , _ordinal_ numerals are taged as adjectives [ADJ]().

If the numerals inflect as nouns, they are tagged [NOUN]().

### Examples

- _0, 1, 2, 3, 4, 5, 2014, 1000000, 3.14159265359_
-	_մէկ (մեկ)/mēk (mek), երկու/erkow, իրեք (երեք)/irek’ (erek’), չորս/čors, հինգ (հինկ)/hing (hink), տասնու(վ)իրեք/tasnow(v)irek’, քսանուչորս/k’sanowčors, քառսուն/k’aṙsown, երկու հարոյր/erkow haroyr;_ “one, two, three, four, five, thirteen, twenty two, fourty, two hundred”
-	_Ա, Ժ, Է, ԺԱ, Ն, Ռ_ “1, 10, 7, 11, 400, 1000”
-	_կէս/kēs, չարէկ/čarēk_ “one-half, quarter”: denominators of fractions constitute a separate class of cardinal numerals.

### Counterexamples

-	_առջի/aṙǰi, երկուսում/erkowsowm, իրեքում/irek’owm_ “first, second, third”: adjectival ordinal numerals. They are tagged [ADJ](), and the [NumType]() feature reveals their semantic relation to numbers.
- _մէկ-մէկ/mēk-mēk, երկու-երկու/erkow-erkow, իրեք-իրեք/irek’-irek’_ “one at a time, two at a time, three at a time”: adverbial distibutive numerals. They are tagged [ADV](), and the [NumType]() feature reveals their semantic relation to numbers.

### Border cases

- _միատակ/miatak, չորստակ/čorstak, հինգ պատիկ (հինգպատիկ)/ hing patik (hingpatik), երեք տարպայ/erek’ tarpay_ “once, four-time(s), five time(s), three times” are not considered numerals in the Armenian grammar. They are tagged either [ADJ]() or [ADV]().
-	_հարոյր/հարուր/հարիր/հարիւր/haroyr/harowr/harir/hariwr, հազար/hazar;_ “hundred, thousand”: words for large quantities are ambiguous between cardinal numerals (tagged `NUM`) and nouns. 
<!-- Interlanguage links updated St 12. listopadu 2025, 09:19:51 CET -->

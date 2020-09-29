---
layout: feature
title: 'NumForm'
shortdef: 'numeral form'
---

`NumForm` is a lexical feature of [numerals](NUM) that marks whether the number is expressed by digits or letters.

### Word: number expressed as word

#### Examples

* _en_ “one”, _dva_ “two”, _tri_ “three”
* _enoj_ "one-fold", _dvoj_ "two-fold", _troj_ "three-fold"

### Digit: number expressed using digits

#### Examples

* _1, 2, 3_
* _1., 2., 3._

### Roman: roman numeral

#### Examples

* _I, II, III_
* _I., II., III._

### Conversion from JOS

`NumForm` is assigned to all numerals that are converted to UD `NUM`. Numerals with Form=digit are converted to `NumForm=Digit`, numerals with Form=roman are converted to `NumForm=Roman` and numerals with Form=letter are converted to `NumForm=Word`. Note, however, that (word) numerals that are converted to UD `ADJ`, do not have any `NumForm`.
<!-- Interlanguage links updated Út zář 29 20:31:36 CEST 2020 -->

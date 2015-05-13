---
layout: postag
title: 'SYM'
shortdef: 'symbol'
---

### Definition

A symbol is a word-like entity that differs from ordinary words by
form, function, or both.

We recognize as symbols:

* currency symbols: _$_
* mathematical operators:  _µg <b>/</b> m3_
* '/' used a separator: _2001 <b>/</b> 923 <b>/</b> CE_
* emoticons and emoji: :-)
* URL's and emails

The following are not symbols:

* Proper nouns with numbers and special characters: _130XE_, _DC10_,  _DC-10_ are tagged [PROPN]().
* Acronyms for proper nouns:  _UN_, _NATO_ are tagged as [PROPN]().
* Abbreviated words: _Sig._ (signore), _kg_ (chilogrammo), _km_ (chilometro), _dott_ (dottore) are tagged [NOUN](). 
* Characters used as bullets in itemized lists _(*, •, ‣)_ are [PUNCT]().

### Examples

- _$, %, §, ©_
- _+, −, ×, ÷, =, <, >_
- :), ♥‿♥, 😝
- _john.doe@universal.org, http://universaldependencies.github.io/docs/_

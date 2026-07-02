---
layout: postag
title: 'X'
shortdef: 'other'
udver: '2'
---

### Definition

The tag `X` is used for words that cannot be assigned to a regular part-of-speech category.

A special use of `X` is in cases of code-switching where it is not possible (or meaningful) to analyze the intervening language grammatically (and where the dependency relation [flat]() is typically used in the syntactic analysis; on the morphological layer, these words should use the feature [Foreign=Yes](../feat/Foreign)). We also use `X` with the dependency relation [goeswith]().

This usage does not extend to ordinary loan words, which should instead be assigned their appropriate part of speech. For example, in _Նա նոր գաջեթների սիրահար է։_/_Na nor gaǰet’neri sirahar ē_ "He is fond of new gadgets", _գաջեթ_/_gaǰet’_ is treated as a regular [NOUN]().

Note that articles, prepositions, and filiation markers occurring in foreign names (_դը_/_dë_, _դե_/_de_, _դ՚_/_d՚_, _ֆոն_/_fon_, _դել_/_del_, _վան_/_van_, _օղլու_/_òġlow_, _աբու_/_abow_) are also tagged [X]().

### Examples

- _«<b>Բեռներ ցայտունգ</b>» թերթը_/_«<b>Beṙner c’aytowng</b>» t’ert’ë_ “The <b>Berner Zeitung</b> newspaper”
- _Փոխանցում է <b>euronews</b>-ը:_/_P’oxanc’owm ē <b>euronews</b>-ë_ “Euronews reports.”
- _Լեոնարդո <b>դի</b> Կապրիո_/_Leonardo <b>di</b> Kaprio_ “Leonardo DiCaprio”.
<!-- Interlanguage links updated Út 30. června 2026, 10:58:39 CEST -->

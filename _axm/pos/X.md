---
layout: postag
title: 'X'
shortdef: 'other'
udver: '2'
---

### Definition

The tag `X` is used for words that cannot be assigned to a regular part-of-speech category.

A special use of `X` is in cases of code-switching where it is not possible (or meaningful) to analyze the intervening language grammatically (and where the dependency relation [flat]() is typically used in the syntactic analysis; on the morphological layer, these words should use the feature [Foreign=Yes](../feat/Foreign)). We also use `X` with the dependency relation [goeswith]().

This usage does not extend to ordinary loan words, which should instead be assigned their appropriate part of speech. For example, in _<b>մաճասին</b> երակն բարակ եւ վատուժ լինի_/_<b>mač̣asin</b> erakn barak ew vatowž lini_ “the pulse is thin and weak”, the Arabic loanword _մաճաս_/_mač̣as_ “pulse” is tagged [NOUN]().

Note that the articles, prepositions, and filiation markers occurring in foreign names (_դը_/_dë_, _դե_/_de_, _դ՚_/_d՚_, _ֆոն_/_fon_, _դել_/_del_, _վան_/_van_, _օղլու_/_òġlow_, _աբու_/_abow_) are also tagged [X]().

<!-- Interlanguage links updated Út 30. června 2026, 10:58:39 CEST -->

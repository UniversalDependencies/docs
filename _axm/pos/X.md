---
layout: postag
title: 'X'
shortdef: 'other'
udver: '2'
---

### Definition

The tag `X` is used for words that for some reason cannot be assigned a real part-of-speech category.

A special usage of `X` is for cases of code-switching where it is not possible (or meaningful) to analyze the intervening language grammatically (and where the dependency relation [flat]() is typically used in the syntactic analysis; on the morphological layer, these words should use the feature [Foreign=Yes](../feat/Foreign)). We also use `X` with the dependency relation [goeswith]().

This usage does not extend to ordinary loan words which should be assigned a normal part-of-speech. For example, in _<b>մաճասին</b> երակն բարակ եւ վատուժ լինի_ "the pulse is thin and weak", the Arabic loanword _մաճաս_ is an ordinary [NOUN]().

Note that the articles, prepositions in foreign names (_դը, դե, դ՚, ֆոն, դել, վան, օղլու, աբու_) are also tagged [X]().

<!-- Interlanguage links updated Po 29. června 2026, 17:42:03 CEST -->

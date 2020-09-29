---
layout: postag
title: 'X'
shortdef: 'other'
udver: '2'
---

### Definition

The tag `X` is used for words that for some reason cannot be assigned a real part-of-speech category.

A special usage of `X` is for cases of code-switching where it is not possible (or meaningful) to analyze the intervening language grammatically (and where the dependency relation [flat]() is typically used in the syntactic analysis; on the morphological layer, these words should use the feature [Foreign=Yes](../feat/Foreign)). We use also `X` with the the dependency relation [goeswith]().

This usage does not extend to ordinary loan words which should be assigned a normal part-of-speech. For example, in _Նա նոր գաջեթների սիրահար է։_ "He is fond of new gadgets", _գաջեթ_ is an ordinary [NOUN]().

Note that the articles, prepositions in foreign names (_դը, դե, դ՚, ֆոն, դել, վան_) are also tagged [X]().

### Examples

- _Եվ ապա նա պարզապես <b>xfgh pdl jklw</b>։_ “And then he just <b>xfgh pdl jklw</b>”
<!-- Interlanguage links updated Út zář 29 20:42:59 CEST 2020 -->

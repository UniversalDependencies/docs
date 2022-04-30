---
layout: postag
title: 'X'
shortdef: 'other'
udver: '2'
---

### Definition

The tag `X` is used for words that for some reason cannot be assigned
a real part-of-speech category.

A special usage of `X` is for cases of code-switching where it is not
possible (or meaningful) to analyze the intervening language
grammatically (and where the dependency relation [flat](../dep/flat) is
typically used in the syntactic analysis;
on the morphological layer, these words should use the feature [Foreign=Yes](../feat/Foreign)).
This rarely applies to the PDT data where many foreign words are tagged with their original
part of speech.

Even if foreign words are tagged `X`, this usage does not extend
to ordinary loan words which should be assigned a normal
part-of-speech. For example, in _Skotové nosí kilt&nbsp;_ “Scots wear kilts”,
_kilt_ is an ordinary [NOUN]().

### Examples

- _A on pak akorát <b>xfgh pdl jklw</b>&nbsp;_ “And then he just <b>xfgh pdl jklw</b>”
<!-- Interlanguage links updated St lis 3 20:58:15 CET 2021 -->

---
layout: relation
title: 'flat:foreign'
shortdef: 'foreign words'
udver: '2'
---

We use `flat:foreign` to label sequences of foreign words.
These are given a linear analysis: the head is the first token in the foreign phrase.

It applies to quoted foreign text incorporated in a sentence/discourse
of the host language.

~~~ sdparse
C'est le créateur de The Tenth \n He is the creator of The Tenth
flat:foreign(The, Tenth)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:06 CEST 2021 -->

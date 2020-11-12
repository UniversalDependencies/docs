---
layout: relation
title: 'flat:foreign'
shortdef: 'foreign words'
udver: '2'
---

We use `flat:foreign` to label sequences of foreign words. These are given
a linear analysis: the head is the first token in the foreign phrase.

`flat:foreign` does not apply to loanwords or to foreign [names](flat).
It applies to quoted foreign text incorporated in a sentence/discourse
of the host language (unless we want to and know how to annotate the
internal structure according to the syntax of the foreign language).

~~~ sdparse
Jarmusch se objevil ve Wangově snímku Modrá ve tváři ( Blue in the Face ) .
flat:foreign(Blue, in)
flat:foreign(Blue, the)
flat:foreign(Blue, Face)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:27 CET 2020 -->

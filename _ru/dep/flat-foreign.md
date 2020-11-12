---
layout: relation
title: 'flat:foreign'
shortdef: 'foreign words'
udver: '2'
---

We use `flat:foreign` to label sequences of foreign words.

`flat:foreign` does not apply to loanwords or to foreign [names](flat:name).
It applies to foreign text incorporated in a sentence/discourse
of the host language (unless we want to and know how to annotate the
internal structure according to the syntax of the foreign language).

~~~ sdparse
Они были разработаны компанией Red Bull Technology \n They were developed by Red Bull Technology
flat:foreign(компанией, Red)
flat:foreign(компанией, Bull)
flat:foreign(компанией, Technology)
~~~


<!-- Interlanguage links updated Čt lis 12 09:43:27 CET 2020 -->

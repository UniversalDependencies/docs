---
layout: relation
title: 'nmod:comp'
shortdef: 'comparative modifier of an adjective or adverb'
udver: '2'
---

This subtype of [nmod]() is used for marking comparative modifier of an [adjective](tr-pos/Adj) or [adverb](tr-pos/Adv).

**Note:** Under UD v2 guidelines, the standard of comparison should be a subtype of `obl` rather than `nmod`.
This should be fixed in the future.

~~~ sdparse
Türkiye'den sıcak bir ülke \n A country warmer than Turkey
nmod:comp(sıcak, Türkiye'den)
~~~

~~~ sdparse
Benden çok okudu . \n He\/she read more than me (more than I did)
nmod:comp(çok, Benden)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:31 CET 2020 -->

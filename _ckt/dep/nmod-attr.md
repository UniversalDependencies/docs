---
udver: '2'
layout: relation
title: 'nmod:attr'
shortdef: 'attributive nominal modifier'
---

The `nmod:attr` subtype of the [nmod]() relation is used for a nominal modifier of another
nominal with attributive morphology.

~~~ sdparse
Мури Омваамвыԓьыморэ ӄорагынрэтыԓьыморэ . \n We reindeer.herders Amguema-ATTR .
nsubj(ӄорагынрэтыԓьыморэ, Мури)
nsubj(reindeer.herders, We)
nmod:attr(ӄорагынрэтыԓьыморэ, Омваамвыԓьыморэ)
nmod:attr(reindeer.herders, Amguema-ATTR)
punct(ӄорагынрэтыԓьыморэ, .-4)
punct(reindeer.herders, .-8)
~~~

“We are reindeer herders from Amguema.”

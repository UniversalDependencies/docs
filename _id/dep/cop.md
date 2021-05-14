---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

In Indonesian reference grammar only two words are considered as copulas: _ialah_ and _adalah_. The use of copula is also optional.

~~~ sdparse
Jakarta adalah ibukota Indonesia . \n Jakarta is the capital of Indonesia .
nsubj(ibukota, Jakarta-1)
cop(ibukota, adalah)
nmod(ibukota, Indonesia-4)
nsubj(capital, Jakarta-7)
cop(capital, is)
nmod(capital, Indonesia-12)
~~~

~~~ sdparse
Kau adalah segala nya bagi ku . \n You are my everything .
nsubj(segala, Kau)
cop(segala, adalah)
det(segala, nya)
nsubj(everything, You)
cop(everything, are)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:58 CEST 2021 -->

---
layout: relation
title:  'nsubj'
shortdef : 'nominal subject'
---

The dependency type `nsubj` marks nominal subjects a clause.

~~~ sdparse
Азамат ағашқа қарай жүгірді . \n Azamat tree-to towards ran .
nsubj(жүгірді-4, Азамат-1)
case(ағашқа-2, қарай-3)
punct(жүгірді-4, .-5)
nmod(жүгірді-4, ағашқа-2)
~~~

Another example:

~~~ sdparse
Мұнда үлкен шара өтеді . \n Here big event takes-place .
nsubj(өтеді-4, шара-3)
amod(шара-3, үлкен-2)
advmod(өтеді-4, Мұнда-1) 
punct(өтеді-4, .-5)
~~~

Note that the governor may not always be a verb, in copula 
predication, non-verbal predicates are possible:

~~~ sdparse
Сары  жылы түс . \n Yellow warm colour .
nsubj(түс-3, Сары-1)
amod(түс-3, жылы-2)
punct(түс-3, .-4)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:32 CET 2020 -->

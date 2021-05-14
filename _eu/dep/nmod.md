---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The nmod relation (`nmod`) is used for nominal modifiers. They depend either on another noun (group “noun dependents”) or on a predicate (group “non-core dependents of clausal predicates”).
nmod is a noun (or noun phrase) functioning as a non-core (oblique) argument or adjunct. This means that it functionally corresponds to an adverbial when it attaches to a verb, adjective or other adverb. But when attaching to a noun, it corresponds to an attribute, or genitive complement.


*Hegazkin **txiki** bat zain zegoen **Findeleko** **aireportuan** .*

*A **small** plane was waiting **in the airport** **of Findel** .*

~~~ sdparse
Hegazkin txiki bat zain zegoen Findeleko aireportuan . \n Plane small_a waiting was Findel_of airport_the_in .

nmod(Hegazkin-1, txiki-2)
nummod(Hegazkin-1, bat-3)
advmod(zegoen-5, zain-4)
nsubj(zegoen-5, Hegazkin-1)
nmod(aireportuan-7, Findeleko-6)
nmod(zegoen-5, aireportuan-7)
punct(zegoen-5, .-8)
~~~


*Partidutxoa egin zuten **hamarreko** bi **taldetan** .*

*They played a match in two **groups** **of ten** .*

~~~ sdparse
Partidutxoa egin zuten hamarreko bi taldetan . \n Match_a played ten_of two match_in  .

obj(egin-2, Partidutxoa)
aux(egin-2, zuten-3)
nmod(taldetan-6, hamarreko-4)
nummod(taldetan-6, bi-5)
nmod(egin-2, taldetan-6)
punct(egin-2, .-7)
~~~


* Possessive determiners, are not tagged with det but with nmod.

*Hori izango da **gure** zigorra .*

*That will be our punishment .*

~~~ sdparse
Hori izango da gure zigorra . \n That will be our punishment .

nsubj(zigorra-5, Hori-1)
cop(zigorra-5, izango-2)
aux(izango-2, da-3)
nmod(zigorra-5, gure-4)
punct(zigorra-5, .-6)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:09 CEST 2021 -->

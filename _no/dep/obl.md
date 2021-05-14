---
layout: relation
title: 'oblique'
shortdef: 'oblique nominal'
udver: '2'
---

The `obl` relation is used for a nominal (noun, pronoun, noun phrase) functioning as a non-core (oblique) argument or 
adjunct. This means that it functionally corresponds to an adverbial attaching to a verb, adjective or other adverb.
In Norwegian, `obl` nominals are usually modified by a preposition.

~~~ sdparse
Og bak prosesjonen kom dagens hovedpersoner \n And behind the procession came the main people
case(prosesjonen,bak)
obl(kom,prosesjonen)
~~~

The `obl` relation is also used for temporal modifiers expressed as nominals:

~~~ sdparse
Stortinget ble mandag kveld enige \n Government agreed Monday evening
nmod(ble-2,mandag-3)
nmod(mandag-3,kveld-4)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:16 CEST 2021 -->

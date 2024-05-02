---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject is a noun phrase which is the syntactic subject of a clause. 

~~~ sdparse
Билим берүү министри кетти. \n The Minister of Education left.
nsubj(кетти, министр)
~~~

``nsubj`` is also used for subjects of  adjectival or nominal predicates.
~~~ sdparse
Айдана  бийчи. \n Aidana is a dancer.
nsubj(бийчи, Айдана)
~~~


For existential sentences, "the thing that exists" is the subject.
This includes possessive existentials.
~~~ sdparse
Үч машина бар. \n There are three cars.
nsubj(бар, машина )
~~~


``nsubj`` (without a subtype) is also used
for the grammatical subject of a passivized verb.
The subtype ``nsubj:pass`` is not used.

~~~ sdparse
терезе ачылды. \n The window was opened. 
nsubj(ачылды, терезе )
~~~


<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:08 CET -->

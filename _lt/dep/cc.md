---
layout: relation
title:  'cc'
shortdef : 'coordination'
udver: '2'
---

A cc is the relation between a conjunct and the coordinating conjunction that precedes it. The governor of the conjunction if the first conjunct in the paradigm.

~~~ sdparse
Lukas yra aukštas ir lieknas . \n Luke is tall and thin .
cc(lieknas, ir)
cc(thin, and)
~~~

~~~ sdparse
Turime obuolių , kriaušių ir bananų . \n We-have apples , pears and bananas .
cc(bananų, ir)
cc(bananas, and)
~~~

A conjunction may also appear at the beginning of a sentence. This is also called a cc, and dependent on the root predicate of the sentence.

~~~ sdparse
Ir tada jis išėjo . \n And then he left .
cc(išėjo, Ir)
cc(left, And)
~~~

### Paired conjunctions

Kartojamieji jungtukai yra tada, kai tas pats jungtukas kartojamas prie kiekvieno dėmens: _ir...ir, ar...ar, nei...nei_ ir t. t. Jie priklauso nuo dėmens, kurį jungia, ir žymimi _cc_.
Paired conjunctions occur when the same conjunction is repeated before each component: _ir...ir, ar...ar, nei...nei, etc. (and…and, or…or, neither….nor, etc.)_. They depend on the component they connect and are annotated as _cc_.

~~~ sdparse
Ir laiptus , ir turėklus darbuotojai sutvarkė . \n  The-employees fixed both the-stairs and the-handrails .
cc(laiptus, Ir)
cc(turėklus, ir)
cc(the-stairs, both)
cc(the-handrails, and)
~~~

~~~ sdparse
Nei knygų , nei vadovėlių bibliotekoje neradau . \n I-didn’t-find neither books nor textbooks in-the-library .
cc(knygų, Nei)
cc(vadovėlių, nei)
cc(books, neither)
cc(textbooks, nor) 
~~~

### Compound sentences

The relation cc is used to mark coordinating conjunctions such as and, but, so etc. in complex sentences.

~~~ sdparse
Aš einu į kiną , o jis skuba į darbą . \n I go to the-cinema , and he hurries to work . 
cc(skuba, o)
cc(hurries, and) 
~~~

For more on coordination, see the [conj]() relation. 


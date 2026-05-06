---
layout: relation
title:  'cc'
shortdef : 'coordination'
udver: '2'
---

A `cc` is the relation between a conjunct and the coordinating conjunction that precedes it. The governor of the conjunction if the first conjunct in the paradigm.

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

A conjunction may also appear at the beginning of a sentence. This is also called a `cc`, and dependent on the root predicate of the sentence.

~~~ sdparse
Ir tada jis išėjo . \n And then he left .
cc(išėjo, Ir)
cc(left, And)
~~~

### Paired conjunctions

Paired conjunctions occur when the same conjunction is repeated before each component: _ir...ir, ar...ar, nei...nei_, etc. (_and…and, or…or, neither….nor_, etc.). They depend on the component they connect and are annotated as `cc`.

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

The relation `cc` is used to mark coordinating conjunctions such as _and, but, so_ etc. in complex sentences.

~~~ sdparse
Aš einu į kiną , o jis skuba į darbą . \n I go to the-cinema , and he hurries to work . 
cc(skuba, o)
cc(hurries, and) 
~~~

For more on coordination, see the [conj]() relation. 

<!-- Interlanguage links updated St 6. května 2026, 20:45:45 CEST -->

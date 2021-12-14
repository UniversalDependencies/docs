---
layout: relation
title: 'obj'
shortdef: 'direct object'
udver: '2'
---

The direct object of a verb is the second most core argument of a verb after the subject. Typically, it is the noun phrase that denotes the entity acted upon or which undergoes a change of state or motion (the proto-patient). 
A direct object is a nominal which is the (accusative) object of the verbal predicate.

~~~ sdparse
Stravince le elezioni del 1990 . 
obj(Stravince, elezioni)
~~~


The <code>obj</code> relation is also used to mark real reflexive constructions where the clitic pronoun is a direct object of the verb.

~~~ sdparse
Mi ami ? 
obj(ami, Mi)
~~~


<code>obj</code> is also used in those cases where the direct object has no independent semantic value but it creates a unique semantic element together with the verb.

~~~ sdparse
Hanno fatto fuoco prima su mio marito . 
obj(fatto, fuoco)
~~~
<!-- Interlanguage links updated St lis 3 20:59:03 CET 2021 -->

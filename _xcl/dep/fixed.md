---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---

The `fixed` relation is used for grammaticized multiword expressions, which behave like function words. 
Fixed MWEs are annotated in a flat structure, where all subsequent words in the expression are attached to the first one using the `fixed` label. 
The assumption is that these expressions do not have any internal syntactic structure.

In UD_Classical_Armenian-CAVaL, `fixed` is used for multiword adpositions and conjunctions. 
In Classical Armenian, the head of multiword adposition is always an adposition, whereas the following element can be another adposition, an adverb, or a noun.

~~~ sdparse
ասացաւ ի ձեռն Էսայայ \n was spoken by Esaias
fixed(ի, ձեռն)
case(Էսայայ, ի)
~~~

~~~ sdparse
շրջէր շուրջ զ գաւառաւք ն \n he went round about the villages
fixed(շուրջ, զ)
case(գաւառաւք, շուրջ)
~~~

~~~ sdparse
որպէս զի փառաւորեսցին ի մարդկանէ \n that they may have glory of men
fixed(որպէս, զի)
mark(փառաւորեսցին, որպէս)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:55 CET -->

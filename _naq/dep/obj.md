---
layout: relation
title: 'obj'
shortdef: 'direct object'
udver: '2'
---

The direct object of a verb is the noun phrase that denotes the entity acted upon. The direct object is in the oblique (accusative) [case](naq-feat/Case) without an [adposition](naq-dep/ADP).

If several objects precede the verb, the last one is `obj` and the other are [iobj](naq-dep/iobj). Additonaly, if the verb has several objects and one of them is in the form of object pronoun and follows the verb, then this object is [iobj](naq-dep/iobj).

~~~ sdparse
ǁîb ge satsa ǃomkha ge mā . \n He DECL you hands PST give .
obj(mā, ǃomkha)
iobj(mā, satsa)
obj(give, hands)
iobj(give, you)
~~~

~~~ sdparse
ǁîb ge ǃomkha ge mā tsi . \n He DECL hands PST give you .
obj(mā, ǃomkha)
iobj(mā, tsi)
obj(give, hands)
iobj(give, you)
~~~

There is further discussion of the two kinds of object at [iobj](naq-dep/iobj). 
<!-- Interlanguage links updated So 10. května 2025, 18:15:53 CEST -->

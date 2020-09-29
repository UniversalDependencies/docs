---
layout: relation
title: 'obj'
shortdef: 'object'
udver: '2'
---

An object is a nominal which is the (direct) object of a verbal predicate. 

~~~ sdparse
Han äter en smörgås . \n He eats a sandwich .
obj(äter, smörgås)
nsubj(äter, Han)
det(smörgås, en)
~~~

If there is only one object present, it is always analyzed as _obj_ regardless of the semantic relation to the predicate. 
If there are two objects, the one most directly related to the verb is treated as the direct object.

~~~ sdparse
Han informerar dig . \n He informs you .
obj(informerar, dig)
nsubj(informerar, Han)
~~~

~~~ sdparse
Han skickar dig information . \n He sends you information .
obj(skickar, information)
iobj(skickar, dig)
nsubj(skickar, Han)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:31 CEST 2020 -->

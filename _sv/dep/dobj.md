---
layout: relation
title: 'dobj'
shortdef: 'direct object'
---

A direct object is a nominal which is the (accusative) object of the verbal predicate. 

~~~ sdparse
Han äter en smörgås . \n He eats a sandwich .
dobj(äter, smörgås)
~~~

If there is only one object present, it is always analyzed as _dobj_ regardless of the semantic relation to the predicate. If there are two objects, the one most directly related to the verb is treated as the direct object.

~~~ sdparse
Han informerar dig . \n He informs you .
dobj(informerar, dig)
~~~

~~~ sdparse
Han skickar dig information . \n He sends you information .
dobj(skickar, information)
iobj(skickar, dig)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:52 CEST 2020 -->

---
layout: relation
title: 'dobj'
shortdef: 'direct object'
---

The direct object of a verb is the noun phrase that denotes the entity acted upon. 

~~~ sdparse
O văd . \n Her see-I .
dobj(văd, O)
~~~

When the direct object is doubled by a pronoun, this is marked as `expl`. 

~~~ sdparse
O văd pe Mara . \n Her see-I PE Mara .
dobj(văd, Mara)
expl(văd, O)
~~~

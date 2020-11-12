---
layout: relation
title: 'dobj'
shortdef: 'direct object'
---

The direct object of a verb is the noun phrase that denotes the entity acted upon. 

~~~ sdparse
Citesc o carte . \n Read-I a book .
dobj(Citesc, carte)
~~~

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

Romanian allows for the occurrence of two Accusative objects with some (uses of certain) verbs: the [+Animate] object (the direct object in traditional grammar terms) is anlysed here as `iobj`, while the other Accusative object (the secondary object in traditional grammar terms) is `obj`:

~~~ sdparse
Bunica i-a învățat pe copii o poezie . \n Grandmother-the them-has taught PE children a poem .
dobj(învățat, poezie)
iobj(învățat, copii)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:35 CET 2020 -->

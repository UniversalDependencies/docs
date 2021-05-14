---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object of a verb is any nominal phrase that is a core argument of the verb, usually expressing the recipient, the addressee or beneficiary of the predicate:

~~~ sdparse
Îi dau Marei un trandafir . \n Her give-I Mara-Dat a rose .
iobj(dau, Marei)
~~~

~~~ sdparse
Acesta este un concurs deschis elevilor din clasele a patra. \n This is a contest opened pupils-to-the from grades the fourth .
iobj(deschis, elevilor)
~~~

~~~sdparse
Conjunctura nu -mi este favorabilă . \n Conjuncture-the not -me-to is favourable .
iobj(favorabilă, -mi)
~~~

We also analyse as `iobj` the [+Animate] object (the direct object in traditional grammar terms) of verbs with two Accusative objects, whereas the other object (the secondary object in traditional grammar terms) is `obj`:

~~~ sdparse
Bunica i-a învățat pe copii o poezie . \n Grandmother-the them-has taught PE children a poem .
obj(învățat, poezie)
iobj(învățat, copii)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:07 CEST 2021 -->

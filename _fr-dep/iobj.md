---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

An indirect object is a nominal which corresponds to a dative object.

~~~ sdparse
Il m' envoie une lettre . \n He sends me a letter .
iobj(envoie, m')
~~~

When the indirect object is realized with a preposition, it gets analyzed with the [obl]() relation:

~~~ sdparse
Il envoie la lettre à la présidente . \n He sends the letter to the president .
obl(envoie, présidente)
case(présidente, à)
~~~

The `iobj`relation is also used for pronouns in prononimal verbs which are indirect objects:

~~~ sdparse
Il se parle tout haut. \n He speaks to himself out loud .
iobj(parle, se)
~~~

In FrenchSpoken we also use the `iobj` relation for a nominal which corresponds to a dative objects i.e. a nominal that is a core argument of the verb but is not its subject or (direct) object.

~~~ sdparse
Nous vous conseillons ce charmant petit restaurant. \n We recommend you this lovely restaurant.
iobj(conseillons, vous)
~~~

However, in FrenchSpoken, when the indirect object is realized with a preposition, we don't use the simple `obl` relation. We use instead the [obl:comp]() relation:

~~~ sdparse
Il envoie la lettre à la présidente . \n He sends the letter to the president .
obl:comp(envoie, présidente)
case(présidente, à)
~~~


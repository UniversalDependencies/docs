---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
---

An indirect object is a nominal which corresponds to a dative object.

~~~ sdparse
Il m' envoie une lettre . \n He sends me a letter .
iobj(envoie, m')
~~~

When the indirect object is realized with a preposition, it gets analyzed with the _nmod_ relation:

~~~ sdparse
Il envoie la lettre à la présidente . \n He sends the letter to the president .
nmod(envoie, présidente)
case(présidente, à)
~~~

The _iobj_ relation is also used for pronouns in prononimal verbs which are indirect objects:

~~~ sdparse
Il se parle tout haut. \n He speaks to himself out loud .
iobj(parle, se)
~~~


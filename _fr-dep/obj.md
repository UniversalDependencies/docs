---
layout: relation
title: 'obj'
shortdef: 'direct object'
udver: '2'
---

A direct object is a nominal which is the (accusative) object of the verbal predicate. 

~~~ sdparse
Il mange un sandwich . \n He eats a sandwich .
obj(mange, sandwich)
~~~

The `obj` relation is also used for a reflexive pronoun in pronominal verb when the pronoun is a direct object of the verb. When the grammatical relation of the pronoun is not a direct object nor an indirect object (as in _se douter_ "to suspect"), the pronoun gets analyzed as `expl`.

~~~ sdparse
Il se lave . \n He washes himself .
obj(lave, se)
~~~

In FrenchSpoken we also use the `obj` relation :

~~~ sdparse
on voit une jeune fille habillée en noir \n we see a young girl dressed in black
obj(voit, fille)
~~~

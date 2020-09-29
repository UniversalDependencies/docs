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

The `obj` relation is also used for a reflexive pronoun in pronominal verb when the pronoun is a direct object of the verb.

~~~ sdparse
Il se lave . \n He washes himself .
obj(lave, se)
~~~

When the pronoun is a part of a fixed verbal expression that is syntactically regular, we can analyze it with `obj`:

~~~ sdparse
se douter \n to suspect
obj(douter, se)
~~~

~~~ sdparse
se souvenir \n to remember
obj(souvenir, se)
~~~

~~~ sdparse
on voit une jeune fille habillée en noir \n we see a young girl dressed in black
obj(voit, fille)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:39 CEST 2020 -->

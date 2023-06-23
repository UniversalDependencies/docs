---
layout: relation
title: 'reparandum'
shortdef: 'overridden disfluency'
udver: '2'
---

We use `reparandum` to indicate disfluencies overridden in a speech repair. The disfluency is the dependent of the
repair. Such cases, though, do not appear in the AnCora, GSD or PUD treebanks of written Spanish.

Incomplete words that are later corrected and pronounced in their entirety.

~~~ sdparse
Tengo dos pe, perros en casa \n I have two d, dogs at home
reparandum(perros, pe)
~~~

~~~ sdparse
¿Y qué anim, qué más animales tenían? \n And what anim, what more animals did they have?
reparandum(animales, anim)
~~~

Word replacements or self-corrections during speech.

~~~ sdparse
Pero de ternera no, con, de cerdo. \n But not veal, with, but pork.
reparandum(con, no)
~~~

~~~ sdparse
Hay una fuente muy buena y él va, él iba a lavar allí. \n There is a very good fountain and he leaves, he was going to wash there.
obj(va, se)
reparandum(iba, va)
reparandum(iba, se)
~~~

Repetition of words or entire clauses.

~~~ sdparse
Yo tenía, yo tenía una casa en la montaña \n I had, I had a house in the mountains
reparandum(tenía, tenía)
~~~


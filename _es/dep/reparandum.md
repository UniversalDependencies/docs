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
Tengo dos pe , perros en casa \n I have two d , dogs at home
reparandum(perros, pe)
~~~

~~~ sdparse
¿ Y qué anim , qué más animales tenían ? \n And what anim , what more animals did they have ?
reparandum(animales, anim-4)
~~~

Word replacements or self-corrections during speech.

~~~ sdparse
Pero de ternera no , con , de cerdo . \n But not veal , with , but pork .
reparandum(con, no)
~~~

~~~ sdparse
Hay una fuente muy buena y él va , él iba a lavar allí . \n There is a very good fountain and he goes , he was going to wash there .
reparandum(iba, va)
~~~

Repetition of words or entire clauses.

~~~ sdparse
Yo tenía , yo tenía una casa en la montaña . \n I had , I had a house in the mountains .
reparandum(tenía-5, tenía-2)
~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:28 CET -->

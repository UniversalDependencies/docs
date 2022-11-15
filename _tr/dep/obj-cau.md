---
layout: relation
title: 'obj:cau'
shortdef: 'direct object of an intransitive causative verb'
udver: '2'
---

This is a subtype of [obj]().
We mark direct objects of causative [voice](tr-dep/Voice) intransitive verbs with this subtype,
since the interpretation is different in comparison to a direct object of a non-causative verb.
In general, if the verb is intransitive, direct object indicates the "causee",
the subject of the content verb, or the entity that performs the action.
If the verb is transitive the direct object is the entity that is acted upon as in the non-causative case (see [nmod:cau](nmod-cau)).

~~~ sdparse
Annesi bebeği giydirdi . \n His mother dressed (caused to dress) the baby
obj:cau(giydirdi, bebeği)
~~~

~~~ sdparse
Bebek herkesi sevindirdi . \n The baby causes everyone to be happy
obj:cau(sevindirdi, herkesi)
~~~

~~~ sdparse
Öğretmen dersi kolaylaştırdı . \n The teacher made the course easier
obj:cau(kolaylaştırdı, dersi)
~~~

<!-- Interlanguage links updated Po lis 14 15:35:37 CET 2022 -->

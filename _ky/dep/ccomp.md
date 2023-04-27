---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a predicate is a dependent clause which is
a core argument.
That is, it functions like an object of the predicate.

`ccomp` is used only for direct clausal objects,
i.e., clauses headed by (non-finite)  verbal nouns
in accusative or nominative [Case](ky-feat/Case).
Other clausal arguments in are marked using [advcl]() relation.

~~~ sdparse
Жамгыр жаап жатат деп ойлойм.. \n I think it's raining. .
ccomp(ойлойм, деп)
~~~

~~~ sdparse
Петирдин кошунасы тосмону кызылга боёп койгон.\n Peter's neighbor painted the fence red.
ccomp(койгон, боёп)
~~~

~~~ sdparse
 Ал машина сатып алган, бирок агасынын велосипеди гана болгон . \n He bought a car, but his brother only had a bicycle.
ccomp(болгон, алган)
~~~



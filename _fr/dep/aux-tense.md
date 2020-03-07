---
layout: relation
title: 'aux:tense'
shortdef: 'tense auxiliary'
udver: '2'
---

In 4 French corpora (**UD_French-GSD**, **UD_French-Sequoia**, **UD_French-FQB** and **UD_French-PUD**), tense auxiliaries are annotated with the `aux:tense` relation.
The 3 other French corpora used the `aux` relation in this case.

In French, both _être_ and _avoir_ can be used as tense auxiliaries.

~~~ sdparse
Aldrin s' est marié trois fois \n Aldrin has been married three times
aux:tense(marié,est)
~~~

~~~ sdparse
On a construit sur les ruines \n We built on the ruins
aux:tense(construit,a)
~~~

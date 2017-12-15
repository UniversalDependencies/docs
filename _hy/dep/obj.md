---
layout: relation
title: 'obj'
shortdef: 'direct object'
udver: '2'
---

The direct object of a verb is the noun phrase that denotes the entity acted upon.
In Armenian the direct object is in [nominative case]() for inanimate
words, and in [dative]()case for human/non-human.

Nominative example:

~~~ sdparse
Ես գնեցի մեքենա ։ \n I bought car .
obj(գնեցի, մեքենա)
obj(bought, car)
~~~

Dative example:

~~~ sdparse
Բախվում ենք մեծ խնդիրների ։ \n We-face big problems .
obj(Բախվում ենք, խնդիրների)
obj(We-face, problems)
~~~

In general, if there is just one object, it should be labeled `obj`,
regardless of the morphological case or semantic role that it bears. If there are two or more
objects, one of them should be `obj` and the others should be
[iobj](). In such cases it is necessary to decide what is the most
directly affected object _(patient)._ The one exception is when there is a clausal complement. Then the clausal complement is regarded as a “clausal direct object” and
an object nominal will be an iobj.

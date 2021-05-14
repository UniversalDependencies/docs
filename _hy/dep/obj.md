---
layout: relation
title: 'obj'
shortdef: 'direct object'
udver: '2'
---

The direct object of a verb is the noun that denotes the entity acted upon. Most often the direct object is in the [nominative case](Case) or in [dative](Case) (see the related feature [Animacy]()). Note that certain intransitive (middle voice) verbs take arguments in dative which should be regarded as core based on their syntactic behavior being parallel to the arguments of other transitive verbs (see also the related features [Voice]() and [Subcat]()).

Nominative example:

~~~ sdparse
Նա տեսավ մեքենա ։ \n He saw a-car .
obj(տեսավ, մեքենա)
obj(saw, a-car)
~~~

Dative example:

~~~ sdparse
Նա տեսավ իր աշակերտներին ։ \n He saw his pupils .
obj(տեսավ, աշակերտներին)
obj(saw, pupils)
~~~

Dative example:

~~~ sdparse
Բախվում ենք մեծ խնդիրների ։ \n We-face big problems .
obj(Բախվում, խնդիրների)
obj(We-face, problems)
~~~

In general, if there is just one object, it should be labeled `obj`,
regardless of the morphological case or semantic role that it bears. If there are two or more
objects, one of them should be `obj` and the others should be
[iobj](). In such cases it is necessary to decide what is the most
directly affected object _(patient)._ The one exception is when there is a [clausal complement](ccomp). Then the clausal complement is regarded as a “clausal direct object” and an object nominal will be an `iobj`.

There is more discussion of constructions with multiple objects on the page for [iobj](). 
<!-- Interlanguage links updated Pá kvě 14 11:09:15 CEST 2021 -->

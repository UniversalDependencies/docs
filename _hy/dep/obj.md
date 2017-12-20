---
layout: relation
title: 'obj'
shortdef: 'direct object'
udver: '2'
---

The direct object of a verb is the noun phrase that denotes the entity acted upon. Most often the direct object is in the [nominative case](Case) or in [dative](Case) (see also the related features [Animacy]() and [Voice]()), but there are verbs that require their objects be in other cases.

Nominative example:

~~~ sdparse
Ես գնեցի մեքենա ։ \n I bought car .
obj(գնեցի, մեքենա)
obj(bought, car)
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
directly affected object _(patient)._

There is more discussion of constructions with multiple objects on the page for [iobj](). 

As `obj` will be labelled also the follow examples (called _indirect objects_ or _objects of the nature_ in the Armenian grammar): 

Dative example:

~~~ sdparse
Նա մոտեցավ գետին ։ \n
obj(մոտեցավ, գետին)
~~~

Ablative example:

~~~ sdparse
Նա հեռացավ բարեկամներից ։ \n
obj(հեռացավ, բարեկամներից)
~~~

Instrumental example:

~~~ sdparse
Ես հիանում էի մեր լեռներով ։ \n
obj(հիանում, լեռներով)
~~~

Locative example:

~~~ sdparse
Նա հմտացել է այդ աշխատանքում ։ \n
obj(հմտացել, աշխատանքում)
~~~

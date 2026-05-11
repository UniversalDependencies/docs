---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause which is a core argument. That is, it functions like an object of the verb, or adjective.

~~~ sdparse
Jis sako , kad tu mėgsti plaukti. \n He says that you like to-swim.
ccomp(sako, mėgsti)
ccomp(says, like)
~~~

The `ccomp` label is also used to mark the clausal complement of a complex verbal predicate when the subject of that complement clause is different from the subject of the matrix verb. In such cases, the embedded clause is analyzed as a full clause with its own subject. Contrast `ccomp` with [xcomp](): [xcomp]() is used for an open clausal complement, i.e. a core argument of the main verb whose subject is controlled or shared (e.g. We started to dig). If the subject of the clausal complement is controlled (that is, must be the same as the higher subject or object, with no other possible interpretation) the appropriate relation is [xcomp]().

~~~ sdparse
Viršininkas liepė pradėti kasti. \n The-boss ordered to-start digging.
ccomp(liepė, pradėti)
ccomp(ordered, to-start)
~~~

~~~ sdparse
Aš siūlau valgyti dabar. \n I suggest eating now.
ccomp(siūlau, valgyti)
ccomp(suggest, eating)
~~~

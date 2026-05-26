---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause which is a core argument. That is, it functions like an object of the verb, or
adjective.

~~~ sdparse
Он говорит , что она работает в музее . \n He says , that she works in a museum .
ccomp(говорит, работает)
ccomp(says, works)
~~~

~~~ sdparse
Я рада , что мы встретились . \n I am glad that we met .
ccomp(рада, встретились)
ccomp(glad, met)
~~~

Note that if the clausal complements is nonfinite (infinitive), then it is labeled [xcomp](). In the first sentence below the 
subject of the clausal complement is not controlled (that is, it can be different as the higher subject or object, with no other possible interpretation).

~~~ sdparse
Генерал потребовал , чтобы мы вышли . \n General demanded that we leave .
ccomp(потребовал, вышли)
ccomp(demanded, leave)
~~~

~~~ sdparse
Генерал приказал нам выйти . \n General ordered us to-leave .
xcomp(приказал, выйти)
xcomp(ordered, to-leave)
~~~

[xcomp]() is typical for modal and phase verbs.  

~~~ sdparse
Мы начали писать тест . \n We started to-write test .
xcomp(начали, писать)
xcomp(started, to-write)
~~~

If the correlative pronoun _to_ 'that' etc. is used with the head predicate, then the clausal complements is attached to the pronoun with [acl]():  

~~~ sdparse
Я верю в то , что все будет хорошо . \n I believe in that that everything will be fine .
acl(то, хорошо)
acl(that-14, fine)
~~~

<!-- Interlanguage links updated St 6. května 2026, 20:45:48 CEST -->

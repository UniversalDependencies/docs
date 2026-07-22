---
layout: relation
title: '<title>'
shortdef: '<shortdef>'
udver: '2'
---

The possessive determiner relation holds between a nominal head and a possessive [pronoun](). Even though Middle Persian does not exhibit a distinct paradigm for possessive pronouns, there is a special syntactic pattern that qualifies as possessive determination.
<br>If personal pronouns and the possessive-reflexive pronoun *xwēš* are linked to their head by the *ezāfe* particle just like any other attribute, they are annotated as [nominal modifiers](nmod). If they precede their head directly similar to a determiner, they are annotated as [det:poss]().

- "my/your/his... wife"
~~~ sdparse
xwēš zan \n own woman
det:poss(zan, xwēš)
~~~
~~~ sdparse
zan ī xwēš \n woman EZ own
det(xwēš, ī)
nmod(zan, xwēš)
~~~

- "my father"
~~~ sdparse
man pid \n I father
det:poss(pid, man)
~~~
~~~ sdparse
pid ī man \n father EZ I
det(man, ī)
nmod(pid, man)
~~~

---
layout: relation
title: 'acl:relcl'
shortdef: 'acl:relcl'
---

The `acl:relcl` relation is used for relative clauses modifying
a nominal. The relation points from the head of the nominal to the
head of the relative clause. 

~~~ sdparse
Я увидела мужчину , который любит тебя \n I saw the man who loves you
acl:relcl(мужчину, любит)
acl:relcl(man, loves)
nsubj(любит, который)
nsubj(loves, who)
dobj(любит, тебя)
dobj(loves, you)
~~~

~~~ sdparse
Я увидел мужчину , которого ты любишь  \n I saw the man who you love
acl:relcl(мужчину, любишь)
acl:relcl(man, love)
nsubj(любишь, ты)
nsubj(love, you)
dobj(любишь, которого)
dobj(love, who)
~~~



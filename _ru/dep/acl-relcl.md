---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause modifier'
udver: '2'
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
obj(любит, тебя)
obj(loves, you)
~~~

~~~ sdparse
Я увидел мужчину , которого ты любишь \n I saw the man who you love
acl:relcl(мужчину, любишь)
acl:relcl(man, love)
nsubj(любишь, ты)
nsubj(love, you)
obj(любишь, которого)
obj(love, who)
~~~

~~~ sdparse
Я увидел этого мужчину в саду , в котором я не хотел бы оказаться снова \n I saw that man in the garden , where I would not like to turn up again
obl(увидел, саду)
obl(saw, garden)
acl:relcl(саду, хотел)
acl:relcl(garden, like)
nsubj(увидел, Я)
nsubj(saw, I-17)
obj(увидел, мужчину)
obj(saw, man)
~~~

~~~ sdparse
Мужчина , который всегда носит красную рубашку , никогда не опаздывает  \n A man who always wears a red shirt is never late
acl:relcl(Мужчина, носит)
acl:relcl(man, wears)
nsubj(опаздывает, Мужчина)
nsubj(late, man)
~~~

<!-- Interlanguage links updated Út zář 29 20:23:15 CEST 2020 -->

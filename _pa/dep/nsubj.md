---
layout: relation
title:  'nsubj'
shortdef : 'nominal subject'
udver: '2'
---

See also [cop]().

~~~ sdparse
ਮੈਂ ਗਿਆ \n I went
nsubj(ਗਿਆ, ਮੈਂ)
nsubj(went, I)
~~~

## Dative subjects

~~~ sdparse
ਸਾਨੂੰ ਗੁੱਸਾ ਆਇਆ \n to.us anger came
nsubj(ਆਇਆ, ਸਾਨੂੰ)
nsubj(came, to.us)
obj(ਆਇਆ, ਗੁੱਸਾ)
obj(came, anger)
~~~

~~~ sdparse
ਤੁਹਾਨੂੰ ਸ਼ੋਰ ਸੁਣਾਈ ਦਿੱਤਾ \n to.you noise hearing gave
nsubj(ਦਿੱਤਾ, ਤੁਹਾਨੂੰ)
compound:lvc(ਦਿੱਤਾ, ਸੁਣਾਈ)
obj(ਦਿੱਤਾ, ਸ਼ੋਰ)
nsubj(gave, to.you)
compound:lvc(gave, hearing)
obj(gave, noise)
~~~

## Locative subjects

~~~ sdparse
ਘਰ ਵਿੱਚ ਪੈਸੇ ਹਨ \n home in money are
nsubj(ਪੈਸੇ, ਘਰ)
nsubj(money, home)
case(ਘਰ, ਵਿੱਚ)
case(home, in)
cop(ਪੈਸੇ, ਹਨ)
cop(money, are)
~~~

## Genitive subjects

When clauses are subject to a verb, they generally have the subject in genitive case.

~~~ sdparse
ਉਸਦਾ ਇਹ ਕਹਿਣਾ ਠੀਕ ਨਹੀਂ ਸੀ \n his this saying right not was
nsubj(ਕਹਿਣਾ, ਉਸਦਾ)
nsubj(saying, his)
obj(ਕਹਿਣਾ, ਇਹ)
obj(saying, this)
csubj(ਠੀਕ, ਕਹਿਣਾ)
csubj(right, saying)
cop(ਠੀਕ, ਸੀ)
cop(right, was)
~~~
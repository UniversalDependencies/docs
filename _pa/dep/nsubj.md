---
layout: relation
title:  'nsubj'
shortdef : 'nominal subject'
udver: '2'
---

A nominal subject is the syntactic subject of a clause. In Punjabi, this is protypically the nominative (unmarked) argument to an intransitive or non-perfective transitive verb, or ergative argument to a perfective-aspect transitive verb. Some dialects also only mark the ergative on the third person. See also [cop]().

~~~ sdparse
ਮੈਂ ਗਿਆ \n I went
nsubj(ਗਿਆ, ਮੈਂ)
nsubj(went, I)
~~~

Some less prototypical, but equally valid nominal subjects exist too. Dative, locative, and genitive subjects exist and have properties such as control of reflexives which qualify them for subject hood.

## Dative subjects

These tend to be dependents of experiencer verbs.

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

These are mostly copular clauses, indicating the existence of something somewhere. Other languages can use a dummy pronoun (e.g. English "there is x in y").

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

When clauses are the subject of a verb, they generally have their own subject in genitive case.

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
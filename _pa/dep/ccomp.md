---
layout: relation
title:  'ccomp'
shortdef : 'clausal complement'
udver: '2'
---

Some verbs take clausal complements, which generally go after the verb unlike nominal objects which are pre-verbal.

~~~ sdparse
ਉਹ ਜਾਣਦਾ ਹੈ ਕਿ ਕੁੜੀ ਉੱਥੇ ਗਈ \n He knows is that girl there went
ccomp(ਜਾਣਦਾ, ਗਈ)
ccomp(knows, went)
nsubj(ਜਾਣਦਾ, ਉਹ)
nsubj(knows, He)
mark(ਗਈ, ਕਿ)
mark(went, that)
~~~

## Clausal complements to the copula

When a clause is a predicative complement and the main verb is a copula, we analyse it like a non-copular verb.

~~~ sdparse
ਮੇਰਾ ਖ਼ਿਆਲ ਹੈ ਕਿ ਉਹ ਜਾਵੇਗਾ \n my thought is that he will.go
nsubj(ਹੈ, ਖ਼ਿਆਲ)
nsubj(is, thought)
ccomp(ਹੈ, ਜਾਵੇਗਾ)
ccomp(is, will.go)
mark(ਜਾਵੇਗਾ, ਕਿ)
mark(will.go, that)
~~~

But sometime the clause may be subordinate to a pronoun like ਇਹ *ih* "this", in which case we do treat it like a normal copula. 

~~~ sdparse
ਮੇਰਾ ਖ਼ਿਆਲ ਇਹ ਹੈ ਕਿ ਉਹ ਜਾਵੇਗਾ \n my thought this is that he will.go
nsubj(ਇਹ, ਖ਼ਿਆਲ)
nsubj(this, thought)
cop(ਇਹ, ਹੈ)
cop(this, is)
acl(ਇਹ, ਜਾਵੇਗਾ)
acl(this, will.go)
mark(ਜਾਵੇਗਾ, ਕਿ)
mark(will.go, that)
~~~
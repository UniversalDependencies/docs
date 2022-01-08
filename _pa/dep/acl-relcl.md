---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
udver: '2'
---

Relative clauses in Punjabi must have a relative pronoun in them (as opposed to plain [acl]()). Relative pronouns start with ਜ- *j-*, e.g. ਜੋ *jo* "whoever, whatever", ਜਿੱਥੇ *jitthe* "wherever". Often, these are non-projective since the relative clause is moved to fronted (focus) or final position.

Inside the RC, the relative pronoun should take the expected deprel of the head of the RC, **not** some subordinating deprel like [mark]().

~~~ sdparse
ਮੈਂ ਉਸ ਆਦਮੀ ਨੂੰ ਦੇਖਿਆ ਜੋ ਤੁਹਾਡਾ ਦੋਸਤ ਹੈ \n I that man ACC saw who your friend is
obj(ਦੇਖਿਆ, ਆਦਮੀ)
obj(saw, man)
acl:relcl(ਆਦਮੀ, ਦੋਸਤ)
acl:relcl(man, friend)
nsubj(ਦੋਸਤ, ਜੋ)
nsubj(friend, who)
~~~

~~~ sdparse
ਜੋ ਆਦਮੀ ਤੁਹਾਡਾ ਦੋਸਤ ਹੈ ਮੈਂ ਉਸਨੂੰ ਦੇਖਿਆ \n which man your friend is I him saw
obj(ਦੇਖਿਆ, ਉਸਨੂੰ)
obj(saw, him)
acl:relcl(ਉਸਨੂੰ, ਦੋਸਤ)
acl:relcl(him, friend)
nsubj(ਦੋਸਤ, ਆਦਮੀ)
nsubj(friend, man)
det(ਆਦਮੀ, ਜੋ)
det(man, which)
cop(ਦੋਸਤ, ਹੈ)
cop(friend, is)
~~~

~~~ sdparse
ਬੇਗਮਪੁਰਾ ਇੱਕ ਪਿੰਡ ਹੈ ਜਿੱਥੇ ਸਿਰਫ਼ 160 ਵੋਟਾਂ ਹਨ \n Begumpura one village is where only 160 votes are
nsubj(ਪਿੰਡ, ਬੇਗਮਪੁਰਾ)
nsubj(village, Begumpura)
nsubj(ਵੋਟਾਂ, ਜਿੱਥੇ)
nsubj(votes, where)
acl:relcl(ਪਿੰਡ, ਵੋਟਾਂ)
acl:relcl(village, votes)
~~~

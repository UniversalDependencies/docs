---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
udver: '2'
---

Relative clauses in Punjabi must have a relative pronoun in them (as opposed to plain [acl]()). Relative pronouns start with ਜ- *j-*, e.g. ਜੋ *jo* "whoever, whatever", ਜਿੱਥੇ *jitthe* "wherever". Often, these are non-projective since the relative clause is moved to fronted (focus) or final position.

Inside the RC, the relative pronoun should take the expected deprel of the head of the RC, **not** some subordinating deprel like [mark]().

~~~ sdparse
ਮੈਂ ਉਸ ਆਦਮੀ ਨੂੰ ਦੇਖਿਆ ਜੋ ਤੁਹਾਡਾ ਦੋਸਤ ਹੈ
obj(ਦੇਖਿਆ, ਆਦਮੀ)
acl:relcl(ਆਦਮੀ, ਦੋਸਤ)
nsubj(ਦੋਸਤ, ਜੋ)
~~~

~~~ sdparse
ਜੋ ਆਦਮੀ ਤੁਹਾਡਾ ਦੋਸਤ ਹੈ ਮੈਂ ਉਸਨੂੰ ਦੇਖਿਆ
obj(ਦੇਖਿਆ, ਉਸਨੂੰ)
acl:relcl(ਉਸਨੂੰ, ਦੋਸਤ)
nsubj(ਦੋਸਤ, ਆਦਮੀ)
det(ਆਦਮੀ, ਜੋ)
~~~


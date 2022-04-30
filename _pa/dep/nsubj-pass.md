---
layout: relation
title: 'nsubj:pass'
shortdef: 'passive nominal subject'
udver: '2'
---

A passive nominal subject is a noun phrase which is the syntactic subject of a passive clause, i.e. the deep (non-passivised form) object.

~~~ sdparse
ਹਕੀਮ ਤੋਂ ਮਰੀਜ਼ ਵੇਖਿਆ ਗਿਆ \n doctor by patient seen was
obl:agent(ਵੇਖਿਆ, ਹਕੀਮ)
obl:agent(seen, doctor)
nsubj:pass(ਵੇਖਿਆ, ਮਰੀਜ਼)
nsubj:pass(seen, patient)
aux:pass(ਵੇਖਿਆ, ਗਿਆ)
aux:pass(seen, was)
~~~
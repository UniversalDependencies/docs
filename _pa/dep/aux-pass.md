---
layout: relation
title: 'aux:pass'
shortdef: 'passive auxiliary'
udver: '2'
---

A passive auxiliary in Punjabi is always a form of ਜਾਣਾ *jāṇā* "to go". See also [nsubj:pass]().

~~~ sdparse
ਹਕੀਮ ਤੋਂ ਮਰੀਜ਼ ਵੇਖਿਆ ਗਿਆ \n doctor by patient seen was
nsubj:pass(ਵੇਖਿਆ, ਹਕੀਮ)
nsubj:pass(seen, doctor)
obj(ਵੇਖਿਆ, ਮਰੀਜ਼)
obj(seen, patient)
aux:pass(ਵੇਖਿਆ, ਗਿਆ)
aux:pass(seen, was)
~~~
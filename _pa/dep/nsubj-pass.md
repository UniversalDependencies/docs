---
layout: relation
title: 'nsubj:pass'
shortdef: 'passive nominal subject'
udver: '2'
---

A passive nominal subject is a noun phrase which is the syntactic subject of a passive clause. These are not case marked with the ergative, but rather with one of several possible postpositions: ਵੱਲੋਂ *vallõ*, ਕੋਲੋਂ *kolõ*, ਤੋਂ *tõ*, or in some literary language ਦੁਆਰਾ *duārā*. See also [aux:pass]()

~~~ sdparse
ਹਕੀਮ ਤੋਂ ਮਰੀਜ਼ ਵੇਖਿਆ ਗਿਆ \n doctor by patient seen was
nsubj:pass(ਵੇਖਿਆ, ਹਕੀਮ)
nsubj:pass(seen, doctor)
obj(ਵੇਖਿਆ, ਮਰੀਜ਼)
obj(seen, patient)
aux:pass(ਵੇਖਿਆ, ਗਿਆ)
aux:pass(seen, was)
~~~

~~~ sdparse
ਮੇਰੇ ਕੋਲੋਂ ਨਹੀਂ ਤੁਰਿਆ ਜਾਵੇਗਾ \n me by not walked will.be.able
nsubj:pass(ਤੁਰਿਆ, ਮੇਰੇ)
aux(ਤੁਰਿਆ, ਜਾਵੇਗਾ)
nsubj:pass(walked, me)
aux(walked, will.be.able)
~~~
---
layout: relation
title:  'obl:agent'
shortdef : 'agent modifier'
udver: '2'
---

The agent modifier is the semantic/deep subject which has been passivised, surfacing as an oblique. These are not case marked with the ergative, but rather with one of several possible postpositions: ਵੱਲੋਂ *vallõ*, ਕੋਲੋਂ *kolõ*, ਤੋਂ *tõ*, or in some literary language ਦੁਆਰਾ *duārā*. See also [aux:pass]().

~~~ sdparse
ਹਕੀਮ ਤੋਂ ਮਰੀਜ਼ ਵੇਖਿਆ ਗਿਆ \n doctor by patient seen was
obl:agent(ਵੇਖਿਆ, ਹਕੀਮ)
obl:agent(seen, doctor)
nsubj:pass(ਵੇਖਿਆ, ਮਰੀਜ਼)
nsubj:pass(seen, patient)
aux:pass(ਵੇਖਿਆ, ਗਿਆ)
aux:pass(seen, was)
~~~

~~~ sdparse
ਮੇਰੇ ਕੋਲੋਂ ਨਹੀਂ ਤੁਰਿਆ ਜਾਵੇਗਾ \n me by not walked will.be.able
obl:agent(ਤੁਰਿਆ, ਮੇਰੇ)
aux(ਤੁਰਿਆ, ਜਾਵੇਗਾ)
obl:agent(walked, me)
aux(walked, will.be.able)
~~~
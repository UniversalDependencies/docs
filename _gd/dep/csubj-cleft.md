---
layout: relation
title:  'csubj:cleft'
shortdef : 'relative clause modifier'
udver: '2'
---

There are two constructions that use a copula and a relative clause modifier.
They differ from Irish in some respects.

* _'S ann_ or _Sann_ fronts anything that isn't an NP.
This is then linked to the relative clause modifier by `csubj:cleft`.
* _'S e_ or _'Se_ fronts an NP, which is linked to a relative clause modifier of indefinite reference by `csubj:cleft`.
* Where there is a definite NP, this is not in a relative clause but linked by `nsubj`.

Note that as in Irish the verbal particle that introduces `csubj:cleft` is always labelled `mark:prt`. 

### Examples

* _Air m' onair, 's e gnothaich cudromach a tha sa chontract._ "On my honour, the contract is important business." (f02\_078)

~~~ sdparse
Air m' onair, 's e gnothaich cudromach a tha sa chontract. \n On my honour, COP EXPL business important PART is in\_the contract
csubj:cleft(gnothaich, tha)
cop(gnothaich, 's)
fixed('s, e)
~~~

* _Sann á bàrdachd a bha iad a' faighinn am beò-shlàint._ "It is from poetry they were getting their livelihood." (pw07\_037)

~~~ sdparse
Sann á bàrdachd a bha iad a' faighinn am beò-shlàint. \n COP EXPL from poetry PART was they PART getting their livelihood.
csubj:cleft(bàrdachd, bha)
cop(bàrdachd, Sann)
~~~
<!-- Interlanguage links updated St lis 3 20:58:48 CET 2021 -->

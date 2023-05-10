---
layout: relation
title:  'csubj:cleft'
shortdef : 'relative clause modifier'
udver: '2'
---

There are two constructions that use a copula and a relative clause modifier, _'S ann_ and _'S e_.

* _'S ann_ or _Sann_ fronts adjectives, adverbs, APs, PPs and adverbial clauses.
** If what has been fronted has no overt subject, as is the case for adjectives, adverbs, APs and PPs, then it is linked to the relative clause modifier by `csubj:cleft`.
** However, if it is itself a clause with an explicit head, then see `csubj:outer`.
* _'S e_ or _'Se_ fronts an NP, which is linked to a relative clause modifier of indefinite reference by `csubj:cleft`.
* Where there is a definite NP, this is not in a relative clause but linked by `nsubj`.

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
<!-- Interlanguage links updated Út 9. května 2023, 20:04:09 CEST -->

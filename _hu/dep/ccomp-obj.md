---
layout: relation
title: 'ccomp:obj'
shortdef: 'clausal complement (object)'
udver: '2'
---

Clausal objects are marked with ccomp:obj,
clauses that express a core dependent of the main verb but are not objects are marked with ccomp:obl,
and clauses that express a predicative dependent of the main verb are marked with ccomp:pred.

“Iraq has announced it will not renew its oil supply contracts.”

~~~ sdparse
Irak bejelentette : nem újítja meg olajszállítási szerződéseit . \n Iraq announced : not -news re- oil-supply its-contracts
nsubj(bejelentette, Irak)
ccomp:obj(bejelentette, újítja)
punct(újítja, :-3)
advmod(újítja, nem)
compound:preverb(újítja, meg)
obj(újítja, szerződéseit)
amod:att(szerződéseit, olajszállítási)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:17 CET 2020 -->

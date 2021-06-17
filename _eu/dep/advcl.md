---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier (`advcl`) is a clause which modifies a verb or other predicate (adjective, etc.),
as a modifier, not as a core complement. This includes temporal clauses, consequences, conditional clauses, purpose clause, etc. The dependent must be clausal (otherwise, it is an [advmod]()) and the dependent is the main predicate of the clause.

*Askatasunean **oinarritutako** alternatiba bat ematea .*

*To give an alternative **based on** freedom  .*

~~~ sdparse
Askatasunean oinarritutako alternatiba bat ematea . \n  Freedom based_on alternative_an to give .

nmod(oinarritutako-2, Askatasunean-1)
advcl(alternatiba-3, oinarritutako-2)
nummod(alternatiba-3, bat-4)
dobj(ematea-5, alternatiba-3)
punct(ematea-5, .-6)
~~~



*Lapurdin **sorturiko** lehenbiziko euskal idazle-taldea .*

*The first Basque writer-group **created** in Lapurdi .*

~~~ sdparse
Lapurdin sorturiko lehenbiziko euskal idazle-taldea . \n  The first Basque writer-group created in Lapurdi .

nmod(sorturiko-2, Lapurdin-1)
advcl(idazle-taldea-5, sorturiko-2)
amod(idazle-taldea-5, lehenbiziko-3)
nmod(idazle-taldea-5, euskal)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:45 CEST 2021 -->

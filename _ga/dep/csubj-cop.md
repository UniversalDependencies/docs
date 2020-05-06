---
layout: relation
title:  'csubj:cop'
shortdef : 'relative clause modifier'
udver: '2'
---

A *clausal copular subject* (`csubj:cop`) is a UD Irish subtype, used to label a clause that acts as the
subject of another (copular) clause. As in all copular clauses, the
predicate acts as the head of the clause and hence it is also the
governor of the copular subject. The copular construction may consist of a copula followed by a verb particle or an adjective or it may be emphatic in terms of meaning (in which case the noun is raised for emphasis), as outlined in the examples below. 

### Example

#### Verbal ####

_Ba ghearr gur <b>fhás</b> drochiontaoibh Kitchener_ `It didn't take long for Kitchener's distrust to <b>grow</b>'

~~~ sdparse
Ba ghearr gur fhás drochiontaoibh Kitchener \n Was short that(past)_which grew distrust Kitchener
csubj:cop(ghearr, fhás)
~~~

_Is dócha go <b>raibh</b> an ceart aici_  `It is likely that she <b>was</b> correct'

~~~ sdparse
Is dócha go raibh an ceart aici \n Is probable that was the right at_her
csubj:cop(dócha, raibh)
~~~

#### Adjectival ####

_Is fíor gur <b>láidre</b> Fianna Fáil ag cosaint na neodrachta ná Fine Gael faoi láthair_  `It is true that Fianna Fáil are <b>better</b> at protecting neutrality than Fine Gael at the moment'

~~~ sdparse
Is fíor gur láidre Fianna Fáil ag cosaint na neodrachta ná Fine Gael faoi láthair \n Is true that stronger Fianna Fáil at protecting of_the neutrality Fine Gael under presence
csubj:cop(fíor, láidre)
~~~

#### Nominal ####

_Ní féidir leat iachall a <b>chur</b> orm é a dhéanamh._  `You can't <b>make</b> me do it.'

~~~ sdparse
Ní féidir leat iachall a chur orm é a dhéanamh . \n NEG able with_you constraint to put on_me it to do .
obj(chur, iachall) .
csubj:cop(féidir, chur)
obj(dhéanamh, é)
xcomp(chur, dhéanamh)
~~~

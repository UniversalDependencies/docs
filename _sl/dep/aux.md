---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
udver: '2'
---

An auxiliary of a clause is a function word associated with a verbal predicate that expresses categories such as tense, mood, aspect, voice or evidentiality. In contrast to the languages and grammatical theories that also categorize other function words as auxiliaries, the `aux` relation in Slovene is used exclusively for the auxiliary verb **biti** (_to be_), e.g. to form non-present tense. 

~~~ sdparse
na kar so/AUX udeleženci reagirali z gromkim aplavzom
aux(reagirali,so)
~~~
~~~ sdparse
Za to bosta/AUX poskrbela Nikki in njen štirinožni ljubljenček
aux(poskrbela,bosta)
~~~
~~~ sdparse
Zakaj bi/AUX divjali okoli , če to ni potrebno
aux(divjali,bi)
~~~
~~~ sdparse
Takrat naj bi/AUX se bil/AUX proti njemu zagnal Robi .
aux(zagnal,bi)
aux(zagnal,bil)
~~~
~~~ sdparse
Zaradi njegovega polhastega spanja je/AUX bila/AUX večkrat jezna .
aux(jezna,je)
cop(jezna,bila)
~~~

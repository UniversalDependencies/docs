---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
udver: '2'
---

An auxiliary of a clause is a function word associated with a verbal predicate that expresses categories such as tense, mood, aspect, voice or evidentiality. In contrast to the languages and grammatical theories that also categorize other function words as auxiliaries, the `aux` relation in Slovene is used exclusively for the auxiliary verb **biti** (_to be_), e.g. to form non-present tense. 

~~~ sdparse
na kar so/AUX udeleženci reagirali z gromkim aplavzom \n to which they-aux-PAST/AUX participants react with loud applause
aux(reagirali,so)
aux(react,they-aux-PAST)
~~~
~~~ sdparse
Za to bosta/AUX poskrbela Nikki in njen štirinožni ljubljenček \n To this will/AUX tend Nikki and her four-legged pet
aux(poskrbela,bosta)
aux(tend,will)
~~~
~~~ sdparse
Zakaj bi/AUX divjali okoli , če to ni potrebno \n Why would-you/AUX run rampant , if it isn't necessary
aux(divjali,bi)
aux(run,would-you)
~~~
~~~ sdparse
Takrat naj bi/AUX se bil/AUX proti njemu zagnal Robi . \n Then was supposed/AUX to have/AUX towards him run Robi .
aux(zagnal,bi)
aux(zagnal,bil)
aux(run,supposed)
aux(run,have)
~~~
~~~ sdparse
Zaradi njegovega polhastega spanja je/AUX bila/AUX večkrat jezna . \n Because-of his deep sleep she-aux-PAST/AUX was/AUX often angry . 
aux(jezna,je)
cop(jezna,bila)
aux(angry,ahe-aux-PAST)
cop(angry,was)
~~~
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:28 CET -->

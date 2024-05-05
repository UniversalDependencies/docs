---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject (`nsubj`) is a noun or nominal phrase that performs the syntactic role of subject in a clause. It is obtained by answering the question *kdo ali kaj*. In Slovene, this relation is typically used for nouns in the **nominative case**. It is also used for nouns in the genitive case when the nouns are negated or when they appear together with expressions of quantity.  

~~~ sdparse
Kava povečuje izločanje želodčnega soka \n Coffee increases secretion of-digestive juices
nsubj(povečuje,Kava)
nsubj(increases,Coffee)
~~~
~~~ sdparse
Poleg tega je pa zadeva lahko tudi ustavno sporna . \n Besides this is though the-thing possibly also constitutionally questionable . 
cop(sporna,je)
nsubj(sporna,zadeva)
cop(questionable,is)
nsubj(questionable,the-thing)
~~~
~~~ sdparse
Zato tudi ne manjka odzivov nanjo \n That-is-why also not there-is-shortage of-reactions to-it
nsubj(manjka,odzivov)
nsubj(there-is-shortage,of-reactions)
~~~
~~~ sdparse
prek pobočnice poteka 15 ozkih valovitih prog \n across the-lateral-line run 15 narrow wavy stripes
nsubj(poteka,prog)
nsubj(run,stripes)
~~~

The `nsubj` relation is not used for the so-called logical subjects—agents or experiencers of an action on the semantic level which on the syntactic level perform a function other than that of the subject in the nominative case. These can range from prepositional phrases (e. g. *<ins>pri nas</ins> jemo*) to objects in the accusative (*<ins>Mijo</ins> zebe*) or dative case (*<ins>meni</ins> se je zdelo*). Such structures are marked according to their superficial syntactic function (that is, as `obl`, `obj`, or `iobj`) and not according to their semantic role.
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:26 CEST -->

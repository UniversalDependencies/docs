---
layout: relation
title:  'conj'
shortdef : 'conjunct'
udver: '2'
---

[conj]() is the dependency relation between two elements connected with a coordinating conjunction, such as *and*, *or*, etc.
Conjuctions are treated asymmetrically: the head of the relation is the first conjunct and all the other conjuncts depend on it via the [conj]() dependency relation in a chain relation. Coordination may also be asyndetic, which means that the coordinating conjunction may be omitted and a punctuation mark may be used instead, usually a comma (,). 

In Pomak, the [conj]() dependency relations mainly use the coordinating conjunctions *i* "and", *íli* "or",  
as well as the adversatives *ála* "but" and *pak* "but", or just a plain comma (,): 

~~~ sdparse
magáreso je stáro i jáko 
"the donkey is old and strong"                
conj (stáro, jáko) 
cc (jáko, i)
~~~ 

~~~ sdparse
magáreso je stáro alá  jáko 
"the donkey is old but strong"
conj (stáro, jáko)  
cc (jáko, ála)
~~~ 

~~~ sdparse
magáreso je debélo, stáro i jáko
"the donkey is fat, old and strong"
conj (debélo, stáro)
conj (stáro, jáko)
~~~ 

~~~ sdparse
dvamína mláde na 18 i na 19 godíny fáti astinomíjena 
lit: two joungsters at 18 and 19 years caught police-the
"the police caught two joungsters 18 and 19 years old"
nummod (godíny, 19)
case (na, godíny)
cc (19, i)
conj (19, 18)
conj (na, na)
~~~ 

~~~ sdparse
harésavot mi stáry rabaty, kámatny i kaménøvy 
lit: pleases to-me old things, nice and stone  
"I like old things, nice and stone ones"  
amod(rabaty, stáry)
conj(stáry, kámatny)
conj(kámatny, kaménøvy)
~~~ 

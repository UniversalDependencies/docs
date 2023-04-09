---
layout: relation
title:  'conj'
shortdef : 'conjunct'
udver: '2'
---

[conj]() is the dependency relation between two elements connected with a coordinating conjunction, such as *and*, *or*, etc.
[conj]() relations (coordinations) are treated asymmetrically: the head of the relation is the first conjunct and all the other conjuncts depend on it via the [conj]() dependency relation. Coordination may also be asyndetic, which means that the coordinating conjunction may be omitted and a punctuation mark may be used instead, usually a comma (,). 

In the Pomak treebank, the [conj]() dependency relations mainly use the coordinating conjunctions *i* "and", *íli* "or",  as well as the adversatives *ála* "but" and *pak* "but", or just a plain comma (,): 

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
conj (debélo, jáko)
~~~ 

~~~ sdparse
dvamína mláde na 18 i na 19 godíny fáti astinomíjena 
lit: two youngsters at 18 and 19 years caught police-the
"the police caught two youngsters 18 and 19 years old"
nummod (godíny, 18)
case (na, godíny)
cc (19, i)
conj (18, 19)
case (na, 19)
~~~ 

~~~ sdparse
harésavot mi stáry rabaty, kámatny i kaménøvy 
lit: pleases to-me old things, nice and stone  
"I like old things, nice and stone ones"  
amod(rabaty, stáry)
conj(stáry, kámatny)
conj(stáry, kaménøvy)
~~~ 

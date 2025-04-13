---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject (`nsubj`) is a nominal which is the syntactic subject and the proto-agent of a clause. It is expressed by the nominative. Note that Classical Armenian is a pro-drop language and a personal pronoun as subject is often omitted. 
The `nsubj` relation is also used for the nominal subject of a passive verb or verb group, even though the subject is then not typically the proto-agent argument due to valency changing operations. In Classical Armenian, the subtype [nsubj:pass]() is used in such cases. 
In case of the syntactic subject of a causative verb, the subtype [nsubj:caus]() is used.

~~~ sdparse
հրեշտակ Տեառն ի տեսլեան երեւէր \n an angel of the Lord appeareth in a dream
nsubj(երեւէր, հրեշտակ)
nsubj(appeareth, angel)
~~~

When the proclitic particle _զ=_/_z=_, which otherwise typically marks the referentially prominent direct object [obj](), specifies a sentential argument expressed by a relative clause, it can be attached to the subject of the clause in the nominative.

~~~ sdparse
գործեն ՝ զ որ ոչ էր արժան գործել ի շաբաթու \n they do that which is not lawful to do upon the sabbath day
ccomp(գործեն, արժան)
nsubj(արժան, որ)
det(որ, զ)
~~~

The logical subject of transitive verbs is typically expressed by the genitive case in the periphrastic perfect tenses. In such cases, [obl:arg]() is used.


### References

Jensen, Hans. 1959. _Altarmenische Grammatik._ Heidelberg: Winter.

Klein, Jared. 2017. The syntax of Armenian. In: J. Klein et al. (eds.), _Handbook of comparative and historical Indo-European linguistics_. Berlin, Boston: Walter de Gruyter: 1097‒1115.
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:07 CET -->

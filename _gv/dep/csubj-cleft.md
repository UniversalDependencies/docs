---
layout: relation
title:  'csubj:cleft'
shortdef : 'clausal subject of cleft construction'
udver: '2'
---

Again following the Irish treebank, we analyse cleft constructions
in Manx in line with other copular constructions: COP PRED SUBJ.
In contrast to English, Manx clefts are much less restrictive with regards to the type of element that can be fronted: nouns, prepositional phrases, adjectives and verbal nouns, for example.

### Examples

#### Nominal fronting ####

~~~ sdparse
She sheelaght t' ayn \n Is syllabary that-is in-it
cop(sheelaght, She)
csubj:cleft(sheelaght, t')
~~~

#### Prepositional phrase fronting ####

~~~ sdparse
Ayns y choorse echeysyn va Ammizabad e vac \n In the course at-himself was Ammizabad his son
case(choorse, Ayns)
det(choorse, y)
csubj:cleft(choose, va)
nsubj(va, Ammizabad)
det(vac, e)
appos(Ammizabad, vac)
~~~

#### Adjective predicate fronting ####

~~~ sdparse
S' fardalee ta smooinaghtyn deiney marvaanagh \n Is miserable are thoughts of-men mortal
cop(fardalee, S')
csubj:cleft(fardalee, ta)
nsubj(ta, smooinaghtyn)
nmod(smooinaghtyn, deiney)
amod(deiney, marvaanagh)
~~~

---
layout: relation
title: 'parataxis:conj'
shortdef: 'parataxis conjunct'
udver: '2'
---

 For FrenchSpoken, the `parataxis:conj` relation is used to link two juxtaposed illocutary units. 

~~~ sdparse
Marie est restée chez elle : elle était malade toute la soirée. \n Marie stayed at home: she was thick all night.
parataxis:conj(restée,malade)
~~~

N.B.: The two clauses linked by the `parataxis:conj` relation could be considered as two independent illocutary units (i.e. two independent syntax dependency trees). 
In that case, the `parataxis:conj` link becomes useless and the two illocutary units are annotated seperately.
Note also that the `parataxis:conj` relation is used to annotate written corpora (i.e. it is not used to annotate oral corpora). 

There are five more subrelations that FrenchSpoken uses: [parataxis:discourse](), [parataxis:dislocated](), [parataxis:insert](), [parataxis:obj]() and [parataxis:parenth]().


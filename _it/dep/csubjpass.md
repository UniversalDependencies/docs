---
layout: relation
title: 'csubjpass'
shortdef: 'clausal passive subject'
udver: '2'
---

A clausal passive subject is a clausal syntactic subject of a passive clause (or more generally, any voice where the proto-agent argument does not become the subject of the clause). 

~~~ sdparse
Ci viene spiegato come fossero fatti , in gran parte , da giovani ebrei 
csubjpass(spiegato, fatti)
auxpass(spiegato, viene)
iobj(spiegato, Ci)
aux(fatti, fossero)
mark(fatti, come)
~~~
~~~ sdparse
Gli venne chiesto se si ricordasse di Honoré
csubjpass(chiesto, ricordasse)
~~~
~~~ sdparse
Mi è stato detto che il gruppo socialista vorrebbe che questo punto venisse ritirato
csubjpass(detto, vorrebbe)
ccomp(vorrebbe, ritirato)
iobj(detto, Mi)
aux(detto, è)
auxpass(detto, stato)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:17 CEST 2020 -->

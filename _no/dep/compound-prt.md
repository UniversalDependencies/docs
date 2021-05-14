---
layout: relation
title: 'compound:prt'
shortdef: 'compound:prt'
udver: '2'
---
This language-specific relation is used for verbal particles in Norwegian and describes the relation of the particle to its verbal head. 

Particles exhibit a number of syntactic properties which sets them apart from regular prepositions. For instance, a pronominal object may intercede the verb and the preposition in the particle case *satte den på* "put it on", but not in the case of a regular preposition and its complement _\*lette den etter_ "\*looked it for",  and only complements of a preposition may occur in an impersonal passive *Det ble lett etter den nye boka* "It was looked for the new book", but an object in a particle construction may not _\*Det ble satt den på_ "\*It was put it on".

~~~ sdparse
Den gang ble alt samlet inn \n That time all was collected
compound:prt(samlet,inn)
~~~

~~~ sdparse
Regjeringen har lagt frem et raust statsbudsjett \n The government has put forward a generous budget
compound:prt(lagt,frem)
~~~

~~~ sdparse
Forskningsrådet delte onsdag kveld ut to sentrale priser \n The research council handed out to central prizes Wednesday evening
compound:prt(delte,ut)
~~~

**References**
Kari Kinn, Per Erik Solberg and Pål Kristian Eriksen. "[NDT Guidelines for Morphological Annotation](http://www.nb.no/sbfil/dok/20140314_guidelines_ndt_english.pdf)". National Library Tech Report.

<!-- Interlanguage links updated Pá kvě 14 11:08:57 CEST 2021 -->

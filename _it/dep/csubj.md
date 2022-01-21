---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

A clausal subject is a clausal syntactic subject of a clause, i.e., the subject is itself a clause. The governor of this relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb. The dependent is the main lexical verb or other predicate of the subject clause. 

Examples:

~~~ sdparse
È ora che il divario con l' uomo venga salvato
csubj(ora, salvato)
aux(salvato, venga)
~~~

~~~ sdparse
È stato facile ricostruire le telefonate
csubj(facile, ricostruire)
aux(facile, È)
cop(facile, stato)
~~~

~~~ sdparse
Sbarcare a l' aeroporto di Kinshasa è una vera e propria avventura
csubj(avventura, Sbarcare)
cop(avventura, è)
~~~

**NB** Note that when the clause is the subject of a passive clause (or more generally, any voice where the proto-agent argument does not become the subject of the clause), it should be tagged with the specialized subtype [csubj:pass]().” 

<!-- Interlanguage links updated St lis 3 20:58:48 CET 2021 -->

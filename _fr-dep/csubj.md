---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

A clausal subject is a clausal syntactic subject of a clause, i.e., the subject is itself a clause. The governor of this relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb.

~~~ sdparse
Ce qu'il dit m' embête . \n What he says bothers me .
csubj(embête, dit)
~~~

In FrenchSpoken we also use the `csubj` relation. Here is an example from FrenchSpoken :

~~~ sdparse
créer des choses qui durent m'a paru être essentiel \n creating things that last seemed essential to me 
csubj(paru, créer)
~~~

---
layout: relation
title: 'parataxis:discourse'
shortdef: 'parataxis discourse'
udver: '2'
---

The `parataxis:discourse` relation is used for associated illocutary units. Contrary to parentheticals (for which the [parataxis:parenth]() relation is used), the associated units do not allow for expansions.
Additionally those clauses mostly have first or second person subjects (or _on_). For instance _je pense_, _tu vois_, _tu penses pas ?_, _on dirait_ etc.
For other discourse elements such as interjections we use the standard [discourse]() relation.

~~~ sdparse
Il aurait fallu tourner à droite, tu penses pas ? \n We should have turned left, don't you think?
parataxis:discourse(fallu, penses)
~~~ 

Here is an example from FrenchSpoken:

~~~ sdparse
autrefois oui oui c'était pas le cas euh je veux dire euh \n in the past yes yes it wasn't the case uh I mean uh
parataxis:discourse(cas, veux)
~~~

There are five more subrelations that FrenchSpoken uses: [parataxis:dislocated](), [parataxis:insert](), [parataxis:obj](), [parataxis:parenth]() and [parataxis:conj]().



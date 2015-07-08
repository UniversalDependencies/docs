---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
---

This document is a placeholder for the language-specific documentation
for `advcl`.

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.), as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose clause, etc. The dependent must be clausal (or else it is an advmod) and the dependent is the main predicate of the clause.

~~~ sdparse
Me vió mientras lavaba los platos.
advcl(vió, lavaba)
~~~
~~~ sdparse
Le habló para crear una cuenta 
advcl(habló, crear)
~~~
~~~ sdparse
Estaba cansado cuando lo vi 
advcl(cansado, vi)
~~~

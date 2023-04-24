---
layout: relation
title: 'nsubj:outer'
shortdef: 'outer clause nominal subject'
udver: '2'
---

This relation specifies a nominal subject of a copular clause whose predicate is itself a clause, 
to signal that it is not the subject of the nested clause.



~~~ sdparse
Το πρόβλημα είναι ότι αυτή η κατάσταση διαρκεί.
nsubj:outer(διαρκεί, πρόβλημα)
det(πρόβλημα, το)
cop(διαρκεί, είναι)
mark(διαρκεί, ότι)
nsubj(διαρκεί, κατάσταση)
det(κατάσταση, αυτή)
det(κατάσταση, η)
root(-ROOT-, διαρκεί)
~~~

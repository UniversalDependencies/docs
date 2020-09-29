---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
---

A clausal complement of a verb or adjective is a finite dependent clause which functions like an object of the verb or adjective.

~~~ sdparse
Διαβεβαίωσε ότι οι εθελοντές θα συνεχίσουν το έργο τους .
ccomp(Διαβεβαίωσε, συνεχίσουν)
~~~

For clausal complements for nouns, see `acl` .

For clausal complements where the subject of the complement clause obligatorily 
corefers with an argument (subject or object) of the higher clause, see `xcomp`.

~~~ sdparse
θέλει να αρχίσουν να γράφουν
ccomp(θέλει, αρχίσουν)
xcomp(αρχίσουν, γράφουν)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:22 CEST 2020 -->

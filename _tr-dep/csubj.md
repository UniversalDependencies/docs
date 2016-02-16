---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
---

A clausal subject is a clausal syntactic subject of a clause, i.e., the subject is itself a clause.

~~~ sdparse
Kitabı oku –manız gerek . \n You need to read the book (You reading the book is necessary)
csubj(gerek, –manız)
~~~

~~~ sdparse
Kitabı oku –mak gerek . \n You need to read the book (Reading the book is necessary)
csubj(gerek, –mak)
~~~

TODO: link to the explanation of splitting of subordinating suffixes.

**The following needs more discussion**
We also analyze the nominal predicates with clausal subjects formed by subordinating conjunction _ki_ similarly.
In the METU-Sabancı treebank they are marked (somewhat inconsistently) as modifiers rather than main predicates.

~~~ sdparse
İyi ki okumuşsun . \n Good that you have read (that you read it is good)
csubj(İyi, okumuşsun)
~~~

~~~ sdparse
Tabii ki okudum . \n Of course I read it (that I read it is natural)
csubj(Tabii, okumuşsun)
~~~


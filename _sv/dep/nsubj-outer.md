---
layout: relation
title: 'nsubj:outer'
shortdef: 'outer clause nominal subject'
udver: '2'
---

This relation specifies a nominal subject of a copular clause whose predicate is itself a clause, 
to signal that it is not the subject of the nested clause.

See discussion of [Predicate Clauses](/u/overview/complex-syntax.html#predicate-clauses).

~~~ sdparse
-ROOT- Problemet är att detta aldrig har testats \n The problem is that this has never been tried
nsubj:outer(testats, Problemet)
cop(testats, är)
mark(testats, att)
nsubj:pass(testats, detta)
aux(testats, har)
advmod(testats, aldrig)
root(-ROOT-, testats)
~~~


~~~ sdparse
-ROOT- Det var för att Kim är så trött \n It was because Kim is so tired

nsubj:outer(trött, Det)
mark(trött, för)
mark(trött, att)
cop(trött, var)
nsubj(trött, Kim)
cop(trött, är)
root(-ROOT-, trött)
~~~

~~~ sdparse
My question is : was that really true ?
nsubj:outer(true, question)
cop(true, is)
cop(true, was)
nsubj(true, that)
advmod(true, really)
~~~

There may be an outer subject with no inner subject:

~~~ sdparse
Det viktigaste är att hålla sig lugn . \n The important thing is to keep calm .
nsubj:outer(hålla, viktigaste)
cop(hålla, är)
mark(hålla, att)
xcomp(hålla, lugn)
~~~


The clausal counterpart of this relation is [csubj:outer]().

Only subjects are required to be distinguished in this way. There may, for example, be inner and outer copulas, both attaching as [cop]():

~~~ sdparse
Problemet är att han är sjuk . \n The problem is that he is ill .
nsubj:outer(sjuk, Problemet)
cop(sjuk, är)
mark(sjuk, att)
cop(sjuk, är)
~~~

The `:outer` subtype is *not* intended for most nominal subjects of copular clauses—only those where the predicate is itself a clause. 
Plain [nsubj]() (or another subtype) will be appropriate if the copular clause predicate is a nominal, adjective, etc.:

~~~ sdparse
Problemet är hans inställning \n The problem is his attitude 
nsubj(inställning, Problemet)
~~~

~~~
<!-- Interlanguage links updated Út 9. května 2023, 20:04:24 CEST -->

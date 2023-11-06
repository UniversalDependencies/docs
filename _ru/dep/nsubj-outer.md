---
layout: relation
title: 'nsubj:outer'
shortdef: 'outer clause nominal subject'
udver: '2'
---

This relation specifies a nominal subject of a copular clause whose predicate is itself a clause, 
to signal that it is not the subject of the nested clause.
See discussion of [Predicate Clauses](../overview/complex-syntax.html#predicate-clauses).

~~~ sdparse
-ROOT- Зима - это когда выпадает снег . \n Winter is when the snow falls .
nsubj:outer(выпадает, Зима)
expl(выпадает, это)
advmod(выпадает, когда)
nsubj(выпадает, снег)
root(-ROOT-, выпадает)
nsubj:outer(falls, Winter)
cop(falls, is)
advmod(falls, when)
nsubj(falls, snow)
root(-ROOT-, falls)
~~~

~~~ sdparse
Главный лозунг Европы - разнообразие объединяет . \n The main slogan of Europe - diversity unites .
adj(лозунг, Главный)
nsubj:outer(лозунг, объединяет)
nmod(лозунг, Европы)
nsubj(разнообразие, объединяет)
adj(slogan, Главный)
nsubj:outer(slogan, unites)
nmod(slogan, Европы)
nsubj(diversity, unites)
~~~

There may be an outer subject with no inner subject:

~~~ sdparse
Главное сохранять спокойствие . \n The important thing is to keep calm .
nsubj:outer(сохранять, Главное)
obj(сохранять, спокойствие)
nsubj:outer(keep, thing)
cop(keep, is)
mark(keep, to)
xcomp(keep, calm)
~~~

The clausal counterpart of this relation is [csubj:outer]().

The `:outer` subtype is *not* intended for most nominal subjects of copular clauses—only those where the predicate is itself a clause. 
Plain [nsubj]() (or another subtype) will be appropriate if the copular clause predicate is a nominal, adjective, etc.:

~~~ sdparse
Эта книга - отличная . \n That book is very good .
nsubj(отличная, книга)
nsubj(good, book)
~~~

~~~ sdparse
Название книги - " Война и мир " . \n The title of the book is War and Peace .
nsubj(Война, Название)
nsubj(War, title)
~~~
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:10 CET -->

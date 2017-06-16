---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation is one of three relations for multiword expressions (MWEs) (the other two being `fixed` and `flat`). It is used for 

- any kind of X<sup>0</sup> compounding: noun compounds (e.g., *phone book*), but also verb and
adjective compounds that are more common in other languages (such as Persian or Japanese light verb constructions). 

~~~ sdparse
Phone book
compound(book, Phone)
~~~

- for particle verbs (with the subtype `compound:prt`):

~~~ sdparse
put up
compound:prt(put, up)
~~~

- for serial verbs (with the subtype `compound:svc`):

~~~ sdparse
Musa bé lá èbi \n Musa came took knife
nsubj(bé, Musa)
compound:svc(bé, lá)
obj(bé, èbi)
~~~

The `compound` relation (nor any subtype thereof) is not used to link an inherently reflexive verb with the reflexive morpheme, despite the similarity of this construction to particle verbs. The current UD guideline is to use an appropriate [subtype](/2015-08-23-uppsala/clitics.html) of the [expl]() relation.

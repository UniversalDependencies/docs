---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation is one of three relations for multiword expressions (MWEs) (the other two being fixed and flat). It is used for :

- noun compounds 

~~~ conllu
# visual-style 2 1 compound	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
1	farm	farm	NOUN	NOUN	_	2	compound	_	_
2	work	work	NOUN	NOUN	_	0	root	_	_
~~~


- particle verbs (with the subtype [compound:prt]() )

- reduplicated compounds (with the subtype [compound:redup]() )

- serial verbs (with the subtype [compound:svc]() )

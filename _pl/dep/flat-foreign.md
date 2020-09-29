---
layout: relation
title: 'flat:foreign'
shortdef: 'foreign words'
udver: '2'
---
The `flat:foreign` relation is used in [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) to label sequences of foreign words. These are given
a linear analysis: the head is the first token in the foreign phrase.

~~~ conllu
# visual-style 4 5 flat:foreign color:blue
# visual-style 5 6 flat:foreign color:blue
1	Radio	radio	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	_
2	gra	grać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	"	"	PUNCT	interp	PunctType=Quot	4	punct	_	SpaceAfter=No
4	Close	close	X	ign	Foreign=Yes	2	obj	_	_
5	your	your	X	ign	Foreign=Yes	4	flat:foreign	_	_
6	eyes	eyes	X	ign	Foreign=Yes	5	flat:foreign	_	SpaceAfter=No
7	"	"	PUNCT	interp	PunctType=Quot	4	punct	_	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	2	punct	_	_
~~~

~~~ conllu
1	The	_	_	_	_	_	_	_	_
2	radio	_	_	_	_	_	_	_	_
3	plays	_	_	_	_	_	_	_	_
4	"	_	_	_	_	_	_	_	_
5	Close	_	_	_	_	_	_	_	_
6	your	_	_	_	_	_	_	_	_
7	eyes	_	_	_	_	_	_	_	_
8	"	_	_	_	_	_	_	_	_
9	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated Út zář 29 20:31:53 CEST 2020 -->

---
layout: relation
title: 'discourse-emo'
shortdef: 'emoticons, emojis'
udver: '2'
---

The `discourse:emo` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) treebank for emoticons/emojis and other pictographic elements.

~~~ conllu
# visual-style 2 9 discourse:emo color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	_	_
2	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	co	co	PART	part	_	2	fixed	_	_
4	dramatyzować	dramatyzować	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	_	_
6	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	0:root|2:conj	_
7	jeszcze	jeszcze	PART	part	_	6	advmod:emph	_	_
8	news:pl.rec.kuchnia	news:pl.rec.kuchnia	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
9	:-)	:-)	SYM	emo	_	2	discourse:emo	2:discourse:emo|6:discourse:emo	_
~~~

~~~ conllu
1	There	_	_	_	_	_	_	_	_
2	is	_	_	_	_	_	_	_	_
3	nothing	_	_	_	_	_	_	_	_
4	to	_	_	_	_	_	_	_	_
5	dramatise	_	_	_	_	_	_	_	_
6	,	_	_	_	_	_	_	_	_
7	there	_	_	_	_	_	_	_	_
8	is	_	_	_	_	_	_	_	_
9	also	_	_	_	_	_	_	_	_
10	news:pl.rec.kitchen	_	_	_	_	_	_	_	_
11	:-)	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated St lis 3 20:58:51 CET 2021 -->

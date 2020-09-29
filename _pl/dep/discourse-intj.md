---
layout: relation
title: 'discourse:intj'
shortdef: 'interjection'
udver: '2'
---

The `discourse:intj` relation in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for exclamations (e.g. _ach!_), response particles (e.g. _no_), greetings (e.g. _serwus_), curses (e.g. _kurwa_), etc. 


~~~ conllu
# visual-style 9 1	discourse:intj color:blue
1	Cóż	cóż	INTJ	interj	_	9	discourse:intj	_	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	1	punct	_	_
3	dobrze	dobrze	ADV	adv:pos	Degree=Pos	4	advmod	_	_
4	wychowany	wychować	ADJ	ppas:sg:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	5	acl	_	_
5	człowiek	człowiek	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
6	po	po	ADP	prep:acc	AdpType=Prep	7	case	_	Case=Acc
7	prostu	prosty	ADJ	adjp	PrepCase=Pre	9	obl	_	_
8	nie	nie	PART	part	Polarity=Neg	9	advmod:neg	_	_
9	zadaje	zadawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	takich	taki	DET	adj:pl:gen:n:pos	Case=Gen|Gender=Neut|Number=Plur|PronType=Dem	11	det	_	_
11	pytań	pytanie	NOUN	subst:pl:gen:n:ncol	Case=Gen|Gender=Neut|Number=Plur	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	9	punct	_	_
~~~

~~~ conllu
1	Well	_	_	_	_	_	_	_	_
2	,	_	_	_	_	_	_	_	_
3	a	_	_	_	_	_	_	_	_
4	well-mannered	_	_	_	_	_	_	_	_
5	man	_	_	_	_	_	_	_	_
6	just	_	_	_	_	_	_	_	_
7	does	_	_	_	_	_	_	_	_
8	not	_	_	_	_	_	_	_	_
9	ask	_	_	_	_	_	_	_	_
10	such	_	_	_	_	_	_	_	_
11	questions	_	_	_	_	_	_	_	_
12	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated Út zář 29 20:43:17 CEST 2020 -->

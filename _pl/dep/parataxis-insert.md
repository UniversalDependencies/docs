---
layout: relation
title: 'parataxis:insert'
shortdef: 'parenthetical clause or comment'
udver: '2'
---

The `parataxis:insert` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for explanatory or commenting word, clause or sentence inserted into a sentence. A paranthesis is usually marked with punctuation marks (e.g. commas, brackets, or dashes), but sometimes it is not marked.

~~~ conllu
# visual-style 7 5 parataxis:insert color:blue
1	W	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	3	case	_	Case=Acc
2	ten	ten	DET	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	sposób	sposób	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	5	punct	_	_
5	teoretycznie	teoretycznie	ADV	adv:pos	Degree=Pos	7	parataxis:insert	_	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	5	punct	_	_
7	możliwy	możliwy	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
8	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
9	dostęp	dostęp	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
10	do	do	ADP	prep:gen	AdpType=Prep	12	case	_	Case=Gen
11	swoich	swój	DET	adj:pl:gen:m3:pos	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	12	det:poss	_	_
12	pieniędzy	pieniądz	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	9	nmod:arg	_	_
13	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	15	case	_	Case=Loc
14	dowolnym	dowolny	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	_
15	momencie	moment	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	7	punct	_	_
~~~

~~~ conllu
1	In	_	_	_	_	_	_	_	_
2	this	_	_	_	_	_	_	_	_
3	way	_	_	_	_	_	_	_	_
4	,	_	_	_	_	_	_	_	_
5	theoretically	_	_	_	_	_	_	_	_
6	,	_	_	_	_	_	_	_	_
7	you	_	_	_	_	_	_	_	_
8	can	_	_	_	_	_	_	_	_
9	access	_	_	_	_	_	_	_	_
10	your	_	_	_	_	_	_	_	_
11	money	_	_	_	_	_	_	_	_
12	any	_	_	_	_	_	_	_	_
13	time	_	_	_	_	_	_	_	_
14	.	_	_	_	_	_	_	_	_
~~~

~~~ conllu
# visual-style 1 4 parataxis:insert color:blue
1	Oto	oto	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	0	root	_	_
2	tajemnica	tajemnica	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
3	powodzenia	powodzenie	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	2	nmod	_	_
4	itd	i tak dalej	X	brev:pun	Abbr=Yes|Pun=Yes	1	parataxis:insert	_	SpaceAfter=No
5	.	.	PUNCT	interp	PunctType=Peri	1	punct	_	_
~~~

~~~ conllu
1	This	_	_	_	_	_	_	_	_
2	is	_	_	_	_	_	_	_	_
3	the	_	_	_	_	_	_	_	_
4	secret	_	_	_	_	_	_	_	_
5	of	_	_	_	_	_	_	_	_
6	success	_	_	_	_	_	_	_	_
7	etc	_	_	_	_	_	_	_	_
8	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:37 CET 2020 -->

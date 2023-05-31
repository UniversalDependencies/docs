---
layout: base
title:  'Statistics of det:poss in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="pl_pdb-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="pl_pdb-dep-det-nummod.html">det:nummod</a></tt>.

1686 nodes (0%) are attached to their parents as `det:poss`.

1648 instances of `det:poss` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18208778173191.

The following 5 pairs of parts of speech are connected with `det:poss`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1665; 99% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (17; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 det:poss	color:blue
1	Na	na	ADP	prep:acc	AdpType=Prep	3	parataxis:insert	3:parataxis:insert	Case=Acc
2	pewno	pewno	ADV	adv:pos	Degree=Pos	1	fixed	1:fixed	_
3	zaśpiewam	zaśpiewać	VERB	fin:sg:pri:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	swoje	swój	DET	adj:pl:acc:f:pos	Case=Acc|Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	8	det:poss	8:det:poss	_
5	stare	stary	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	8	amod	8:amod	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
7	znane	znany	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	5	conj	5:conj|8:amod	_
8	piosenki	piosenka	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	3	obj	3:obj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:poss	color:blue
1	Ale	ale	CCONJ	conj	_	4	cc	4:cc	_
2	twój	twój	DET	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	3	det:poss	3:det:poss	_
3	Wicio	Wicio	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
4	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	jeszcze	jeszcze	PART	part	_	6	advmod:emph	6:advmod:emph	_
6	jeden	jeden	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	_
7	problem	problem	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	iobj	4:iobj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det:poss	color:blue
1	–	–	PUNCT	interp	PunctType=Dash	3	punct	3:punct	_
2	Czy	czy	PART	part	PartType=Int	3	advmod	3:advmod	_
3	mam	mieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obj	5:obj	_
5	potraktować	potraktować	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	3	xcomp	3:xcomp	_
6	jako	jako	SCONJ	comp	ConjType=Pred	7	mark	7:mark	_
7	lekcję	lekcja	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	5	obl	5:obl	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
9	moja	mój	DET	adj:sg:voc:f:pos	Case=Voc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	10	det:poss	10:det:poss	_
10	droga	drogi	ADJ	adj:sg:voc:f:pos	Case=Voc|Degree=Pos|Gender=Fem|Number=Sing	3	vocative	3:vocative	SpaceAfter=No
11	?	?	PUNCT	interp	PunctType=Qest	3	punct	3:punct	_

~~~



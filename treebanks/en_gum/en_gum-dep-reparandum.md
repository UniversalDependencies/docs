---
layout: base
title:  'Statistics of reparandum in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `reparandum`

This relation is universal.

3 nodes (0%) are attached to their parents as `reparandum`.

3 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66666666666667.

The following 3 pairs of parts of speech are connected with `reparandum`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 33% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 33% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 reparandum	color:blue
1	One	One	NUM	CD	NumType=Card	2	nummod	_	_
2	third	third	NOUN	NN	Number=Sing	11	obl:npmod	_	_
3	of	of	ADP	IN	_	6	reparandum	_	_
4	of	of	ADP	IN	_	6	case	_	Typo=Yes
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	_
6	way	way	NOUN	NN	Number=Sing	2	nmod	_	_
7	through	through	ADP	IN	_	9	case	_	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	_
9	cycle	cycle	NOUN	NN	Number=Sing	6	nmod	_	SpaceAfter=No
10	,	,	PUNCT	,	_	2	punct	_	_
11	shake	shake	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
12	all	all	DET	DT	_	13	det	_	_
13	bottles	bottle	NOUN	NNS	Number=Plur	11	obj	_	_
14	vigorously	vigorously	ADV	RB	_	11	advmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 reparandum	color:blue
1	If	if	SCONJ	IN	_	5	mark	_	_
2	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	5	nsubj	_	_
3	ca	can	AUX	MD	VerbForm=Fin	5	aux	_	SpaceAfter=No
4	n't	not	PART	RB	Polarity=Neg	5	advmod	_	_
5	buy	buy	VERB	VB	VerbForm=Inf	12	advcl	_	_
6	ballet	ballet	NOUN	NN	Number=Sing	7	compound	_	_
7	shoes	shoe	NOUN	NNS	Number=Plur	5	obj	_	SpaceAfter=No
8	,	,	PUNCT	,	_	5	punct	_	_
9	that	that	PRON	DT	Number=Sing|PronType=Dem	10	reparandum	_	Typo=Yes
10	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	Typo=Yes
11	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	Typo=Yes
12	okay	okay	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No|Typo=Yes
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 reparandum	color:blue
1	eHow	eHow	PROPN	NNP	Number=Sing	2	nsubj	_	_
2	was	be	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	and	and	CCONJ	CC	_	4	cc	_	_
4	continues	continue	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
5	to	to	PART	TO	_	12	mark	_	_
6	be	be	AUX	VB	VerbForm=Inf	12	cop	_	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	_	_
8	largest	large	ADJ	JJS	Degree=Sup	12	amod	_	_
9	and	and	CCONJ	CC	_	10	reparandum	_	_
10	how	how	SCONJ	WRB	PronType=Int	12	amod	_	_
11	to	to	PART	TO	_	10	goeswith	_	_
12	website	website	NOUN	NN	Number=Sing	4	xcomp	_	_
13	in	in	ADP	IN	_	15	case	_	_
14	the	the	DET	DT	Definite=Def|PronType=Art	15	det	_	_
15	world	world	NOUN	NN	Number=Sing	12	nmod	_	SpaceAfter=No
16	.	.	PUNCT	.	_	2	punct	_	_

~~~



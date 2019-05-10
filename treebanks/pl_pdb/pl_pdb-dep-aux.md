---
layout: base
title:  'Statistics of aux in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `aux`

This relation is universal.
There are 4 language-specific subtypes of `aux`: <tt><a href="pl_pdb-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_pdb-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_pdb-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="pl_pdb-dep-aux-pass.html">aux:pass</a></tt>.

1145 nodes (0%) are attached to their parents as `aux`.

949 instances of `aux` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6296943231441.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (774; 68% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (269; 23% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (44; 4% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (40; 3% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (14; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux	color:blue
1	Będziesz	być	AUX	bedzie:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	2	aux	2:aux	_
2	mieć	mieć	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	0:root	_
3	prawdopodobnie	prawdopodobnie	ADV	adv:pos	Degree=Pos	2	parataxis:insert	2:parataxis:insert	_
4	zyski	zysk	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	2	iobj	2:iobj	_
5	dzięki	dzięki	ADP	prep:dat	AdpType=Prep	7	case	7:case|9:case	Case=Dat
6	swej	swój	DET	adj:sg:dat:f:pos	Case=Dat|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	7	det:poss	7:det:poss	_
7	pracy	praca	NOUN	subst:sg:dat:f	Case=Dat|Gender=Fem|Number=Sing	2	obl	2:obl	_
8	i	i	CCONJ	conj	_	9	cc	9:cc	_
9	zawodowi	zawód	NOUN	subst:sg:dat:m3	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	7	conj	2:obl|7:conj	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	To	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	4	cop	4:cop	_
2	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
3	jedno	jeden	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	4	amod	4:amod	_
4	pytanie	pytanie	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 aux	color:blue
1	Chór	chór	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	uznał	uznać	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
4	że	że	SCONJ	comp	_	9	mark	9:mark	_
5	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	9	cop	9:cop	_
6	było	być	AUX	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	9	aux	9:aux	_
7	by	by	AUX	part	_	9	aux:cnd	9:aux:cnd	_
8	na	na	ADP	prep:acc	AdpType=Prep	9	case	9:case	Case=Acc
9	tyle	tyle	ADV	adv	_	2	ccomp	2:ccomp	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~



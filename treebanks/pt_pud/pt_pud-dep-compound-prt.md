---
layout: base
title:  'Statistics of compound:prt in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="pt_pud-dep-compound.html">compound</a></tt>.

92 nodes (0%) are attached to their parents as `compound:prt`.

81 instances of `compound:prt` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.60869565217391.

The following 5 pairs of parts of speech are connected with `compound:prt`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (66; 72% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (14; 15% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (9; 10% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound:prt	color:blue
1	Penso	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
2	que	_	ADP	IN	_	3	mark	_	_
3	é	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	ccomp	_	_
4	por	_	ADP	IN	_	3	discourse	_	_
5	isso	_	PRON	PDEM	Gender=Masc|Number=Sing	4	fixed	_	_
6	que	_	ADP	IN	_	9	mark	_	_
7	eles	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Plur|Person=3	9	nsubj	_	_
8	se	_	PRON	SE	Person=3	9	compound:prt	_	_
9	imergiram	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past	3	ccomp	_	_
10	em	_	ADP	IN	_	11	case	_	_
11	padrões	_	NOUN	NN	Gender=Masc|Number=Plur	9	obl	_	_
12	e	_	CCONJ	CC	_	13	cc	_	_
13	cor	_	NOUN	NN	Gender=Fem|Number=Sing	11	conj	_	SpaceAfter=No
14	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 compound:prt	color:blue
1	A	_	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	votação	_	NOUN	NN	Gender=Fem|Number=Sing	16	nsubj	_	SpaceAfter=No
3	,	_	PUNCT	,	_	6	punct	_	_
4	em	em	ADP	INDT	_	6	case	_	_
5	o	o	DET	_	Gender=Masc|Number=Sing	6	det	_	_
6	vernáculo	_	NOUN	NN	Gender=Masc|Number=Sing	16	nmod	_	ToDo=nmod
7	de	de	ADP	INDT	_	9	case	_	_
8	o	o	DET	_	Gender=Masc|Number=Sing	9	det	_	_
9	terror	_	NOUN	NN	Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
10	,	_	PUNCT	,	_	6	punct	_	_
11	torna	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	16	cop	_	SpaceAfter=No
12	-	_	PUNCT	-	_	11	punct	_	SpaceAfter=No
13	se	_	PRON	SE	Person=3	16	compound:prt	_	_
14	o	_	DET	DT	Gender=Masc|Number=Sing	16	det	_	_
15	novo	_	ADJ	JJ	Gender=Masc|Number=Sing	16	amod	_	_
16	alvo	_	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
17	fácil	_	ADJ	JJ	Gender=Masc|Number=Sing	16	amod	_	SpaceAfter=No
18	.	_	PUNCT	.	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 compound:prt	color:blue
1	Primeiro	_	ADV	RB	_	5	advmod	_	SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	nós	_	PRON	PRP	Case=Nom|Number=Plur|Person=1	5	nsubj	_	_
4	devemos	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres	5	aux	_	_
5	educar	_	VERB	VB	_	0	root	_	_
6	as	_	DET	DT	Gender=Fem|Number=Plur	7	det	_	_
7	pessoas	_	NOUN	NN	Gender=Fem|Number=Plur	5	obj	_	_
8	sobre	_	ADP	IN	_	12	case	_	_
9	como	_	ADV	WRB	_	12	advmod	_	_
10	se	_	PRON	SE	Person=3	12	compound:prt	_	_
11	proteger	_	AUX	VB	_	12	cop	_	_
12	melhor	_	ADJ	JJR	Gender=Masc|Number=Sing	5	xcomp	_	SpaceAfter=No
13	,	_	PUNCT	,	_	14	punct	_	_
14	online	_	ADV	RB	_	12	advmod	_	SpaceAfter=No
15	.	_	PUNCT	.	_	5	punct	_	_

~~~



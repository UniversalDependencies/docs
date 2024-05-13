---
layout: base
title:  'Statistics of nummod in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Relations: `nummod`

This relation is universal.

6 nodes (1%) are attached to their parents as `nummod`.

6 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-NUM.html">NUM</a></tt> (4; 67% instances), <tt><a href="sq_tsa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_tsa-pos-NUM.html">NUM</a></tt> (1; 17% instances), <tt><a href="sq_tsa-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_tsa-pos-NUM.html">NUM</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Edhe	Edhe	ADV	_	_	3	advmod	_	_
2	një	një	NUM	_	_	3	nummod	_	_
3	herë	herë	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	popullsia	popullsi	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	7	nsubj	_	_
6	u	u	AUX	_	_	7	aux	_	_
7	rrit	rris	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
8	shumë	shumë	ADV	_	_	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	Shtëpitë	shtëpi	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	11	nsubj	_	_
2	që	që	SCONJ	_	_	4	mark	_	_
3	janë	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	4	cop	_	_
4	vendbanim	vendbanim	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	1	acl:relcl	_	_
5	i	i	DET	_	Gender=Masc	6	det	_	_
6	personave	person	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	4	nmod:poss	_	_
7	mbi	mbi	ADP	_	_	9	case	_	_
8	70	70	NUM	_	_	9	nummod	_	_
9	vjeç	vjeç	ADJ	_	Gender=Masc|Number=Sing	6	nmod	_	_
10	nuk	nuk	PART	_	Polarity=Neg	11	advmod	_	_
11	mirren	marr	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Pass	0	root	_	_
12	parasysh	parasysh	ADV	_	_	11	compound	_	SpaceAfter=No
13	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 nummod	color:blue
1	Pastoristët	pastorist	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	2	nsubj	_	_
2	jetojnë	jetoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	_
3	një	një	DET	_	Gender=Fem	4	det	_	_
4	jetë	jetë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	2	obj	_	_
5	nomade	nomad	ADJ	_	Gender=Fem|Number=Sing	4	amod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	2	punct	_	_
7	duke	duke	PART	_	_	8	mark	_	_
8	lëvizur	lëviz	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Ger|Voice=Act	2	advcl	_	_
9	kopetë	kope	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	8	obj	_	_
10	e	i	DET	_	Gender=Fem|Number=Plur	11	det:pron	_	_
11	tyre	ata	PRON	_	Case=Gen|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	9	nmod:poss	_	_
12	nga	nga	ADP	_	_	14	case	_	_
13	një	një	NUM	_	_	14	nummod	_	_
14	kullotë	kullotë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	8	obl	_	_
15	në	në	ADP	_	_	17	case	_	_
16	një	një	NUM	_	_	17	nummod	_	_
17	tjetër	tjetër	PRON	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Ind	8	obl	_	SpaceAfter=No
18	.	.	PUNCT	_	_	2	punct	_	_

~~~



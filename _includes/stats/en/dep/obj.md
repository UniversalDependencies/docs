

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

11419 nodes (5%) are attached to their parents as `obj`.

10980 instances of `obj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.19274892722655.

The following 32 pairs of parts of speech are connected with `obj`: [en-pos/VERB]()-[en-pos/NOUN]() (7715; 68% instances), [en-pos/VERB]()-[en-pos/PRON]() (2622; 23% instances), [en-pos/VERB]()-[en-pos/PROPN]() (598; 5% instances), [en-pos/VERB]()-[en-pos/ADJ]() (154; 1% instances), [en-pos/VERB]()-[en-pos/DET]() (87; 1% instances), [en-pos/VERB]()-[en-pos/NUM]() (85; 1% instances), [en-pos/VERB]()-[en-pos/SYM]() (59; 1% instances), [en-pos/ADJ]()-[en-pos/PRON]() (20; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (19; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (17; 0% instances), [en-pos/VERB]()-[en-pos/ADV]() (11; 0% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (3; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (3; 0% instances), [en-pos/VERB]()-[en-pos/INTJ]() (3; 0% instances), [en-pos/VERB]()-[en-pos/X]() (3; 0% instances), [en-pos/ADV]()-[en-pos/ADV]() (2; 0% instances), [en-pos/AUX]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/SCONJ]()-[en-pos/PRON]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/NUM]() (1; 0% instances), [en-pos/ADP]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/ADV]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/AUX]()-[en-pos/PRON]() (1; 0% instances), [en-pos/AUX]()-[en-pos/VERB]() (1; 0% instances), [en-pos/NUM]()-[en-pos/ADV]() (1; 0% instances), [en-pos/PART]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PART]()-[en-pos/PRON]() (1; 0% instances), [en-pos/PRON]()-[en-pos/NUM]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/SYM]()-[en-pos/NUM]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obj	color:blue
1	Read	read	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
2	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
3	entire	entire	ADJ	JJ	Degree=Pos	4	amod	_	_
4	article	article	NOUN	NN	Number=Sing	1	obj	_	SpaceAfter=No
5	;	;	PUNCT	,	_	1	punct	_	_
6	there	there	PRON	EX	_	7	expl	_	SpaceAfter=No
7	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	_
9	punchline	punchline	NOUN	NN	Number=Sing	7	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	7	punct	_	_
11	too	too	ADV	RB	_	7	advmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	3	nsubj	_	SpaceAfter=No
2	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	overstating	overstate	VERB	VBG	VerbForm=Ger	7	ccomp	_	_
4	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	know	know	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obj	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	want	want	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	to	to	PART	TO	_	4	mark	_	_
4	use	use	VERB	VB	VerbForm=Inf	2	xcomp	_	_
5	this	this	DET	DT	Number=Sing|PronType=Dem	6	det	_	_
6	opportunity	opportunity	NOUN	NN	Number=Sing	4	obj	_	_
7	to	to	PART	TO	_	8	mark	_	_
8	welcome	welcome	VERB	VB	VerbForm=Inf	4	xcomp	_	_
9	Brian	Brian	PROPN	NNP	Number=Sing	8	obj	_	_
10	Ryner	Ryner	PROPN	NNP	Number=Sing	9	flat	_	_
11	to	to	ADP	IN	_	12	case	_	_
12	Google	Google	PROPN	NNP	Number=Sing	8	obl	_	SpaceAfter=No
13	!	!	PUNCT	.	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-LinES)

This relation is universal.

3113 nodes (5%) are attached to their parents as `obj`.

2961 instances of `obj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.21040796659171.

The following 26 pairs of parts of speech are connected with `obj`: [en-pos/VERB]()-[en-pos/NOUN]() (2098; 67% instances), [en-pos/VERB]()-[en-pos/PRON]() (709; 23% instances), [en-pos/VERB]()-[en-pos/PROPN]() (158; 5% instances), [en-pos/VERB]()-[en-pos/VERB]() (35; 1% instances), [en-pos/VERB]()-[en-pos/ADJ]() (29; 1% instances), [en-pos/AUX]()-[en-pos/NOUN]() (16; 1% instances), [en-pos/VERB]()-[en-pos/ADV]() (11; 0% instances), [en-pos/VERB]()-[en-pos/INTJ]() (11; 0% instances), [en-pos/VERB]()-[en-pos/NUM]() (9; 0% instances), [en-pos/VERB]()-[en-pos/SCONJ]() (6; 0% instances), [en-pos/AUX]()-[en-pos/PRON]() (4; 0% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (3; 0% instances), [en-pos/VERB]()-[en-pos/DET]() (3; 0% instances), [en-pos/VERB]()-[en-pos/X]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/PRON]() (2; 0% instances), [en-pos/ADP]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/ADP]()-[en-pos/PROPN]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (2; 0% instances), [en-pos/VERB]()-[en-pos/PART]() (2; 0% instances), [en-pos/DET]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/PRON]()-[en-pos/PRON]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/PRON]() (1; 0% instances), [en-pos/VERB]()-[en-pos/SYM]() (1; 0% instances), [en-pos/X]()-[en-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obj	color:blue
1	About	_	ADP	_	_	2	case	_	_
2	importing	_	VERB	ING	_	0	root	_	_
3	XML	_	PROPN	SG-NOM	_	4	compound	_	_
4	data	_	NOUN	PL-NOM	_	2	obj	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 obj	color:blue
1	You	_	PRON	PERS-P2	_	3	nsubj	_	_
2	can	_	AUX	PRES-AUX	_	3	aux	_	_
3	change	_	VERB	INF	_	0	root	_	_
4	the	_	DET	DEF	_	5	det	_	_
5	color	_	NOUN	SG-NOM	_	3	obj	_	_
6	of	_	ADP	_	_	8	case	_	_
7	a	_	DET	IND-SG	_	8	det	_	_
8	control	_	NOUN	SG-NOM	_	5	nmod	_	_
9	or	_	CCONJ	_	_	10	cc	_	_
10	make	_	VERB	INF	_	3	conj	_	_
11	it	_	PRON	PERS-SG	_	10	obj	_	_
12	transparent	_	ADJ	POS	_	10	xcomp	_	SpaceAfter=No
13	.	_	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obj	color:blue
1	I	_	PRON	PERS-P1SG-NOM	_	3	nsubj	_	SpaceAfter=No
2	'm	_	AUX	PRES	_	3	cop	_	_
3	afraid	_	ADJ	POS	_	0	root	_	_
4	you	_	PRON	PERS-P2	_	6	nsubj	_	SpaceAfter=No
5	've	_	AUX	PRES-AUX	_	6	aux	_	_
6	got	_	VERB	PERF	_	3	amod	_	_
7	the	_	DET	DEF	_	9	det	_	_
8	wrong	_	ADJ	POS	_	9	amod	_	_
9	Paul	_	PROPN	SG-NOM	_	6	obj	_	_
10	Auster	_	PROPN	SG-NOM	_	9	flat	_	SpaceAfter=No
11	.	_	PUNCT	Period	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is universal.

1593 nodes (4%) are attached to their parents as `obj`.

1517 instances of `obj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.41996233521657.

The following 16 pairs of parts of speech are connected with `obj`: [en-pos/VERB]()-[en-pos/NOUN]() (1282; 80% instances), [en-pos/VERB]()-[en-pos/PRON]() (190; 12% instances), [en-pos/VERB]()-[en-pos/PROPN]() (68; 4% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (14; 1% instances), [en-pos/VERB]()-[en-pos/ADJ]() (13; 1% instances), [en-pos/VERB]()-[en-pos/NUM]() (8; 1% instances), [en-pos/VERB]()-[en-pos/X]() (4; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (3; 0% instances), [en-pos/VERB]()-[en-pos/ADV]() (3; 0% instances), [en-pos/VERB]()-[en-pos/SYM]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/PRON]() (1; 0% instances), [en-pos/ADV]()-[en-pos/PRON]() (1; 0% instances), [en-pos/AUX]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/PRON]() (1; 0% instances), [en-pos/VERB]()-[en-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 obj	color:blue
1	to	to	PART	PART	_	2	mark	_	_
2	create	create	VERB	V	VerbForm=Inf	0	root	_	_
3	and	and	CCONJ	CC	_	4	cc	_	_
4	reproduce	reproduce	VERB	V	VerbForm=Inf	2	conj	_	_
5	Derivative	derivative	ADJ	A	Degree=Pos	6	amod	_	_
6	Works	work	NOUN	S	Number=Plur	2	obj	_	SpaceAfter=No
7	;	;	PUNCT	FC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	Thank	thank	VERB	V	Mood=Ind|VerbForm=Fin	0	root	_	_
2	you	you	PRON	PE	PronType=Prs	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	1	punct	_	_
4	Mr	mister	NOUN	S	Gender=Masc|Number=Sing	1	vocative	_	_
5	Segni	Segni	PROPN	SP	_	4	flat	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	9	punct	_	_
7	I	I	PRON	PE	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
8	shall	shall	AUX	VM	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	do	do	VERB	V	VerbForm=Inf	1	conj	_	_
10	so	so	ADV	B	_	9	advmod	_	_
11	gladly	gladly	ADV	B	_	9	advmod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obj	color:blue
1	Does	do	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	it	it	PRON	PE	Number=Sing|Person=3|PronType=Prs	1	expl	_	_
3	cost	cost	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	money	money	NOUN	S	Number=Sing	3	obj	_	_
5	to	to	PART	PART	_	6	mark	_	_
6	use	use	VERB	V	VerbForm=Inf	3	csubj	_	_
7	Facebook	Facebook	PROPN	SP	_	6	obj	_	SpaceAfter=No
8	?	?	PUNCT	FS	_	3	punct	_	_

~~~



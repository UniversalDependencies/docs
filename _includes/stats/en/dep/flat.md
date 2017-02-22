

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.
There are 1 language-specific subtypes of `flat`: [flat:foreign]().

1645 nodes (1%) are attached to their parents as `flat`.

1645 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.24376899696049.

The following 7 pairs of parts of speech are connected with `flat`: [en-pos/PROPN]()-[en-pos/PROPN]() (1574; 96% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (54; 3% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (8; 0% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (5; 0% instances), [en-pos/VERB]()-[en-pos/PROPN]() (2; 0% instances), [en-pos/PRON]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/PRON]()-[en-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Ben	Ben	PROPN	NNP	Number=Sing	6	nsubj	_	_
2	Goodger	Goodger	PROPN	NNP	Number=Sing	1	flat	_	_
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	_
5	lead	lead	ADJ	JJ	Degree=Pos	6	amod	_	_
6	engineer	engineer	NOUN	NN	Number=Sing	0	root	_	_
7	for	for	ADP	IN	_	9	case	_	_
8	Mozilla	Mozilla	PROPN	NNP	Number=Sing	9	compound	_	_
9	Firefox	Firefox	PROPN	NNP	Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	One	one	NUM	CD	NumType=Card	6	nsubj	_	_
2	of	of	ADP	IN	_	4	case	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
4	Wesley	Wesley	PROPN	NNP	Number=Sing	1	nmod	_	_
5	boys	boy	NOUN	NNS	Number=Plur	4	flat	_	_
6	wrote	write	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	_	_
8	hymn	hymn	NOUN	NN	Number=Sing	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	Shall	shall	AUX	MD	VerbForm=Fin	3	aux	_	_
2	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
3	censor	censor	VERB	VB	VerbForm=Inf	0	root	_	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	_	_
5	works	work	NOUN	NNS	Number=Plur	3	obj	_	_
6	of	of	ADP	IN	_	8	case	_	_
7	poet	poet	NOUN	NN	Number=Sing	8	compound	_	_
8	Charles	charle	NOUN	NNS	Number=Plur	5	nmod	_	_
9	Baudelaire	Baudelaire	PROPN	NNP	Number=Sing	8	flat	_	_
10	as	as	ADV	RB	_	3	advmod	_	_
11	well	well	ADV	RB	Degree=Pos	10	fixed	_	SpaceAfter=No
12	?	?	PUNCT	.	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-LinES)

This relation is universal.

482 nodes (1%) are attached to their parents as `flat`.

482 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13070539419087.

The following 8 pairs of parts of speech are connected with `flat`: [en-pos/PROPN]()-[en-pos/PROPN]() (280; 58% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (182; 38% instances), [en-pos/PROPN]()-[en-pos/NUM]() (13; 3% instances), [en-pos/PROPN]()-[en-pos/ADJ]() (3; 1% instances), [en-pos/ADJ]()-[en-pos/ADP]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat	color:blue
1	The	_	DET	DEF	_	4	det	_	_
2	SQL	_	PROPN	SG-NOM	_	3	compound	_	_
3	Server	_	NOUN	SG-NOM	_	4	compound	_	_
4	database	_	NOUN	SG-NOM	_	7	nsubj	_	_
5	must	_	AUX	PRES-AUX	_	7	aux	_	_
6	be	_	AUX	INF	_	7	aux	_	_
7	running	_	VERB	ING	_	0	root	_	_
8	on	_	ADP	_	_	12	case	_	_
9	a	_	DET	IND-SG	_	12	det	_	_
10	Windows	_	PROPN	SG-NOM	_	12	compound	_	_
11	NT	_	PROPN	SG-NOM	_	10	flat	_	_
12	platform	_	NOUN	SG-NOM	_	7	obl	_	SpaceAfter=No
13	.	_	PUNCT	Period	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	She	_	PRON	PERS-SG-NOM	_	2	nsubj	_	_
2	wore	_	VERB	PAST	_	0	root	_	_
3	a	_	DET	IND-SG	_	4	det	_	_
4	dress	_	NOUN	SG-NOM	_	2	obj	_	_
5	made	_	VERB	PASS	_	4	amod	_	_
6	of	_	ADP	_	_	8	case	_	_
7	Congo	_	PROPN	SG-NOM	_	5	obl	_	_
8	cloth	_	NOUN	SG-NOM	_	7	flat	_	SpaceAfter=No
9	.	_	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Open	_	VERB	IMP	_	0	root	_	_
2	the	_	DET	DEF	_	3	det	_	_
3	page	_	NOUN	SG-NOM	_	1	obj	_	_
4	in	_	ADP	_	_	8	case	_	_
5	Access	_	PROPN	SG-NOM	_	8	nummod	_	_
6	2002	_	NUM	ID	_	5	flat	_	_
7	Design	_	NOUN	SG-NOM	_	8	compound	_	_
8	view	_	NOUN	SG-NOM	_	1	obl	_	SpaceAfter=No
9	.	_	PUNCT	Period	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is universal.
There are 2 language-specific subtypes of `flat`: [flat:foreign](), [flat:name]().

92 nodes (0%) are attached to their parents as `flat`.

92 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.35869565217391.

The following 6 pairs of parts of speech are connected with `flat`: [en-pos/NOUN]()-[en-pos/PROPN]() (56; 61% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (11; 12% instances), [en-pos/PROPN]()-[en-pos/ADJ]() (10; 11% instances), [en-pos/PROPN]()-[en-pos/NUM]() (10; 11% instances), [en-pos/X]()-[en-pos/X]() (3; 3% instances), [en-pos/NOUN]()-[en-pos/NUM]() (2; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat	color:blue
1	Attribution	attribution	NOUN	S	Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	ShareAlike	ShareAlike	PROPN	SP	_	1	flat	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 flat	color:blue
1	his	his	DET	AP	Poss=Yes|PronType=Prs	2	nmod:poss	_	_
2	Captain	Captain	PROPN	SP	_	12	nsubj	_	_
3	Ahab	Ahab	PROPN	SP	_	2	nmod	_	_
4	in	in	ADP	E	_	5	case	_	_
5	Moby	Moby	PROPN	SP	_	2	nmod	_	SpaceAfter=No
6	-	-	PUNCT	FF	_	5	punct	_	SpaceAfter=No
7	Dick	dick	NOUN	S	Number=Sing	5	flat:name	_	_
8	is	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
9	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	12	det	_	_
10	classic	classic	ADJ	A	Degree=Pos	12	amod	_	_
11	tragic	tragic	ADJ	A	Degree=Pos	12	amod	_	_
12	hero	hero	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
13	,	,	PUNCT	FF	_	12	punct	_	_
14	inspired	inspire	VERB	V	Tense=Past|VerbForm=Part	12	acl	_	_
15	by	by	ADP	E	_	16	case	_	_
16	King	King	PROPN	SP	_	14	obl:agent	_	_
17	Lear	Lear	PROPN	SP	_	16	flat	_	SpaceAfter=No
18	.	.	PUNCT	FS	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	The	the	DET	RD	Definite=Def|PronType=Art	3	det	_	_
2	opening	opening	NOUN	S	Number=Sing	3	nmod	_	_
3	soliloquy	soliloquy	NOUN	S	Number=Sing	7	nsubj	_	_
4	of	of	ADP	E	_	5	case	_	_
5	Richard	Richard	PROPN	SP	_	3	nmod	_	_
6	III	third	ADJ	NO	Degree=Pos|NumType=Ord	5	flat	_	_
7	has	have	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	its	its	DET	AP	Number=Sing|Poss=Yes|PronType=Prs	9	nmod:poss	_	_
9	roots	root	NOUN	S	Number=Plur	7	obj	_	_
10	in	in	ADP	E	_	14	case	_	_
11	the	the	DET	RD	Definite=Def|PronType=Art	14	det	_	_
12	self	self	ADJ	A	Degree=Pos	14	amod	_	SpaceAfter=No
13	-	-	PUNCT	FF	_	12	punct	_	SpaceAfter=No
14	declaration	declaration	NOUN	S	Number=Sing	7	obl	_	_
15	of	of	ADP	E	_	16	case	_	_
16	Vice	vice	NOUN	S	Number=Sing	14	nmod	_	_
17	in	in	ADP	E	_	19	case	_	_
18	medieval	medieval	ADJ	A	Degree=Pos	19	amod	_	_
19	drama	drama	NOUN	S	Number=Sing	7	obl	_	SpaceAfter=No
20	.	.	PUNCT	FS	_	7	punct	_	_

~~~



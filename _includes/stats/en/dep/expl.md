

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

668 nodes (0%) are attached to their parents as `expl`.

604 instances of `expl` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51047904191617.

The following 8 pairs of parts of speech are connected with `expl`: [en-pos/VERB]()-[en-pos/PRON]() (496; 74% instances), [en-pos/ADJ]()-[en-pos/PRON]() (127; 19% instances), [en-pos/NOUN]()-[en-pos/PRON]() (30; 4% instances), [en-pos/VERB]()-[en-pos/ADV]() (6; 1% instances), [en-pos/PROPN]()-[en-pos/PRON]() (4; 1% instances), [en-pos/AUX]()-[en-pos/PRON]() (2; 0% instances), [en-pos/PRON]()-[en-pos/PRON]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	true	true	ADJ	JJ	Degree=Pos	0	root	_	_
4	that	that	SCONJ	IN	_	10	mark	_	_
5	Google	Google	PROPN	NNP	Number=Sing	10	nsubj	_	_
6	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
7	been	be	AUX	VBN	Tense=Past|VerbForm=Part	10	cop	_	_
8	in	in	ADP	IN	_	10	case	_	_
9	acquisition	acquisition	NOUN	NN	Number=Sing	10	compound	_	_
10	mode	mode	NOUN	NN	Number=Sing	3	csubj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 expl	color:blue
1	oh	oh	INTJ	UH	_	2	discourse	_	_
2	god	god	PROPN	NNP	Number=Sing	6	discourse	_	_
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	there	there	PRON	EX	_	6	expl	_	_
5	an	a	DET	DT	Definite=Ind|PronType=Art	6	det	_	_
6	agenda	agenda	NOUN	NN	Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is universal.

505 nodes (1%) are attached to their parents as `expl`.

491 instances of `expl` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.87920792079208.

The following 5 pairs of parts of speech are connected with `expl`: [en-pos/VERB]()-[en-pos/PRON]() (321; 64% instances), [en-pos/ADJ]()-[en-pos/PRON]() (128; 25% instances), [en-pos/NOUN]()-[en-pos/PRON]() (53; 10% instances), [en-pos/PRON]()-[en-pos/PRON]() (2; 0% instances), [en-pos/PROPN]()-[en-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	_	_	PRON	EX	_	2	expl	_	_
2	_	_	VERB	VBZ	_	0	root	_	_
3	_	_	DET	DT	_	5	det	_	_
4	_	_	ADJ	JJ	_	5	amod	_	_
5	_	_	NOUN	NN	_	2	nsubj	_	_
6	_	_	PART	TO	_	7	mark	_	_
7	_	_	VERB	VB	_	5	acl	_	_
8	_	_	ADV	RB	_	7	advmod	_	_
9	_	_	SCONJ	IN	_	12	mark	_	_
10	_	_	DET	DT	_	11	det	_	_
11	_	_	NOUN	NNS	_	12	nsubj	_	_
12	_	_	VERB	VBP	_	2	advcl	_	_
13	_	_	PART	RB	_	12	neg	_	_
14	_	_	VERB	VB	_	12	xcomp	_	_
15	_	_	PRON	NN	_	14	dobj	_	_
16	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 expl	color:blue
1	_	_	CONJ	CC	_	3	cc	_	_
2	_	_	PRON	PRP	_	3	nsubj	_	_
3	_	_	NOUN	NN	_	0	root	_	_
4	_	_	PRON	DT	_	3	dobj	_	_
5	_	_	PUNCT	,	_	3	punct	_	_
6	_	_	SCONJ	IN	_	9	mark	_	_
7	_	_	PRON	PRP	_	9	expl	_	_
8	_	_	VERB	VBZ	_	9	cop	_	_
9	_	_	ADJ	JJR	_	3	advcl	_	_
10	_	_	PRON	NN	_	11	dobj	_	_
11	_	_	VERB	VBG	_	9	csubj	_	_
12	_	_	SCONJ	IN	_	13	mark	_	_
13	_	_	VERB	VBG	_	9	advcl	_	_
14	_	_	NOUN	NNS	_	13	dobj	_	_
15	_	_	ADP	IN	_	16	case	_	_
16	_	_	PRON	NN	_	13	nmod	_	_
17	_	_	PRON	WDT	_	18	nsubj	_	_
18	_	_	VERB	VB	_	16	acl:relcl	_	_
19	_	_	PRON	PRP	_	18	dobj	_	_
20	_	_	VERB	VB	_	18	xcomp	_	_
21	_	_	PRON	NN	_	20	dobj	_	_
22	_	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 expl	color:blue
1	_	_	X	GW	_	2	goeswith	_	_
2	_	_	ADV	RB	_	7	advmod	_	_
3	_	_	PRON	PRP	_	7	expl	_	_
4	_	_	VERB	VBD	_	7	cop	_	_
5	_	_	DET	DT	_	7	det	_	_
6	_	_	ADJ	JJ	_	7	amod	_	_
7	_	_	NOUN	NN	_	0	root	_	_
8	_	_	PART	TO	_	9	mark	_	_
9	_	_	VERB	VB	_	7	csubj	_	_
10	_	_	PRON	PRP	_	9	dobj	_	_
11	_	_	PUNCT	,	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-LinES)

This relation is universal.

220 nodes (0%) are attached to their parents as `expl`.

211 instances of `expl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.65454545454545.

The following 8 pairs of parts of speech are connected with `expl`: [en-pos/VERB]()-[en-pos/PRON]() (156; 71% instances), [en-pos/NOUN]()-[en-pos/PRON]() (29; 13% instances), [en-pos/ADJ]()-[en-pos/PRON]() (17; 8% instances), [en-pos/AUX]()-[en-pos/PRON]() (9; 4% instances), [en-pos/PRON]()-[en-pos/PRON]() (4; 2% instances), [en-pos/PROPN]()-[en-pos/PRON]() (2; 1% instances), [en-pos/VERB]()-[en-pos/ADV]() (2; 1% instances), [en-pos/SCONJ]()-[en-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl	color:blue
1	If	_	SCONJ	_	_	4	mark	_	_
2	that	_	PRON	DEM-SG	_	4	nsubj	_	SpaceAfter=No
3	's	_	AUX	PRES	_	4	cop	_	_
4	true	_	ADJ	POS	_	8	advmod	_	SpaceAfter=No
5	,	_	PUNCT	Comma	_	3	punct	_	_
6	then	_	ADV	_	_	8	advmod	_	_
7	there	_	PRON	EX	_	8	expl	_	SpaceAfter=No
8	's	_	VERB	PRES	_	0	root	_	_
9	no	_	DET	NEG	_	10	advmod	_	_
10	hope	_	NOUN	SG-NOM	_	8	nsubj	_	SpaceAfter=No
11	.	_	PUNCT	Period	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	There	_	PRON	EX	_	4	expl	_	_
2	are	_	AUX	PRES	_	4	cop	_	_
3	raisons	_	NOUN	PL-NOM-FGN	_	4	compound	_	_
4	d'etat	_	NOUN	SG-NOM-FGN	_	0	root	_	_
5	and	_	CCONJ	_	_	9	cc	_	_
6	there	_	PRON	EX	_	9	expl	_	_
7	are	_	AUX	PRES	_	9	cop	_	_
8	private	_	ADJ	POS	_	9	amod	_	_
9	crimes	_	NOUN	PL-NOM	_	4	conj	_	SpaceAfter=No
10	.	_	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	Is	_	AUX	PRES	_	3	cop	_	_
2	it	_	PRON	PERS-SG	_	3	expl	_	_
3	possible	_	ADJ	POS	_	0	root	_	_
4	that	_	SCONJ	_	_	6	mark	_	_
5	you	_	PRON	PERS-P2	_	6	nsubj	_	_
6	know	_	VERB	PRES	_	3	csubj	_	_
7	the	_	DET	DEF	_	8	det	_	_
8	people	_	NOUN	PL-NOM	_	6	obj	_	_
9	involved	_	VERB	PASS	_	8	amod	_	SpaceAfter=No
10	?	_	PUNCT	QuestionMark	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is universal.

93 nodes (0%) are attached to their parents as `expl`.

78 instances of `expl` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70967741935484.

The following 7 pairs of parts of speech are connected with `expl`: [en-pos/VERB]()-[en-pos/ADV]() (43; 46% instances), [en-pos/ADJ]()-[en-pos/PRON]() (26; 28% instances), [en-pos/VERB]()-[en-pos/PRON]() (17; 18% instances), [en-pos/NOUN]()-[en-pos/PRON]() (3; 3% instances), [en-pos/ADV]()-[en-pos/PRON]() (2; 2% instances), [en-pos/ADJ]()-[en-pos/ADV]() (1; 1% instances), [en-pos/AUX]()-[en-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 expl	color:blue
1	Why	why	ADV	B	_	2	advmod	_	_
2	are	be	VERB	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	_
3	there	there	ADV	B	_	2	expl	_	_
4	no	no	DET	DI	PronType=Ind	6	det	_	_
5	fire	fire	NOUN	S	Number=Sing	6	nmod	_	_
6	instructions	instructions	NOUN	S	Number=Sing	2	nsubj	_	SpaceAfter=No
7	?	?	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl	color:blue
1	However	however	ADV	B	_	5	advmod	_	_
2	it	it	PRON	PE	Number=Sing|Person=3|PronType=Prs	5	expl	_	_
3	is	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	perhaps	perhaps	ADV	B	_	5	advmod	_	_
5	relevant	relevant	ADJ	A	Degree=Pos	0	root	_	_
6	that	that	SCONJ	CS	_	10	mark	_	_
7	the	the	DET	RD	Definite=Def|PronType=Art	9	det	_	_
8	bubonic	bubonic	ADJ	A	Degree=Pos	9	amod	_	_
9	plague	plague	NOUN	S	Number=Sing	10	nsubj	_	_
10	raged	rage	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	5	csubj	_	_
11	in	in	ADP	E	_	12	case	_	_
12	London	London	PROPN	SP	_	10	obl	_	_
13	throughout	throughout	ADP	E	_	14	case	_	_
14	1609	1609	NUM	N	NumType=Card	10	obl	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 expl	color:blue
1	Delays	delay	NOUN	S	Number=Plur	9	nsubj	_	_
2	in	in	ADP	E	_	6	case	_	_
3	the	the	DET	RD	Definite=Def|PronType=Art	4	det	_	_
4	CEN	CEN	PROPN	SP	_	6	nmod	_	SpaceAfter=No
5	's	's	PART	PART	_	4	case	_	_
6	work	work	NOUN	S	Number=Sing	1	nmod	_	_
7	are	be	AUX	VA	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	9	aux	_	_
8	now	now	ADV	B	_	9	advmod	_	_
9	making	make	VERB	V	VerbForm=Ger	0	root	_	_
10	it	it	PRON	PE	Number=Sing|Person=3|PronType=Prs	9	expl	_	_
11	difficult	difficult	ADJ	A	Degree=Pos	9	xcomp	_	_
12	to	to	ADP	E	_	13	case	_	_
13	apply	apply	VERB	V	VerbForm=Inf	9	ccomp	_	_
14	this	this	DET	DD	Number=Sing|PronType=Dem	16	det	_	_
15	very	very	ADJ	A	Degree=Pos	16	amod	_	_
16	Directive	Directive	NOUN	S	Number=Sing	13	obj	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	9	punct	_	_

~~~





--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

857 nodes (0%) are attached to their parents as `appos`.

856 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.93232205367561.

The following 23 pairs of parts of speech are connected with `appos`: [it-pos/PROPN]()-[it-pos/NOUN]() (280; 33% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (265; 31% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (186; 22% instances), [it-pos/PRON]()-[it-pos/NOUN]() (30; 4% instances), [it-pos/PROPN]()-[it-pos/PRON]() (16; 2% instances), [it-pos/PROPN]()-[it-pos/PROPN]() (16; 2% instances), [it-pos/PRON]()-[it-pos/PROPN]() (15; 2% instances), [it-pos/NOUN]()-[it-pos/PRON]() (10; 1% instances), [it-pos/VERB]()-[it-pos/NOUN]() (8; 1% instances), [it-pos/NOUN]()-[it-pos/X]() (5; 1% instances), [it-pos/X]()-[it-pos/NOUN]() (5; 1% instances), [it-pos/VERB]()-[it-pos/PRON]() (4; 0% instances), [it-pos/NUM]()-[it-pos/NOUN]() (3; 0% instances), [it-pos/PROPN]()-[it-pos/X]() (3; 0% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (2; 0% instances), [it-pos/NUM]()-[it-pos/PROPN]() (2; 0% instances), [it-pos/ADJ]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/DET]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/NUM]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/VERB]() (1; 0% instances), [it-pos/NUM]()-[it-pos/PRON]() (1; 0% instances), [it-pos/PRON]()-[it-pos/X]() (1; 0% instances), [it-pos/X]()-[it-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 appos	color:blue
1	Michelangelo	Michelangelo	PROPN	SP	_	0	root	_	_
2	Lamberti	Lamberti	PROPN	SP	_	1	flat:name	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	1	punct	_	_
4	30	30	NUM	N	NumType=Card	5	nummod	_	_
5	anni	anno	NOUN	S	Gender=Masc|Number=Plur	1	nmod	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	1	punct	_	_
7	geometra	geometra	NOUN	S	Number=Sing	1	appos	_	_
8	lecchese	lecchese	ADJ	A	Number=Sing	7	amod	_	SpaceAfter=No
9	:	:	PUNCT	FC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 appos	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	politica	politica	NOUN	S	Gender=Fem|Number=Sing	13	nsubj	_	_
3	di	di	ADP	E	_	5	case	_	_
4	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	cetnici	cetnico	NOUN	S	Gender=Masc|Number=Plur	2	nmod	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	2	punct	_	_
7	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	pulizia	pulizia	NOUN	S	Gender=Fem|Number=Sing	2	appos	_	_
9	etnica	etnico	ADJ	A	Gender=Fem|Number=Sing	8	amod	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	2	punct	_	_
11	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	genocidio	genocidio	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 appos	color:blue
1	Veniva	venire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	da	da	ADP	E	_	3	case	_	_
3	me	me	PRON	PE	Number=Sing|Person=1|PronType=Prs	1	obl	_	_
4	questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	pidiessina	pidiessino	NOUN	S	Gender=Fem|Number=Sing	1	nsubj	_	_
6	tremenda	tremendo	ADJ	A	Gender=Fem|Number=Sing	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	5	punct	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Alberta	Alberta	PROPN	SP	_	5	appos	_	_
10	De	De	PROPN	SP	_	9	flat:name	_	_
11	Simone	Simone	PROPN	SP	_	9	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is universal.

69 nodes (0%) are attached to their parents as `appos`.

69 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.66666666666667.

The following 13 pairs of parts of speech are connected with `appos`: [it-pos/NOUN]()-[it-pos/NOUN]() (17; 25% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (13; 19% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (12; 17% instances), [it-pos/X]()-[it-pos/NOUN]() (7; 10% instances), [it-pos/VERB]()-[it-pos/NOUN]() (4; 6% instances), [it-pos/PRON]()-[it-pos/PROPN]() (3; 4% instances), [it-pos/PROPN]()-[it-pos/PRON]() (3; 4% instances), [it-pos/PROPN]()-[it-pos/PROPN]() (3; 4% instances), [it-pos/PRON]()-[it-pos/NOUN]() (2; 3% instances), [it-pos/PROPN]()-[it-pos/NUM]() (2; 3% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (1; 1% instances), [it-pos/NUM]()-[it-pos/NOUN]() (1; 1% instances), [it-pos/X]()-[it-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 19 appos	color:blue
1	Hanska	Hanska	PROPN	SP	_	3	nsubj:pass	_	_
2	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	aux:pass	_	_
3	sposata	sposare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	con	con	ADP	E	_	6	case	_	_
5	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	3	obl	_	_
7	vent'	venti	NUM	N	NumType=Card	8	nummod	_	SpaceAfter=No
8	anni	anno	NOUN	S	Gender=Masc|Number=Plur	6	nmod	_	_
9	più	più	ADV	B	_	10	advmod	_	_
10	grande	grande	ADJ	A	Number=Sing	6	amod	_	_
11	di	di	ADP	E	_	12	case	_	_
12	lei	lei	PRON	PE	Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	obl	_	SpaceAfter=No
13	,	,	PUNCT	FF	_	6	punct	_	_
14	Wacław	Wacław	PROPN	SP	_	6	appos	_	_
15	Hanski	Hanski	PROPN	SP	_	14	flat:name	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	14	punct	_	_
17	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
18	ricco	ricco	ADJ	A	Gender=Masc|Number=Sing	19	amod	_	_
19	possidente	possidente	NOUN	S	Number=Sing	6	appos	_	_
20	polacco	polacco	ADJ	A	Gender=Masc|Number=Sing	19	amod	_	_
21	che	che	PRON	PR	PronType=Rel	22	nsubj	_	_
22	viveva	vivere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	19	acl:relcl	_	_
23	vicino	vicino	ADV	B	_	25	case	_	_
24	a	a	ADP	E	_	23	fixed	_	_
25	Kiev	Kiev	PROPN	SP	_	22	obl	_	SpaceAfter=No
26	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 appos	color:blue
1	Per	per	ADP	E	_	2	case	_	_
2	esempio	esempio	NOUN	S	Gender=Masc|Number=Sing	12	obl	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	Hyacinthe	Hyacinthe	PROPN	SP	_	12	nsubj	_	_
5	de	de	ADP	E	_	4	flat:name	_	_
6	Latouche	Latouche	PROPN	SP	_	4	flat:name	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	4	punct	_	_
8	amico	amico	NOUN	S	Gender=Masc|Number=Sing	4	appos	_	_
9	di	di	ADP	E	_	10	case	_	_
10	Balzac	Balzac	PROPN	SP	_	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	8	punct	_	_
12	aveva	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
13	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
14	certa	certo	ADJ	A	Gender=Fem|Number=Sing	15	amod	_	_
15	conoscenza	conoscenza	NOUN	S	Gender=Fem|Number=Sing	12	obj	_	_
16	di	di	ADP	E	_	17	mark	_	_
17	appendere	appendere	VERB	V	VerbForm=Inf	15	acl	_	_
18	carta	carta	NOUN	S	Gender=Fem|Number=Sing	17	obj	_	_
19	da	da	ADP	E	_	20	case	_	_
20	parati	parato	NOUN	S	Gender=Masc|Number=Plur	18	nmod	_	SpaceAfter=No
21	.	.	PUNCT	FS	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 appos	color:blue
1	In	in	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	2012	2012	NUM	N	NumType=Card	8	obl	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	paese	paese	NOUN	S	Gender=Masc|Number=Sing	8	nsubj	_	_
7	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	eletto	eleggere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
10	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	12	det:poss	_	_
11	primo	primo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	12	amod	_	_
12	presidente	presidente	NOUN	S	Gender=Masc|Number=Sing	8	obj	_	_
13	donna	donna	NOUN	S	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
14	,	,	PUNCT	FF	_	12	punct	_	_
15	Park	Park	PROPN	SP	_	12	appos	_	_
16	Geun	Geun	PROPN	SP	_	15	flat:name	_	SpaceAfter=No
17	-	-	PUNCT	FF	_	15	punct	_	SpaceAfter=No
18	hye	hye	PROPN	SP	Gender=Fem|Number=Plur	15	flat:name	_	SpaceAfter=No
19	.	.	PUNCT	FS	_	8	punct	_	_

~~~



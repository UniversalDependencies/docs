

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

397 nodes (0%) are attached to their parents as `parataxis`.

306 instances of `parataxis` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.5541561712846.

The following 23 pairs of parts of speech are connected with `parataxis`: [it-pos/VERB]()-[it-pos/VERB]() (206; 52% instances), [it-pos/NOUN]()-[it-pos/VERB]() (57; 14% instances), [it-pos/ADJ]()-[it-pos/VERB]() (38; 10% instances), [it-pos/VERB]()-[it-pos/NOUN]() (20; 5% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (17; 4% instances), [it-pos/PROPN]()-[it-pos/PROPN]() (12; 3% instances), [it-pos/PROPN]()-[it-pos/VERB]() (9; 2% instances), [it-pos/PRON]()-[it-pos/VERB]() (6; 2% instances), [it-pos/VERB]()-[it-pos/PROPN]() (5; 1% instances), [it-pos/ADV]()-[it-pos/VERB]() (4; 1% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (3; 1% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (3; 1% instances), [it-pos/NUM]()-[it-pos/VERB]() (3; 1% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (3; 1% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (2; 1% instances), [it-pos/VERB]()-[it-pos/ADJ]() (2; 1% instances), [it-pos/ADJ]()-[it-pos/ADV]() (1; 0% instances), [it-pos/INTJ]()-[it-pos/VERB]() (1; 0% instances), [it-pos/PRON]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/PRON]() (1; 0% instances), [it-pos/VERB]()-[it-pos/PRON]() (1; 0% instances), [it-pos/X]()-[it-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 parataxis	color:blue
1	Dusty	Dusty	PROPN	SP	_	12	nsubj	_	_
2	e	e	CCONJ	CC	_	3	cc	_	_
3	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	6	punct	_	_
5	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	6	iobj	_	_
6	piace	piacere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	parataxis	_	_
7	dir	dire	VERB	V	VerbForm=Inf	6	csubj	_	_
8	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	,	,	PUNCT	FF	_	12	punct	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	domenica	domenica	NOUN	S	Gender=Fem|Number=Sing	12	obl	_	_
12	andiamo	andare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
13	in	in	ADP	E	_	14	case	_	_
14	chiesa	chiesa	NOUN	S	Gender=Fem|Number=Sing	12	obl	_	_
15	qui	qui	ADV	B	_	12	advmod	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 parataxis	color:blue
1	"	"	PUNCT	FB	_	10	punct	_	SpaceAfter=No
2	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	religione	religione	NOUN	S	Gender=Fem|Number=Sing	10	nsubj	_	_
4	-	-	PUNCT	FB	_	5	punct	_	_
5	sento	sentire	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	parataxis	_	_
6	dire	dire	VERB	V	VerbForm=Inf	5	ccomp	_	_
7	-	-	PUNCT	FB	_	5	punct	_	_
8	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	fatto	fatto	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
11	privato	privato	ADJ	A	Gender=Masc|Number=Sing	10	amod	_	SpaceAfter=No
12	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj:pass	_	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	aux:pass	_	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is universal.

16 nodes (0%) are attached to their parents as `parataxis`.

9 instances of `parataxis` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.5625.

The following 4 pairs of parts of speech are connected with `parataxis`: [it-pos/VERB]()-[it-pos/VERB]() (13; 81% instances), [it-pos/ADJ]()-[it-pos/VERB]() (1; 6% instances), [it-pos/NUM]()-[it-pos/VERB]() (1; 6% instances), [it-pos/PRON]()-[it-pos/VERB]() (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 parataxis	color:blue
1	Dusty	Dusty	PROPN	SP	_	12	nsubj	_	_
2	e	e	CCONJ	CC	_	3	cc	_	_
3	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	6	iobj	_	_
6	piace	piacere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	parataxis	_	_
7	dir	dire	VERB	V	VerbForm=Inf	6	csubj	_	_
8	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	,	,	PUNCT	FF	_	6	punct	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	domenica	domenica	NOUN	S	Gender=Fem|Number=Sing	12	obl	_	_
12	andiamo	andare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
13	in	in	ADP	E	_	14	case	_	_
14	chiesa	chiesa	NOUN	S	Gender=Fem|Number=Sing	12	obl	_	_
15	qui	qui	ADV	B	_	12	advmod	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 parataxis	color:blue
1	William	William	PROPN	SP	_	17	nsubj	_	_
2	Shakespeare	Shakespeare	PROPN	SP	_	1	flat:name	_	_
3	(	(	PUNCT	FB	_	4	punct	_	SpaceAfter=No
4	26	26	NUM	N	NumType=Card	1	appos	_	_
5	aprile	aprile	NOUN	S	Gender=Masc|Number=Sing	4	flat	_	_
6	1564	1564	NUM	N	NumType=Card	4	flat	_	_
7	(	(	PUNCT	FB	_	8	punct	_	SpaceAfter=No
8	battezzato	battezzare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	parataxis	_	SpaceAfter=No
9	)	)	PUNCT	FB	_	8	punct	_	SpaceAfter=No
10	-	-	PUNCT	FF	_	4	punct	_	SpaceAfter=No
11	23	23	NUM	N	NumType=Card	4	nmod	_	_
12	aprile	aprile	NOUN	S	Gender=Masc|Number=Sing	11	flat	_	_
13	1616	1616	NUM	N	NumType=Card	11	flat	_	SpaceAfter=No
14	)	)	PUNCT	FB	_	4	punct	_	_
15	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	17	cop	_	_
16	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	poeta	poeta	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
18	,	,	PUNCT	FF	_	19	punct	_	_
19	drammaturgo	drammaturgo	NOUN	S	Gender=Masc|Number=Sing	17	conj	_	_
20	e	e	CCONJ	CC	_	21	cc	_	_
21	attore	attore	NOUN	S	Gender=Masc|Number=Sing	17	conj	_	_
22	inglese	inglese	ADJ	A	Number=Sing	21	amod	_	SpaceAfter=No
23	,	,	PUNCT	FF	_	21	punct	_	_
24	generalmente	generalmente	ADV	B	_	25	advmod	_	_
25	considerato	considerare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	17	acl	_	_
26	come	come	ADP	E	_	30	case	_	_
27	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
28	più	più	ADV	B	_	29	advmod	_	_
29	importante	importante	ADJ	A	Number=Sing	30	amod	_	_
30	scrittore	scrittore	NOUN	S	Gender=Masc|Number=Sing	25	obl	_	_
31	in	in	ADP	E	_	32	case	_	_
32	lingua	lingua	NOUN	S	Gender=Fem|Number=Sing	30	nmod	_	_
33	inglese	inglese	ADJ	A	Number=Sing	32	amod	_	_
34	e	e	CCONJ	CC	_	38	cc	_	_
35	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	38	det	_	_
36	più	più	ADV	B	_	37	advmod	_	_
37	eminente	eminente	ADJ	A	Number=Sing	38	amod	_	_
38	drammaturgo	drammaturgo	NOUN	S	Gender=Masc|Number=Sing	30	conj	_	_
39	di	di	ADP	E	_	41	case	_	_
40	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	41	det	_	_
41	mondo	mondo	NOUN	S	Gender=Masc|Number=Sing	38	nmod	_	SpaceAfter=No
42	.	.	PUNCT	FS	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 25 parataxis	color:blue
1	"	"	PUNCT	FB	_	12	punct	_	SpaceAfter=No
2	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	nobiltà	nobiltà	NOUN	S	Gender=Fem	12	nsubj	_	_
4	e	e	CCONJ	CC	_	5	cc	_	_
5	autorità	autorità	NOUN	S	Gender=Fem	3	conj	_	_
6	di	di	ADP	E	_	8	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	talento	talento	NOUN	S	Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	3	punct	_	_
10	sono	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
11	più	più	ADV	B	_	12	advmod	_	_
12	importanti	importante	ADJ	A	Number=Plur	0	root	_	_
13	di	di	ADP	E	_	15	case	_	_
14	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	nobiltà	nobiltà	NOUN	S	Gender=Fem	12	obl	_	_
16	di	di	ADP	E	_	17	case	_	_
17	nome	nome	NOUN	S	Gender=Masc|Number=Sing	15	nmod	_	_
18	e	e	CCONJ	CC	_	21	cc	_	_
19	di	di	ADP	E	_	21	case	_	_
20	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	potere	potere	NOUN	S	Gender=Masc|Number=Sing	15	conj	_	_
22	terreno	terreno	ADJ	A	Gender=Masc|Number=Sing	21	amod	_	SpaceAfter=No
23	"	"	PUNCT	FB	_	12	punct	_	SpaceAfter=No
24	,	,	PUNCT	FF	_	12	punct	_	_
25	scrisse	scrivere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	parataxis	_	_
26	in	in	ADP	E	_	28	case	_	_
27	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	28	det	_	_
28	1830	1830	NUM	N	NumType=Card	25	obl	_	SpaceAfter=No
29	.	.	PUNCT	FS	_	12	punct	_	_

~~~



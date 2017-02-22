

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

40 nodes (0%) are attached to their parents as `discourse`.

30 instances of `discourse` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.025.

The following 6 pairs of parts of speech are connected with `discourse`: [fr-pos/VERB]()-[fr-pos/INTJ]() (21; 53% instances), [fr-pos/NOUN]()-[fr-pos/INTJ]() (11; 28% instances), [fr-pos/ADJ]()-[fr-pos/INTJ]() (5; 13% instances), [fr-pos/PRON]()-[fr-pos/INTJ]() (1; 3% instances), [fr-pos/PROPN]()-[fr-pos/INTJ]() (1; 3% instances), [fr-pos/VERB]()-[fr-pos/SYM]() (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 discourse	color:blue
1	Tournons	tourner	VERB	_	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	dans	dans	ADP	_	_	4	case	_	_
3	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	Morsure	Morsure	PROPN	_	_	1	obl	_	_
5	:	:	PUNCT	_	_	1	punct	_	_
6	Ah	ah	INTJ	_	_	1	discourse	_	_
7	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Ô	ô	INTJ	_	_	3	discourse	_	_
2	ma	son	DET	_	Gender=Fem|Number=Sing|PronType=Prs	3	nmod:poss	_	_
3	vigne	vigne	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
4	bien	bien	ADV	_	_	5	advmod	_	_
5	aimée	aimer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	amod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Oui	oui	INTJ	_	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	5	nsubj	_	SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	excellent	excellent	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	magnifique	magnifique	ADJ	_	Gender=Masc|Number=Sing	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	magistral	magistral	ADJ	_	Gender=Masc|Number=Sing	5	conj	_	_
10	!	!	PUNCT	_	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.

9 nodes (0%) are attached to their parents as `discourse`.

9 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 4 pairs of parts of speech are connected with `discourse`: [fr-pos/NOUN]()-[fr-pos/ADP]() (4; 44% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (3; 33% instances), [fr-pos/ADJ]()-[fr-pos/ADV]() (1; 11% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (1; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Voici	voici	ADP	E	_	3	discourse	_	_
2	une	un	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	photo	photo	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
4	de	de	ADP	E	_	5	case	_	_
5	Cannery	Cannery	PROPN	SP	_	3	nmod	_	_
6	Row	Row	PROPN	SP	_	5	flat:name	_	_
7	en	en	ADP	E	_	8	case	_	_
8	1932	1932	NUM	N	NumType=Card	5	nummod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 discourse	color:blue
1	Merci	merci	ADV	B	_	8	discourse	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	monsieur	monsieur	NOUN	S	Gender=Masc|Number=Sing	8	vocative	_	_
4	Segni	Segni	PROPN	SP	_	3	flat	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	3	punct	_	_
6	je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
7	le	le	PRON	P	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
8	ferai	faire	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	0	root	_	_
9	bien	bien	ADV	B	_	10	advmod	_	_
10	volontiers	volontiers	ADV	B	_	8	advmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 58	bgColor:blue
# visual-style 58	fgColor:white
# visual-style 59	bgColor:blue
# visual-style 59	fgColor:white
# visual-style 59 58 discourse	color:blue
1	Monsieur	monsieur	NOUN	S	Gender=Masc|Number=Sing	6	vocative	_	_
2	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	président	président	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	souhaite	souhaiter	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	vivement	vivement	ADV	B	_	6	advmod	_	_
8	remercier	remercier	VERB	V	VerbForm=Inf	6	xcomp	_	_
9	mme	madame	NOUN	S	Gender=Fem	8	obj	_	_
10	Schroedter	Schroedter	PROPN	SP	_	9	flat	_	_
11	pour	pour	ADP	E	_	13	case	_	_
12	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	travail	travail	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	_
14	qu'	que	PRON	PR	PronType=Rel	17	obj	_	SpaceAfter=No
15	elle	elle	PRON	PE	Gender=Fem|Number=Sing|Person=3|PronType=Prs	17	nsubj	_	_
16	a	avoir	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux	_	_
17	accompli	accomplir	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	13	acl:relcl	_	_
18	dans	dans	ADP	E	_	20	case	_	_
19	ce	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	20	det	_	_
20	domaine	domaine	NOUN	S	Gender=Masc|Number=Sing	17	obl	_	_
21	et	et	CCONJ	CC	_	22	cc	_	_
22	expliquer	expliquer	VERB	V	VerbForm=Inf	8	conj	_	_
23	à	à	ADP	E	_	25	case	_	_
24	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	25	det	_	_
25	députés	député	NOUN	S	Gender=Masc|Number=Plur	22	obl	_	_
26	que	que	SCONJ	CS	_	28	mark	_	_
27	j'	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	28	nsubj	_	SpaceAfter=No
28	interviens	intervenir	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	22	ccomp	_	_
29	à	à	ADP	E	_	31	case	_	_
30	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	31	det	_	_
31	nom	nom	NOUN	S	Gender=Masc|Number=Sing	28	obl	_	_
32	de	de	ADP	E	_	34	case	_	_
33	ma	mon	DET	AP	Gender=Fem|Number=Sing|PronType=Prs	34	nmod:poss	_	_
34	collègue	collègue	NOUN	S	Gender=Fem|Number=Sing	31	nmod	_	SpaceAfter=No
35	,	,	PUNCT	FF	_	34	punct	_	_
36	mme	madame	NOUN	S	Gender=Fem	34	appos	_	_
37	Flautre	Flautre	PROPN	SP	_	36	flat	_	SpaceAfter=No
38	,	,	PUNCT	FF	_	36	punct	_	_
39	qui	qui	PRON	PR	PronType=Rel	41	nsubj	_	_
40	a	avoir	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	41	aux	_	_
41	suivi	suivre	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	34	acl:relcl	_	_
42	ce	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	43	det	_	_
43	sujet	sujet	NOUN	S	Gender=Masc|Number=Sing	41	obj	_	_
44	pour	pour	ADP	E	_	46	case	_	_
45	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	46	det	_	_
46	commission	commission	NOUN	S	Gender=Fem|Number=Sing	41	obl	_	_
47	de	de	ADP	E	_	49	case	_	_
48	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	49	det	_	SpaceAfter=No
49	emploi	emploi	NOUN	S	Gender=Masc|Number=Sing	46	nmod	_	_
50	et	et	CCONJ	CC	_	53	cc	_	_
51	de	de	ADP	E	_	53	case	_	_
52	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	53	det	_	_
53	affaires	affaire	NOUN	S	Gender=Masc|Number=Plur	49	conj	_	_
54	sociales	social	ADJ	A	Gender=Fem|Number=Plur	41	amod	_	_
55	mais	mais	CCONJ	CC	_	41	cc	_	_
56	qui	qui	PRON	PR	PronType=Rel	59	nsubj	_	_
57	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	59	cop	_	_
58	hélas	helas	ADV	B	_	59	discourse	_	_
59	malade	malade	ADJ	A	Number=Sing	41	acl:relcl	_	SpaceAfter=No
60	.	.	PUNCT	FS	_	6	punct	_	_

~~~





--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

49 nodes (0%) are attached to their parents as `orphan`.

34 instances of `orphan` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.26530612244898.

The following 16 pairs of parts of speech are connected with `orphan`: [it-pos/NOUN]()-[it-pos/NOUN]() (17; 35% instances), [it-pos/NOUN]()-[it-pos/ADV]() (7; 14% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (5; 10% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (4; 8% instances), [it-pos/ADV]()-[it-pos/ADV]() (2; 4% instances), [it-pos/NOUN]()-[it-pos/ADP]() (2; 4% instances), [it-pos/NOUN]()-[it-pos/VERB]() (2; 4% instances), [it-pos/PRON]()-[it-pos/NOUN]() (2; 4% instances), [it-pos/ADV]()-[it-pos/NOUN]() (1; 2% instances), [it-pos/NOUN]()-[it-pos/NUM]() (1; 2% instances), [it-pos/NOUN]()-[it-pos/PRON]() (1; 2% instances), [it-pos/NUM]()-[it-pos/NOUN]() (1; 2% instances), [it-pos/PRON]()-[it-pos/PRON]() (1; 2% instances), [it-pos/PRON]()-[it-pos/PROPN]() (1; 2% instances), [it-pos/PROPN]()-[it-pos/NUM]() (1; 2% instances), [it-pos/SYM]()-[it-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 18 orphan	color:blue
1	Se	se	SCONJ	CS	_	10	mark	_	_
2	uno	uno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	10	nsubj	_	_
3	o	o	CCONJ	CC	_	4	cc	_	_
4	più	più	PRON	PI	PronType=Ind	2	conj	_	_
5	di	di	ADP	E	_	6	case	_	_
6	essi	esso	PRON	PE	Gender=Masc|Number=Plur|Person=3|PronType=Prs	4	nmod	_	_
7	sono	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
8	da	da	ADP	E	_	10	case	_	_
9	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	parte	parte	NOUN	S	Gender=Fem|Number=Sing	24	obl	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	13	punct	_	_
12	e	e	CCONJ	CC	_	13	cc	_	_
13	uno	uno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	10	conj	_	_
14	o	o	CCONJ	CC	_	15	cc	_	_
15	più	più	PRON	PI	PronType=Ind	13	conj	_	_
16	da	da	ADP	E	_	18	case	_	_
17	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	parte	parte	NOUN	S	Gender=Fem|Number=Sing	10	orphan	_	_
19	opposta	opposto	ADJ	A	Gender=Fem|Number=Sing	18	amod	_	SpaceAfter=No
20	,	,	PUNCT	FF	_	10	punct	_	_
21	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	muro	muro	NOUN	S	Gender=Masc|Number=Sing	24	nsubj:pass	_	_
23	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	aux:pass	_	_
24	reputato	reputare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
25	comune	comune	ADJ	A	Number=Sing	24	xcomp	_	SpaceAfter=No
26	:	:	PUNCT	FC	_	24	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 orphan	color:blue
1	Aggiungo	aggiungere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	rosmarino	rosmarino	NOUN	S	Gender=Masc|Number=Sing	1	obj	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	6	punct	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	salvia	salvia	NOUN	S	Gender=Fem|Number=Sing	3	conj	_	_
7	e	e	CCONJ	CC	_	9	cc	_	_
8	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	alloro	alloro	NOUN	S	Gender=Masc|Number=Sing	3	conj	_	_
10	tritati	tritare	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	3	acl	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	14	punct	_	_
12	poi	poi	ADV	B	_	14	orphan	_	_
13	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	coniglio	coniglio	NOUN	S	Gender=Masc|Number=Sing	3	conj	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 orphan	color:blue
1	Chi	chi	PRON	PQ	PronType=Int	3	nsubj	_	_
2	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	detto	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No
5	lasciamo	lasciare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
6	a	a	ADP	E	_	7	case	_	_
7	Yeltsin	Yeltsin	PROPN	SP	_	5	obl	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	10	det:poss	_	_
10	vodka	vodka	NOUN	S	Gender=Fem	5	obj	_	_
11	e	e	CCONJ	CC	_	17	cc	_	_
12	a	a	ADP	E	_	14	case	_	_
13	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	Cecenia	Cecenia	PROPN	SP	_	17	orphan	_	_
15	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
16	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	17	det:poss	_	_
17	libertà	libertà	NOUN	S	Gender=Fem	5	conj	_	SpaceAfter=No
18	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No
19	?	?	PUNCT	FS	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is universal.

7 nodes (0%) are attached to their parents as `orphan`.

6 instances of `orphan` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.28571428571429.

The following 7 pairs of parts of speech are connected with `orphan`: [it-pos/NOUN]()-[it-pos/ADV]() (1; 14% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (1; 14% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (1; 14% instances), [it-pos/PRON]()-[it-pos/ADV]() (1; 14% instances), [it-pos/PRON]()-[it-pos/PROPN]() (1; 14% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (1; 14% instances), [it-pos/SYM]()-[it-pos/NOUN]() (1; 14% instances).


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 28 orphan	color:blue
1	Ringrazio	ringraziare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	innanzi	innanzi	ADV	B	_	3	case	_	_
3	tutto	tutto	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	1	obl	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	relatore	relatore	NOUN	S	Gender=Masc|Number=Sing	1	obj	_	_
6	per	per	ADP	E	_	9	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	9	det:poss	_	_
9	lavoro	lavoro	NOUN	S	Gender=Masc|Number=Sing	1	obl	_	_
10	estremamente	estremamente	ADV	B	_	11	advmod	_	_
11	preciso	preciso	ADJ	A	Gender=Masc|Number=Sing	9	amod	_	_
12	e	e	CCONJ	CC	_	13	cc	_	_
13	tecnico	tecnico	ADJ	A	Gender=Masc|Number=Sing	11	conj	_	_
14	su	su	ADP	E	_	16	case	_	_
15	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	fascicolo	fascicolo	NOUN	S	Gender=Masc|Number=Sing	9	nmod	_	_
17	in	in	ADP	E	_	18	case	_	_
18	parola	parola	NOUN	S	Gender=Fem|Number=Sing	16	nmod	_	SpaceAfter=No
19	,	,	PUNCT	FF	_	25	punct	_	_
20	e	e	CCONJ	CC	_	25	cc	_	_
21	in	in	ADP	E	_	23	case	_	_
22	secondo	secondo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	23	amod	_	_
23	luogo	luogo	NOUN	S	Gender=Masc|Number=Sing	25	nmod	_	_
24	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	25	det	_	_
25	commissione	commissione	NOUN	S	Gender=Fem|Number=Sing	1	conj	_	_
26	per	per	ADP	E	_	28	case	_	_
27	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	28	det	_	_
28	proposta	proposta	NOUN	S	Gender=Fem|Number=Sing	25	orphan	_	_
29	presentata	presentare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	28	acl	_	SpaceAfter=No
30	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 orphan	color:blue
1	Notizie	notizia	NOUN	S	Gender=Fem|Number=Plur	3	nsubj	_	_
2	successive	successivo	ADJ	A	Gender=Fem|Number=Plur	1	amod	_	_
3	affermano	affermare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	che	che	SCONJ	CS	_	5	mark	_	_
5	interpretò	interpretare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	ccomp	_	_
6	anche	anche	ADV	B	_	7	advmod	_	_
7	Adamo	Adamo	PROPN	SP	_	5	obj	_	_
8	in	in	ADP	E	_	11	case	_	_
9	As	As	PROPN	SP	_	11	mark	_	_
10	You	You	PROPN	SP	_	11	nsubj	_	_
11	Like	Like	PROPN	SP	_	5	advcl	_	_
12	It	It	PROPN	SP	_	11	obj	_	_
13	e	e	CCONJ	CC	_	15	cc	_	_
14	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	coro	coro	NOUN	S	Gender=Masc|Number=Sing	5	conj	_	_
16	in	in	ADP	E	_	17	case	_	_
17	Enrico	Enrico	PROPN	SP	_	15	orphan	_	_
18	V	quinto	ADJ	NO	Number=Sing|NumType=Ord	17	flat	_	SpaceAfter=No
19	,	,	PUNCT	FF	_	3	punct	_	_
20	sebbene	sebbene	SCONJ	CS	_	23	mark	_	_
21	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	22	det	_	_
22	studiosi	studioso	NOUN	S	Gender=Masc|Number=Plur	23	nsubj	_	_
23	dubitino	dubitare	VERB	V	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	_	_
24	di	di	ADP	E	_	26	case	_	_
25	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	26	det	_	_
26	fonti	fonte	NOUN	S	Gender=Fem|Number=Plur	23	obl	_	_
27	di	di	ADP	E	_	29	case	_	_
28	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	29	det	_	_
29	informazioni	informazione	NOUN	S	Gender=Fem|Number=Plur	26	nmod	_	SpaceAfter=No
30	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 40 orphan	color:blue
1	Né	né	CCONJ	CC	_	2	cc	_	_
2	Marx	Marx	PROPN	SP	_	8	nsubj	_	_
3	né	né	CCONJ	CC	_	5	cc	_	_
4	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	fisiocrati	fisiocrati	NOUN	S	Gender=Masc|Number=Plur	2	conj	_	_
6	avrebbero	avere	AUX	VA	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
7	potuto	potere	AUX	VM	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	aux	_	_
8	immaginare	immaginare	VERB	V	VerbForm=Inf	0	root	_	_
9	quante	quanto	DET	DQ	Gender=Fem|Number=Plur|PronType=Int	10	det	_	_
10	attività	attività	NOUN	S	Gender=Fem	15	nsubj	_	_
11	ben	bene	ADV	B	_	12	advmod	_	_
12	pagate	pagare	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	10	acl	_	_
13	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	15	expl	_	_
14	sarebbero	essere	AUX	VA	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
15	create	creare	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	8	ccomp	_	_
16	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	volta	volta	NOUN	S	Gender=Fem|Number=Sing	15	obl	_	_
18	esaurita	esaurire	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	17	acl	_	_
19	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	necessità	necessità	NOUN	S	Gender=Fem	18	nsubj:pass	_	_
21	di	di	ADP	E	_	22	mark	_	_
22	impiegare	impiegare	VERB	V	VerbForm=Inf	20	acl	_	_
23	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
24	60	60	NUM	N	NumType=Card	25	nummod	_	SpaceAfter=No
25	%	%	SYM	X	_	22	obj	_	_
26	di	di	ADP	E	_	28	case	_	_
27	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	28	det	_	_
28	forza	forza	NOUN	S	Gender=Fem|Number=Sing	25	nmod	_	_
29	lavoro	lavoro	NOUN	S	Gender=Masc|Number=Sing	28	compound	_	_
30	in	in	ADP	E	_	32	case	_	_
31	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	32	det	_	_
32	agricoltura	agricoltura	NOUN	S	Gender=Fem|Number=Sing	22	obl	_	_
33	e	e	CCONJ	CC	_	37	cc	_	_
34	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	37	det	_	_
35	altro	altro	ADJ	A	Gender=Masc|Number=Sing	37	amod	_	_
36	20	20	NUM	N	NumType=Card	37	nummod	_	SpaceAfter=No
37	%	%	SYM	X	_	22	conj	_	_
38	in	in	ADP	E	_	40	case	_	_
39	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	40	det	_	_
40	tessitura	tessitura	NOUN	S	Gender=Fem|Number=Sing	37	orphan	_	_
41	a	a	ADP	E	_	42	case	_	_
42	mano	mano	NOUN	S	Gender=Fem|Number=Sing	40	nmod	_	_
43	e	e	CCONJ	CC	_	46	cc	_	_
44	in	in	ADP	E	_	46	case	_	_
45	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	46	det	_	_
46	trasporto	trasporto	NOUN	S	Gender=Masc|Number=Sing	40	conj	_	_
47	via	via	ADP	E	_	48	case	_	_
48	terra	terra	NOUN	S	Gender=Fem|Number=Sing	46	nmod	_	_
49	con	con	ADP	E	_	51	case	_	_
50	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	51	det	_	_
51	cavalli	cavallo	NOUN	S	Gender=Masc|Number=Plur	46	nmod	_	_
52	e	e	CCONJ	CC	_	54	cc	_	_
53	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	54	det	_	_
54	carri	carro	NOUN	S	Gender=Masc|Number=Plur	51	conj	_	SpaceAfter=No
55	.	.	PUNCT	FS	_	8	punct	_	_

~~~



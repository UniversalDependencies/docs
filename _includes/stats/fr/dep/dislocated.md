

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

26 nodes (0%) are attached to their parents as `dislocated`.

24 instances of `dislocated` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.57692307692308.

The following 8 pairs of parts of speech are connected with `dislocated`: [fr-pos/VERB]()-[fr-pos/PRON]() (8; 31% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (5; 19% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (4; 15% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (3; 12% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (3; 12% instances), [fr-pos/ADJ]()-[fr-pos/PROPN]() (1; 4% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1; 4% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 dislocated	color:blue
1	Tout	tout	DET	_	Gender=Masc|Number=Sing	2	det	_	_
2	ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	13	dislocated	_	_
3	que	que	PRON	_	PronType=Rel	7	obj	_	_
4	l'	l'	PART	_	_	5	expl	_	SpaceAfter=No
5	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3	7	nsubj	_	_
6	peux	pouvoir	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	chercher	chercher	VERB	_	VerbForm=Inf	2	acl:relcl	_	_
8	en	en	ADP	_	_	9	case	_	_
9	pitou	pitou	PROPN	_	_	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	7	punct	_	_
11	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3	13	nsubj	_	_
12	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
13	trouve	trouver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	:)	:)	SYM	_	_	13	dep	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 dislocated	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	marocains	marocain	NOUN	_	Gender=Masc|Number=Plur	7	dislocated	_	SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	_	_
4	plus	plus	SCONJ	_	_	7	cc	_	_
5	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	_
6	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	réprimés	réprimer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	plus	plus	SCONJ	_	_	11	cc	_	_
10	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	11	nsubj	_	_
11	baisent	baiser	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	conj	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	main	main	NOUN	_	Gender=Fem|Number=Sing	11	obj	_	_
14	de	de	ADP	_	_	16	case	_	_
15	leur	son	DET	_	Gender=Masc|Number=Sing|PronType=Prs	16	nmod:poss	_	_
16	roi	roi	NOUN	_	Gender=Masc|Number=Sing	13	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 dislocated	color:blue
1	«	«	PUNCT	_	_	4	punct	_	_
2	Être	être	VERB	_	VerbForm=Inf	4	dislocated	_	_
3	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	4	nsubj	_	SpaceAfter=No
4	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	être	être	AUX	_	VerbForm=Inf	7	cop	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	valeur	valeur	NOUN	_	Gender=Fem|Number=Sing	4	xcomp	_	_
8	d'	de	ADP	_	_	10	case	_	SpaceAfter=No
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	variable	variable	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
11	liée	lier	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	10	amod	_	_
12	»	»	PUNCT	_	_	4	punct	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.

7 nodes (0%) are attached to their parents as `dislocated`.

5 instances of `dislocated` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.85714285714286.

The following 5 pairs of parts of speech are connected with `dislocated`: [fr-pos/ADJ]()-[fr-pos/NOUN]() (2; 29% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (2; 29% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (1; 14% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (1; 14% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (1; 14% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 dislocated	color:blue
1	Ça	ce	PRON	PD	PronType=Dem	5	nsubj	_	_
2	peut	pouvoir	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	être	être	AUX	VA	VerbForm=Inf	5	cop	_	_
4	très	très	ADV	B	_	5	advmod	_	_
5	compliqué	compliqué	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	5	punct	_	_
7	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	océan	océan	NOUN	S	Gender=Masc|Number=Sing	5	dislocated	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 dislocated	color:blue
1	Ces	ce	DET	DD	Number=Plur|PronType=Dem	2	det	_	_
2	femelles	femelle	NOUN	S	Gender=Fem|Number=Plur	7	dislocated	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	elles	elle	PRON	PE	Gender=Fem|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	_
5	n'	ne	PART	PART	Polarity=Neg	6	advmod	_	SpaceAfter=No
6	y	y	ADV	B	_	7	advmod	_	_
7	sont	être	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	pour	pour	ADP	E	_	9	case	_	_
9	rien	rien	PRON	PI	PronType=Ind	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 dislocated	color:blue
1	Dusty	Dusty	PROPN	SP	_	7	dislocated	_	_
2	et	et	CCONJ	CC	_	3	cc	_	_
3	moi	moi	PRON	PE	Number=Sing|Person=1|PronType=Prs	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
6	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	7	expl	_	_
7	plaisons	plaisons	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
8	à	à	ADP	E	_	9	case	_	_
9	dire	dire	VERB	V	VerbForm=Inf	7	xcomp	_	_
10	que	que	SCONJ	CS	_	15	mark	_	_
11	le	le	DET	RD	Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	dimanche	dimanche	NOUN	S	Gender=Fem|Number=Sing	15	dislocated	_	SpaceAfter=No
13	,	,	PUNCT	FF	_	12	punct	_	_
14	c'	ce	PRON	PD	PronType=Dem	15	nsubj	_	SpaceAfter=No
15	est	être	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	ccomp	_	_
16	là	là	ADV	B	_	15	advmod	_	_
17	que	que	SCONJ	CS	_	19	mark	_	_
18	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	19	nsubj	_	_
19	allons	aller	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	15	ccomp	_	_
20	à	à	ADP	E	_	22	case	_	_
21	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	22	det	_	SpaceAfter=No
22	église	église	NOUN	S	Gender=Fem|Number=Sing	19	obl	_	SpaceAfter=No
23	.	.	PUNCT	FS	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.

14 nodes (0%) are attached to their parents as `dislocated`.

7 instances of `dislocated` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.57142857142857.

The following 8 pairs of parts of speech are connected with `dislocated`: [fr-pos/PRON]()-[fr-pos/PROPN]() (5; 36% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (3; 21% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 7% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (1; 7% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (1; 7% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1; 7% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (1; 7% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 dislocated	color:blue
1	Qu'	que	PRON	_	PronType=Int	0	root	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	-ce	ce	PRON	_	Number=Sing|Person=3	1	nsubj	_	_
4	que	que	SCONJ	_	_	5	mark	_	_
5	Angiox	Angiox	PROPN	_	_	1	dislocated	_	_
6	et	et	CCONJ	_	_	12	cc	_	_
7	dans	dans	ADP	_	_	9	case	_	_
8	quel	quel	DET	_	Gender=Masc|Number=Sing|PronType=Int	9	det	_	_
9	cas	cas	NOUN	_	Gender=Masc|Number=Sing	12	obl	_	_
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:pass	_	SpaceAfter=No
11	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	12	nsubj:pass	_	_
12	utilisé	utiliser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	conj	_	_
13	2	2	NUM	_	NumType=Card	1	nummod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 dislocated	color:blue
1	Ce	ce	PRON	_	PronType=Rel	9	dislocated	_	_
2	que	que	PRON	_	PronType=Rel	4	obj	_	_
3	nous	il	PRON	_	Number=Plur|Person=1	4	nsubj	_	_
4	voulons	vouloir	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
5	surtout	surtout	ADV	_	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	c'	ce	PRON	_	Number=Sing|Person=3	9	nsubj	_	SpaceAfter=No
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	économiser	économiser	VERB	_	VerbForm=Inf	0	root	_	_
10	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	combustibles	combustible	NOUN	_	Gender=Masc|Number=Plur	9	obj	_	_
12	fossiles	fossile	ADJ	_	Number=Plur	11	amod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 dislocated	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3	4	nsubj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	lieu	lieu	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	commun	commun	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	_
6	de	de	ADP	_	_	7	mark	_	_
7	dire	dire	VERB	_	VerbForm=Inf	4	dislocated	_	_
8	que	que	SCONJ	_	_	26	mark	_	_
9	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	Union	Union	PROPN	_	Number=Sing	26	nsubj	_	_
11	européenne	européen	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	telle	tel	ADJ	_	Gender=Fem|Number=Sing	11	conj	_	_
14	qu'	que	SCONJ	_	_	16	mark	_	SpaceAfter=No
15	elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3	16	nsubj	_	_
16	fonctionne	fonctionner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	acl	_	_
17	aujourd'	aujourd'	ADP	_	_	16	advmod	_	SpaceAfter=No
18	hui	hui	NOUN	_	_	17	fixed	_	SpaceAfter=No
19	,	,	PUNCT	_	_	16	punct	_	_
20	face	face	NOUN	_	Gender=Fem|Number=Sing	24	case	_	_
21	à	à	ADP	_	_	20	fixed	_	_
22	tous	tout	ADJ	_	Gender=Masc|Number=Plur	24	amod	_	_
23	ces	ce	DET	_	Number=Plur|PronType=Dem	24	det	_	_
24	défis	défi	NOUN	_	Gender=Masc|Number=Plur	26	obl	_	SpaceAfter=No
25	,	,	PUNCT	_	_	26	punct	_	_
26	appelle	appeler	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	_
27	absolument	absolument	ADV	_	_	26	advmod	_	_
28	certaines	certain	DET	_	Gender=Fem|Number=Plur	29	det	_	_
29	transformations	transformation	NOUN	_	Gender=Fem|Number=Plur	26	obj	_	SpaceAfter=No
30	,	,	PUNCT	_	_	29	punct	_	_
31	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	32	det	_	_
32	transformations	transformation	NOUN	_	Gender=Fem|Number=Plur	29	appos	_	_
33	qui	qui	PRON	_	PronType=Rel	34	nsubj	_	_
34	auront	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	32	acl:relcl	_	_
35	comme	comme	ADP	_	_	36	case	_	_
36	but	but	NOUN	_	Gender=Masc|Number=Sing	34	obl	_	_
37	principal	principal	ADJ	_	Gender=Masc|Number=Sing	36	amod	_	_
38	de	de	ADP	_	_	40	mark	_	_
39	la	le	PRON	_	Gender=Fem|Number=Sing|Person=3	42	obj	_	_
40	faire	faire	VERB	_	VerbForm=Inf	34	xcomp	_	_
41	encore	encore	ADV	_	_	42	advmod	_	_
42	évoluer	évoluer	VERB	_	VerbForm=Inf	40	xcomp	_	_
43	sur	sur	ADP	_	_	45	case	_	_
44	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	45	det	_	_
45	base	base	NOUN	_	Gender=Fem|Number=Sing	42	obl	_	_
46	de	de	ADP	_	_	48	case	_	_
47	tout	tout	ADJ	_	Gender=Masc|Number=Sing	48	amod	_	_
48	ce	ce	PRON	_	PronType=Rel	45	nmod	_	_
49	que	que	PRON	_	PronType=Rel	55	obj	_	_
50	nous	soi	PRON	_	Number=Plur|Person=1|PronType=Prs	55	dislocated	_	_
51	tous	tout	ADJ	_	Gender=Masc|Number=Plur	50	amod	_	SpaceAfter=No
52	,	,	PUNCT	_	_	55	punct	_	_
53	nous	il	PRON	_	Number=Plur|Person=1	55	nsubj	_	_
54	avons	avoir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	55	aux	_	_
55	admis	admettre	VERB	_	Gender=Masc|Tense=Past|VerbForm=Part	48	acl:relcl	_	_
56	jusqu'	jusque	ADP	_	_	59	case	_	SpaceAfter=No
57	à	à	ADP	_	_	56	fixed	_	_
58	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	59	det	_	_
59	jour	jour	NOUN	_	Gender=Masc|Number=Sing	55	obl	_	SpaceAfter=No
60	.	.	PUNCT	_	_	4	punct	_	_

~~~



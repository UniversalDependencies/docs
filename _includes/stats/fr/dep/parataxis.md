

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

573 nodes (0%) are attached to their parents as `parataxis`.

524 instances of `parataxis` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.9458987783595.

The following 24 pairs of parts of speech are connected with `parataxis`: [fr-pos/VERB]()-[fr-pos/VERB]() (315; 55% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (93; 16% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (48; 8% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (38; 7% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (21; 4% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (13; 2% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (9; 2% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (6; 1% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (5; 1% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (4; 1% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (4; 1% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (3; 1% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/ADP]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/INTJ]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 parataxis	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	question	question	NOUN	_	Gender=Fem|Number=Sing	4	nsubj	_	_
3	suivante	suivant	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
4	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	parataxis	_	_
5	:	:	PUNCT	_	_	4	punct	_	_
6	Peut	pouvoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	SpaceAfter=No
7	-on	on	PRON	_	Gender=Masc|Number=Sing|Person=3	9	nsubj	_	_
8	y	y	ADV	_	_	9	advmod	_	_
9	prendre	prendre	VERB	_	VerbForm=Inf	0	root	_	_
10	épouse	épouse	NOUN	_	Gender=Fem|Number=Sing	9	obj	_	_
11	?	?	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 parataxis	color:blue
1	Comme	comme	ADV	_	_	2	mark	_	_
2	dirait	dire	VERB	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	parataxis	_	_
3	quelqu'un	quelqu'un	PRON	_	Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	10	punct	_	_
5	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
6	ne	ne	ADV	_	Polarity=Neg	10	advmod	_	_
7	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	cop	_	_
8	pas	pas	ADV	_	Polarity=Neg	10	advmod	_	_
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	girouette	girouette	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
11	!	!	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 parataxis	color:blue
1	En	en	ADP	_	_	7	advmod	_	_
2	outre	outre	ADV	_	_	1	fixed	_	_
3	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	_	_
4	salles	salle	NOUN	_	Gender=Fem|Number=Plur	7	nsubj	_	_
5	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	très	très	ADV	_	_	7	advmod	_	_
7	belles	beau	ADJ	_	Gender=Fem|Number=Plur	0	root	_	_
8	ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	11	nsubj	_	_
9	qui	qui	PRON	_	_	8	fixed	_	_
10	ne	ne	ADV	_	Polarity=Neg	11	advmod	_	_
11	gâte	gâter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	_	_
12	rien	rien	PRON	_	Number=Sing	11	obj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.

4 nodes (0%) are attached to their parents as `parataxis`.

3 instances of `parataxis` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.75.

The following 3 pairs of parts of speech are connected with `parataxis`: [fr-pos/VERB]()-[fr-pos/VERB]() (2; 50% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (1; 25% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (1; 25% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 22 parataxis	color:blue
1	Et	et	CCONJ	CC	_	4	cc	_	_
2	je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	me	me	PRON	P	Person=1|PronType=Prs	4	expl	_	_
4	souviens	souvenir	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	que	que	SCONJ	CS	_	8	mark	_	_
6	j'	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	8	nsubj	_	SpaceAfter=No
7	étais	être	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	8	aux	_	_
8	assis	assoir	VERB	V	Gender=Masc|Tense=Past|VerbForm=Part	4	ccomp	_	_
9	à	à	ADP	E	_	11	case	_	_
10	mon	mon	DET	AP	Gender=Masc|Number=Sing|PronType=Prs	11	nmod:poss	_	_
11	bureau	bureau	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	_
12	et	et	CCONJ	CC	_	14	cc	_	_
13	je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	14	nsubj	_	_
14	pensais	penser	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	8	conj	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	14	punct	_	_
16	"	"	PUNCT	FB	_	22	punct	_	SpaceAfter=No
17	et	et	CCONJ	CC	_	22	cc	_	_
18	bien	bien	ADV	B	_	22	discourse	_	SpaceAfter=No
19	,	,	PUNCT	FF	_	22	punct	_	_
20	je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	22	nsubj	_	_
21	le	le	PRON	P	Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	obj	_	_
22	sais	savoir	VERB	V	Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	14	parataxis	_	SpaceAfter=No
23	"	"	PUNCT	FB	_	22	punct	_	SpaceAfter=No
24	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 parataxis	color:blue
1	Certains	certain	DET	DI	Gender=Masc|Number=Plur|PronType=Ind	5	nsubj	_	_
2	étaient	être	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	de	de	ADP	E	_	5	case	_	_
4	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	viande	viande	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
6	de	de	ADP	E	_	7	case	_	_
7	baleine	baleine	NOUN	S	Gender=Fem|Number=Sing	5	nmod	_	_
8	illégale	illégal	ADJ	A	Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	5	punct	_	_
10	soit	être	AUX	VA	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	_
11	dit	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	parataxis	_	_
12	en	en	ADP	E	_	13	mark	_	_
13	passant	passer	VERB	V	VerbForm=Ger	11	advcl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis	color:blue
1	Tout	tout	DET	T	Gender=Masc|Number=Sing|PronType=Tot	2	det	_	_
2	ceci	ceci	PRON	PD	Number=Sing|Person=3|PronType=Dem	0	root	_	_
3	­	­	PUNCT	FB	_	5	punct	_	_
4	j'	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	SpaceAfter=No
5	insiste	insister	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
6	­	­	PUNCT	FB	_	5	punct	_	_
7	avec	avec	ADP	E	_	9	case	_	_
8	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	participation	participation	NOUN	S	Gender=Fem|Number=Sing	2	nmod	_	_
10	de	de	ADP	E	_	12	case	_	_
11	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	12	det	_	SpaceAfter=No
12	entreprise	entreprise	NOUN	S	Gender=Fem|Number=Sing	9	nmod	_	_
13	privée	privé	ADJ	A	Gender=Fem|Number=Sing	12	amod	_	_
14	qui	qui	PRON	PR	PronType=Rel	42	nsubj	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	14	punct	_	_
16	en	en	ADP	E	_	17	mark	_	_
17	unissant	unir	VERB	V	VerbForm=Ger	42	advcl	_	_
18	ses	son	DET	AP	Gender=Masc|Number=Plur|PronType=Prs	19	nmod:poss	_	_
19	efforts	effort	NOUN	S	Gender=Masc|Number=Plur	17	obj	_	_
20	à	à	ADP	E	_	21	case	_	_
21	ceux	celui	PRON	PD	Gender=Masc|Number=Plur|Person=3|PronType=Dem	17	obl	_	_
22	de	de	ADP	E	_	24	case	_	_
23	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	24	det	_	_
24	administrations	administration	NOUN	S	Gender=Fem|Number=Plur	21	nmod	_	_
25	publiques	public	ADJ	A	Gender=Fem|Number=Plur	24	amod	_	SpaceAfter=No
26	,	,	PUNCT	FF	_	29	punct	_	_
27	en	en	ADP	E	_	29	mark	_	_
28	les	le	PRON	P	Number=Plur|Person=3|PronType=Prs	29	obj	_	_
29	complétant	completer	VERB	V	VerbForm=Ger	17	conj	_	SpaceAfter=No
30	,	,	PUNCT	FF	_	35	punct	_	_
31	sans	sans	ADP	E	_	32	case	_	_
32	qu'	que	SCONJ	CS	_	35	mark	_	SpaceAfter=No
33	il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	35	expl	_	_
34	y	y	ADV	B	_	35	advmod	_	_
35	ait	avoir	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	conj	_	_
36	aucune	aucun	DET	DI	Gender=Fem|Number=Sing|PronType=Ind	37	det	_	_
37	obstruction	obstruction	NOUN	S	Gender=Fem|Number=Sing	35	nsubj	_	_
38	ou	ou	CCONJ	CC	_	39	cc	_	_
39	exclusion	exclusion	NOUN	S	Gender=Fem|Number=Sing	37	conj	_	SpaceAfter=No
40	,	,	PUNCT	FF	_	17	punct	_	_
41	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	42	cop	_	_
42	celle	celui	PRON	PD	Gender=Fem|Number=Sing|Person=3|PronType=Dem	12	acl:relcl	_	_
43	qui	qui	PRON	PR	PronType=Rel	44	nsubj	_	_
44	créera	créer	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	42	acl:relcl	_	_
45	des	un	DET	RI	Definite=Ind|Gender=Fem|Number=Plur|PronType=Dem	46	det	_	_
46	richesses	richesse	NOUN	S	Gender=Fem|Number=Plur	44	obj	_	_
47	sociales	social	ADJ	A	Gender=Fem|Number=Plur	46	amod	_	_
48	et	et	CCONJ	CC	_	50	cc	_	_
49	des	un	DET	RI	Definite=Ind|Gender=Fem|Number=Plur|PronType=Dem	50	det	_	_
50	postes	poste	NOUN	S	Gender=Masc|Number=Plur	46	conj	_	_
51	de	de	ADP	E	_	52	case	_	_
52	travail	travail	NOUN	S	Gender=Masc|Number=Sing	50	nmod	_	SpaceAfter=No
53	.	.	PUNCT	FS	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.

111 nodes (0%) are attached to their parents as `parataxis`.

101 instances of `parataxis` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 15.5315315315315.

The following 8 pairs of parts of speech are connected with `parataxis`: [fr-pos/VERB]()-[fr-pos/VERB]() (78; 70% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (11; 10% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (10; 9% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (5; 5% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (3; 3% instances), [fr-pos/CCONJ]()-[fr-pos/VERB]() (2; 2% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (1; 1% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 parataxis	color:blue
1	Imposé	imposer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	à	à	ADP	_	_	4	case	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	peuple	peuple	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	_
5	irakien	irakien	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	1	punct	_	_
7	devrais	devoir	AUX	_	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux	_	SpaceAfter=No
8	-je	il	PRON	_	Number=Sing|Person=1	9	nsubj	_	_
9	dire	dire	VERB	_	VerbForm=Inf	1	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 parataxis	color:blue
1	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	bataille	bataille	NOUN	_	Gender=Fem|Number=Sing	5	nsubj	_	_
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	dure	dur	ADJ	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
7	,	,	PUNCT	_	_	5	punct	_	_
8	reconnaît	reconnaître	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	parataxis	_	SpaceAfter=No
9	-elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 19 parataxis	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	camps	camp	NOUN	_	Gender=Masc|Number=Plur	7	nsubj	_	_
3	de	de	ADP	_	_	4	case	_	_
4	filtration	filtration	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
5	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	7	det	_	_
7	camps	camp	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
8	de	de	ADP	_	_	9	case	_	_
9	torture	torture	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	de	de	ADP	_	_	12	case	_	_
12	viols	viol	NOUN	_	Gender=Masc|Number=Plur	9	conj	_	SpaceAfter=No
13	,	,	PUNCT	_	_	15	punct	_	_
14	de	de	ADP	_	_	15	case	_	_
15	violations	violation	NOUN	_	Gender=Fem|Number=Plur	9	conj	_	_
16	:	:	PUNCT	_	_	7	punct	_	_
17	nous	il	PRON	_	Number=Plur|Person=1	19	nsubj	_	_
18	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3	19	obj	_	_
19	savons	savoir	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	parataxis	_	_
20	aujourd'	aujourd'	ADP	_	_	19	advmod	_	SpaceAfter=No
21	hui	hui	NOUN	_	_	20	fixed	_	SpaceAfter=No
22	.	.	PUNCT	_	_	7	punct	_	_

~~~



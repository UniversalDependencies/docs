

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

8 nodes (0%) are attached to their parents as `vocative`.

6 instances of `vocative` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 5 pairs of parts of speech are connected with `vocative`: [fr-pos/VERB]()-[fr-pos/PROPN]() (4; 50% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 13% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (1; 13% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1; 13% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (1; 13% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	Alice	Alice	PROPN	_	_	4	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	pars	partir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	dans	dans	ADP	_	_	7	case	_	_
6	mon	son	DET	_	Gender=Masc|Number=Sing|PronType=Prs	7	nmod:poss	_	_
7	sommeil	sommeil	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 vocative	color:blue
1	-	-	PUNCT	_	_	9	punct	_	SpaceAfter=No
2	Mais	mais	CCONJ	_	_	9	cc	_	_
3	ma	son	DET	_	Gender=Fem|Number=Sing|PronType=Prs	4	nmod:poss	_	_
4	chérie	chéri	NOUN	_	Gender=Fem|Number=Sing	9	vocative	_	SpaceAfter=No
5	,	,	PUNCT	_	_	9	punct	_	_
6	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	9	nsubj	_	_
7	es	être	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	totalement	totalement	ADV	_	_	9	advmod	_	_
9	naïve	naïf	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
10	et	et	CCONJ	_	_	11	cc	_	_
11	inconsciente	inconscient	ADJ	_	Gender=Fem|Number=Sing	9	conj	_	_
12	!	!	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 vocative	color:blue
1	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	5	nsubj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	du	du	DET	_	Gender=Masc|Number=Sing	5	det	_	_
4	bon	bon	ADJ	_	Gender=Masc|Number=Sing	5	amod	_	_
5	boulot	boulot	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
6	que	que	PRON	_	PronType=Rel	10	obj	_	_
7	vous	vous	PRON	_	Number=Plur|Person=2|PronType=Prs	10	nsubj	_	_
8	m'	me	PRON	_	Number=Sing|Person=1|PronType=Prs	10	iobj	_	SpaceAfter=No
9	avez	avoir	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	acl:relcl	_	_
11	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	gars	gars	NOUN	_	Gender=Masc|Number=Plur	5	vocative	_	_
13	!	!	PUNCT	_	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.

47 nodes (0%) are attached to their parents as `vocative`.

42 instances of `vocative` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 13.2340425531915.

The following 3 pairs of parts of speech are connected with `vocative`: [fr-pos/VERB]()-[fr-pos/NOUN]() (39; 83% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (6; 13% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (2; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 vocative	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 vocative	color:blue
1	Madame	madame	NOUN	S	Gender=Fem|Number=Sing	8	vocative	_	_
2	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	présidente	président	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	c'	ce	PRON	PD	PronType=Dem	8	nsubj	_	SpaceAfter=No
6	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	une	un	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	motion	motion	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
9	de	de	ADP	E	_	10	case	_	_
10	procédure	procédure	NOUN	S	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 vocative	color:blue
1	Monsieur	monsieur	NOUN	S	Gender=Masc|Number=Sing	8	vocative	_	_
2	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Président	président	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
6	suis	etre	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	particulièrement	particulièrement	ADV	B	_	8	advmod	_	_
8	ravi	ravi	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
9	de	de	ADP	E	_	10	case	_	_
10	ce	ce	PRON	PD	Number=Sing|Person=3|PronType=Dem	8	obl	_	_
11	que	que	SCONJ	CS	_	19	mark	_	_
12	ma	mon	DET	AP	Gender=Fem|Number=Sing|PronType=Prs	14	nmod:poss	_	_
13	première	premier	ADJ	NO	Gender=Fem|Number=Sing|NumType=Ord	14	amod	_	_
14	intervention	intervention	NOUN	S	Gender=Fem|Number=Sing	19	nsubj	_	_
15	à	à	ADP	E	_	17	case	_	_
16	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	Parlement	parlement	NOUN	S	Gender=Masc|Number=Sing	14	nmod	_	_
18	européen	européen	ADJ	A	Gender=Masc|Number=Sing	17	amod	_	_
19	porte	porter	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	acl	_	_
20	sur	sur	ADP	E	_	21	case	_	_
21	ce	ce	PRON	PD	Number=Sing|Person=3|PronType=Dem	19	obl	_	_
22	que	que	SCONJ	CS	_	45	mark	_	_
23	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	24	det	_	_
24	région	région	NOUN	S	Gender=Fem|Number=Sing	45	nsubj	_	_
25	de	de	ADP	E	_	27	case	_	_
26	le	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	27	det	_	_
27	Royaume-uni	Royaume-uni	PROPN	SP	_	24	nmod	_	_
28	que	que	PRON	PR	PronType=Rel	30	obj	_	_
29	je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	30	nsubj	_	_
30	représente	représenter	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	24	acl:relcl	_	_
31	à	à	ADP	E	_	33	case	_	_
32	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	33	det	_	_
33	sein	sein	NOUN	S	Gender=Masc|Number=Sing	30	obl	_	_
34	de	de	ADP	E	_	36	case	_	_
35	ce	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	36	det	_	_
36	Parlement	parlement	NOUN	S	Gender=Masc|Number=Sing	33	nmod	_	SpaceAfter=No
37	,	,	PUNCT	FF	_	24	punct	_	_
38	à	à	ADP	E	_	41	advmod	_	_
39	savoir	savoir	VERB	V	VerbForm=Inf	38	fixed	_	_
40	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	41	det	_	_
41	pays	pays	NOUN	S	Gender=Masc	24	appos	_	_
42	de	de	ADP	E	_	43	case	_	_
43	Galles	Galles	PROPN	SP	_	41	nmod	_	SpaceAfter=No
44	,	,	PUNCT	FF	_	24	punct	_	_
45	considère	considérer	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl	_	_
46	comme	comme	ADP	E	_	48	case	_	_
47	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	48	det	_	_
48	sujet	sujet	NOUN	S	Gender=Masc|Number=Sing	45	obl	_	_
49	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	50	det	_	_
50	plus	plus	ADV	B	_	51	advmod	_	_
51	important	important	ADJ	A	Gender=Masc|Number=Sing	48	amod	_	SpaceAfter=No
52	.	.	PUNCT	FS	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.

49 nodes (0%) are attached to their parents as `vocative`.

40 instances of `vocative` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.12244897959184.

The following 4 pairs of parts of speech are connected with `vocative`: [fr-pos/VERB]()-[fr-pos/NOUN]() (43; 88% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (3; 6% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (2; 4% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 vocative	color:blue
1	Monsieur	monsieur	NOUN	_	Gender=Masc|Number=Sing	8	vocative	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Président	président	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
6	devait	devoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux	_	_
7	y	y	PRON	_	Person=3	8	expl	_	_
8	avoir	avoir	VERB	_	VerbForm=Inf	0	root	_	_
9	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	débat	débat	NOUN	_	Gender=Masc|Number=Sing	8	obj	_	_
11	sur	sur	ADP	_	_	13	case	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	violence	violence	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	_
14	dans	dans	ADP	_	_	16	case	_	_
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	football	football	NOUN	_	Gender=Masc|Number=Sing	13	nmod	_	SpaceAfter=No
17	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 1 vocative	color:blue
1	Monsieur	monsieur	NOUN	_	Gender=Masc|Number=Sing	24	vocative	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Président	président	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	24	punct	_	_
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	majorité	majorité	NOUN	_	Gender=Fem|Number=Sing	24	nsubj	_	_
7	de	de	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Conseil	conseil	PROPN	_	Gender=Masc|Number=Sing	6	nmod	_	_
10	de	de	ADP	_	_	11	case	_	_
11	sécurité	sécurité	NOUN	_	Gender=Fem|Number=Sing	9	nmod	_	_
12	-	-	PUNCT	_	_	6	punct	_	SpaceAfter=No
13	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	France	France	PROPN	_	Gender=Fem|Number=Sing	6	appos	_	SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	_	_
16	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	Chine	Chine	PROPN	_	Gender=Fem|Number=Sing	14	conj	_	SpaceAfter=No
18	,	,	PUNCT	_	_	20	punct	_	_
19	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	Russie	Russie	PROPN	_	Gender=Fem|Number=Sing	14	conj	_	SpaceAfter=No
21	-	-	PUNCT	_	_	6	punct	_	_
22	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	cop	_	_
23	désormais	désormais	ADV	_	_	24	advmod	_	_
24	favorable	favorable	ADJ	_	Number=Sing	0	root	_	SpaceAfter=No
25	,	,	PUNCT	_	_	24	punct	_	_
26	sous	sous	ADP	_	_	27	case	_	_
27	condition	condition	NOUN	_	Gender=Fem|Number=Sing	24	obl	_	SpaceAfter=No
28	,	,	PUNCT	_	_	24	punct	_	_
29	à	à	ADP	_	_	31	case	_	_
30	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	31	det	_	_
31	levée	levée	NOUN	_	Gender=Fem|Number=Sing	24	obl	_	_
32	de	de	ADP	_	_	34	case	_	_
33	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	34	det	_	SpaceAfter=No
34	embargo	embargo	NOUN	_	Gender=Masc|Number=Sing	31	nmod	_	_
35	imposé	imposer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	34	acl	_	_
36	à	à	ADP	_	_	38	case	_	_
37	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	38	det	_	SpaceAfter=No
38	Irak	Irak	PROPN	_	Gender=Masc|Number=Sing	35	obl	_	_
39	depuis	depuis	ADP	_	_	42	case	_	_
40	bientôt	bientôt	ADV	_	_	42	advmod	_	_
41	dix	dix	NUM	_	NumType=Card	42	nummod	_	_
42	ans	an	NOUN	_	Gender=Masc|Number=Plur	35	obl	_	SpaceAfter=No
43	.	.	PUNCT	_	_	24	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 vocative	color:blue
1	Bonne	bon	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
2	chance	chance	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	Monsieur	monsieur	NOUN	_	Gender=Masc|Number=Sing	2	vocative	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Président	président	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	2	punct	_	_
8	et	et	CCONJ	_	_	11	cc	_	_
9	nous	il	PRON	_	Number=Plur|Person=1	11	nsubj	_	_
10	vous	le/lui	PRON	_	Number=Plur|Person=2	11	obj	_	_
11	remercions	remercier	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	conj	_	_
12	encore	encore	ADV	_	_	11	advmod	_	_
13	de	de	ADP	_	_	15	case	_	_
14	votre	son	DET	_	Number=Sing|Poss=Yes	15	nmod:poss	_	_
15	présence	présence	NOUN	_	Gender=Fem|Number=Sing	11	obl	_	_
16	et	et	CCONJ	_	_	19	cc	_	_
17	de	de	ADP	_	_	19	case	_	_
18	votre	son	DET	_	Number=Sing|Poss=Yes	19	nmod:poss	_	_
19	intervention	intervention	NOUN	_	Gender=Fem|Number=Sing	15	conj	_	SpaceAfter=No
20	.	.	PUNCT	_	_	2	punct	_	_

~~~



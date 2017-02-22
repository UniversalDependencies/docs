

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is a language-specific subtype of [nmod]().

4264 nodes (1%) are attached to their parents as `nmod:poss`.

4262 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11866791744841.

The following 10 pairs of parts of speech are connected with `nmod:poss`: [fr-pos/NOUN]()-[fr-pos/DET]() (4205; 99% instances), [fr-pos/PROPN]()-[fr-pos/DET]() (38; 1% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (6; 0% instances), [fr-pos/ADJ]()-[fr-pos/DET]() (5; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (3; 0% instances), [fr-pos/VERB]()-[fr-pos/DET]() (2; 0% instances), [fr-pos/X]()-[fr-pos/DET]() (2; 0% instances), [fr-pos/ADP]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod:poss	color:blue
1	Elle	elle	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	lutte	lutter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	pour	pour	ADP	_	_	4	mark	_	_
4	échapper	échapper	VERB	_	VerbForm=Inf	2	advcl	_	_
5	à	à	ADP	_	_	7	case	_	_
6	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	tueurs	tueur	NOUN	_	Gender=Masc|Number=Plur	4	obl	_	_
8	à	à	ADP	_	_	10	case	_	_
9	ses	son	DET	_	Gender=Fem|Number=Plur|PronType=Prs	10	nmod:poss	_	_
10	trousses	trousses	NOUN	_	Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:poss	color:blue
1	Bonnes	bon	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	_
2	idées	idée	NOUN	_	Gender=Fem|Number=Plur	0	root	_	_
3	de	de	ADP	_	_	4	case	_	_
4	recherche	recherche	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
5	de	de	ADP	_	_	6	case	_	_
6	financement	financement	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
7	pour	pour	ADP	_	_	9	case	_	_
8	ma	son	DET	_	Gender=Fem|Number=Sing|PronType=Prs	9	nmod:poss	_	_
9	TPE	TPE	PROPN	_	_	6	nmod	_	_
10	(	(	PUNCT	_	_	11	punct	_	SpaceAfter=No
11	logiciel	logiciel	NOUN	_	Gender=Masc|Number=Sing	9	appos	_	SpaceAfter=No
12	)	)	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 20 nmod:poss	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	cabinet	cabinet	NOUN	_	Gender=Masc|Number=Sing	14	nsubj	_	_
3	d'	de	ADP	_	_	4	case	_	SpaceAfter=No
4	architectes	architecte	NOUN	_	Gender=Masc|Number=Plur	2	nmod	_	_
5	de	de	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Harmon	Harmon	PROPN	_	_	2	nmod	_	_
8	Hotel	Hotel	PROPN	_	_	7	flat:name	_	_
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
10	Lord	Lord	PROPN	_	_	0	root	_	_
11	Norman	Norman	PROPN	_	_	10	flat:name	_	_
12	Foster	Foster	PROPN	_	_	10	flat:name	_	_
13	&	&	SYM	_	_	14	cc	_	_
14	Partners	Partners	PROPN	_	_	10	conj	_	_
15	et	et	CCONJ	_	_	25	cc	_	_
16	son	son	DET	_	Gender=Masc|Number=Sing|PronType=Prs	17	nmod:poss	_	_
17	maître	maître	NOUN	_	Gender=Masc|Number=Sing	25	nsubj	_	_
18	d'	de	ADP	_	_	19	case	_	SpaceAfter=No
19	œuvre	œuvre	NOUN	_	Gender=Fem|Number=Sing	17	nmod	_	_
20	Andrew	Andrew	PROPN	_	_	25	nmod:poss	_	_
21	Sasson	Sasson	PROPN	_	_	20	flat:name	_	SpaceAfter=No
22	's	's	PART	_	_	20	case	_	_
23	The	the	DET	_	Definite=Def	25	det	_	_
24	Light	Light	PROPN	_	_	25	compound	_	_
25	Group	Group	PROPN	_	_	10	conj	_	SpaceAfter=No
26	.	.	PUNCT	_	_	14	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is a language-specific subtype of [nmod]().

182 nodes (1%) are attached to their parents as `nmod:poss`.

181 instances of `nmod:poss` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05494505494505.

The following 4 pairs of parts of speech are connected with `nmod:poss`: [fr-pos/NOUN]()-[fr-pos/DET]() (178; 98% instances), [fr-pos/ADJ]()-[fr-pos/DET]() (2; 1% instances), [fr-pos/PROPN]()-[fr-pos/DET]() (1; 1% instances), [fr-pos/VERB]()-[fr-pos/DET]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Dans	dans	ADP	E	_	3	case	_	_
2	certaines	certain	DET	DI	Gender=Fem|Number=Plur|PronType=Ind	3	det	_	_
3	communes	commun	NOUN	S	Gender=Fem|Number=Plur	12	nmod	_	_
4	de	de	ADP	E	_	6	case	_	_
5	mon	mon	DET	AP	Gender=Masc|Number=Sing|PronType=Prs	6	nmod:poss	_	_
6	pays	pays	NOUN	S	Gender=Masc	3	nmod	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	3	punct	_	_
8	c'	ce	PRON	PD	PronType=Dem	12	nsubj	_	SpaceAfter=No
9	était	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	12	cop	_	_
10	vraiment	vraiment	ADV	B	_	12	advmod	_	_
11	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	12	det	_	SpaceAfter=No
12	enfer	enfer	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Mon	mon	DET	AP	Gender=Masc|Number=Sing|PronType=Prs	2	nmod:poss	_	_
2	pied	pied	ADJ	A	Number=Sing	3	nsubj	_	_
3	couvre	couvrir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	environ	environ	ADV	B	_	3	advmod	_	_
5	300	300	NUM	N	NumType=Card	6	nummod	_	_
6	miles	miles	NOUN	S	Gender=Fem|Number=Plur	3	obj	_	_
7	de	de	ADP	E	_	8	case	_	_
8	mycélium	mycélium	NOUN	S	Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 25 nmod:poss	color:blue
1	Ce	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	débat	débat	NOUN	S	Gender=Masc|Number=Sing	13	nsubj	_	_
3	et	et	CCONJ	CC	_	5	cc	_	_
4	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	modification	modification	NOUN	S	Gender=Fem|Number=Sing	2	conj	_	_
6	de	de	ADP	E	_	8	case	_	_
7	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	directive	directive	NOUN	S	Gender=Fem|Number=Sing	5	nmod	_	_
9	actuellement	actuellement	ADV	B	_	11	advmod	_	_
10	en	en	ADP	E	_	11	case	_	_
11	vigueur	vigueur	NOUN	S	Gender=Masc|Number=Sing	8	nmod	_	_
12	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	13	iobj	_	_
13	permettent	permettre	VERB	V	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	d'	de	ADP	E	_	15	mark	_	SpaceAfter=No
15	introduire	introduire	VERB	V	VerbForm=Inf	13	xcomp	_	_
16	des	un	DET	RI	Definite=Ind|Gender=Masc|Number=Plur|PronType=Dem	17	det	_	_
17	faits	fait	NOUN	S	Gender=Masc|Number=Plur	15	obj	_	_
18	différentiels	différentiel	ADJ	A	Gender=Masc|Number=Plur	17	amod	_	_
19	qui	qui	PRON	PR	PronType=Rel	20	nsubj	_	_
20	témoignent	témoigner	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	17	acl:relcl	_	_
21	de	de	ADP	E	_	23	case	_	_
22	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	diversité	diversité	NOUN	S	Gender=Fem|Number=Sing	20	obl	_	_
24	de	de	ADP	E	_	26	case	_	_
25	notre	notre	DET	AP	Gender=Fem|Number=Sing|PronType=Prs	26	nmod:poss	_	_
26	Europe	Europe	PROPN	SP	_	23	nmod	_	SpaceAfter=No
27	.	.	PUNCT	FS	_	13	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is a language-specific subtype of [nmod]().

440 nodes (1%) are attached to their parents as `nmod:poss`.

440 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09090909090909.

The following 2 pairs of parts of speech are connected with `nmod:poss`: [fr-pos/NOUN]()-[fr-pos/DET]() (438; 100% instances), [fr-pos/PROPN]()-[fr-pos/DET]() (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	conseil	conseil	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	municipal	municipal	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_
4	donne	donner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	son	son	DET	_	Number=Sing|Poss=Yes	6	nmod:poss	_	_
6	accord	accord	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	_
7	pour	pour	ADP	_	_	9	case	_	_
8	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	procédure	procédure	NOUN	_	Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nmod:poss	color:blue
1	Là	là	ADV	_	_	6	advmod	_	_
2	encore	encore	ADV	_	_	6	advmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	_
4	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
5	me	le/lui	PRON	_	Number=Sing|Person=1	6	iobj	_	_
6	semble	sembler	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	que	que	SCONJ	_	_	9	mark	_	_
8	vous	il	PRON	_	Number=Plur|Person=2	9	nsubj	_	_
9	rejoignez	rejoindre	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	6	ccomp	_	_
10	parfaitement	parfaitement	ADV	_	_	9	advmod	_	_
11	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	12	det	_	_
12	objectifs	objectif	NOUN	_	Gender=Masc|Number=Plur	9	obj	_	_
13	de	de	ADP	_	_	15	case	_	_
14	notre	son	DET	_	Number=Sing|Poss=Yes	15	nmod:poss	_	_
15	Parlement	Parlement	PROPN	_	Number=Sing	12	nmod	_	_
16	européen	européen	ADJ	_	Gender=Masc|Number=Sing	15	amod	_	SpaceAfter=No
17	.	.	PUNCT	_	_	6	punct	_	_

~~~



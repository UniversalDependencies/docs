

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

818 nodes (0%) are attached to their parents as `iobj`.

813 instances of `iobj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.65158924205379.

The following 5 pairs of parts of speech are connected with `iobj`: [fr-pos/VERB]()-[fr-pos/PRON]() (754; 92% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (37; 5% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (21; 3% instances), [fr-pos/PRON]()-[fr-pos/PRON]() (5; 1% instances), [fr-pos/ADV]()-[fr-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Elle	elle	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	y	y	PRON	_	_	3	iobj	_	_
3	incarnera	incarner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Poussette	Poussette	PROPN	_	_	3	obj	_	_
6	de	de	ADP	_	_	7	case	_	_
7	Manon	Manon	PROPN	_	_	5	nmod	_	_
8	peu	peu	ADV	_	_	10	det	_	_
9	de	un	DET	_	Definite=Ind|PronType=Art	8	fixed	_	_
10	temps	temps	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	_
11	après	après	ADV	_	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 iobj	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
2	en	en	PRON	_	Person=3	8	iobj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
4	de	de	ADP	_	_	5	case	_	_
5	même	même	ADV	_	_	8	advmod	_	_
6	pour	pour	ADP	_	_	8	case	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	master	master	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
9	recherche	recherche	NOUN	_	Gender=Fem|Number=Sing	8	compound	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 iobj	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	coût	coût	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
3	en	en	PRON	_	Person=3	6	iobj	_	_
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	moins	moins	ADV	_	_	6	advmod	_	_
6	difficile	difficile	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.

54 nodes (0%) are attached to their parents as `iobj`.

52 instances of `iobj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2037037037037.

The following 3 pairs of parts of speech are connected with `iobj`: [fr-pos/VERB]()-[fr-pos/PRON]() (52; 96% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (1; 2% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 iobj	color:blue
1	Moi	moi	PRON	PE	Number=Sing|Person=1|PronType=Prs	10	dislocated	_	_
2	non	non	ADV	BN	PronType=Neg	1	advmod	_	_
3	plus	plus	ADV	B	_	2	fixed	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	10	nsubj	_	_
6	ne	ne	PART	PART	Polarity=Neg	10	advmod	_	_
7	m'	me	PRON	P	Person=1|PronType=Prs	10	iobj	_	SpaceAfter=No
8	avez	avoir	AUX	VA	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	10	aux	_	_
9	pas	pas	ADV	BN	Polarity=Neg	10	advmod	_	_
10	donné	donner	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
11	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	parole	parole	NOUN	S	Gender=Fem|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 42	bgColor:blue
# visual-style 42	fgColor:white
# visual-style 42 40 iobj	color:blue
1	(	(	PUNCT	FB	_	2	punct	_	SpaceAfter=No
2	6	6	NUM	N	NumType=Card	5	nummod	_	SpaceAfter=No
3	)	)	PUNCT	FB	_	2	punct	_	_
4	Il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
5	convient	convenir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	d'	de	ADP	E	_	7	mark	_	SpaceAfter=No
7	établir	établir	VERB	V	VerbForm=Inf	5	csubj	_	_
8	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	cadre	cadre	NOUN	S	Gender=Masc|Number=Sing	7	obj	_	_
10	cohérent	cohérent	ADJ	A	Gender=Masc|Number=Sing	9	amod	_	_
11	pour	pour	ADP	E	_	13	case	_	_
12	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	13	det	_	SpaceAfter=No
13	application	application	NOUN	S	Gender=Fem|Number=Sing	7	obl	_	_
14	de	de	ADP	E	_	16	case	_	_
15	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	16	det	_	_
16	exigences	exigence	NOUN	S	Gender=Fem|Number=Plur	13	nmod	_	_
17	communautaires	communautaire	ADJ	A	Gender=Fem|Number=Plur	16	amod	_	_
18	en	en	ADP	E	_	19	case	_	_
19	matière	matière	NOUN	S	Gender=Fem|Number=Sing	16	nmod	_	_
20	d'	de	ADP	E	_	21	case	_	SpaceAfter=No
21	écoconception	écoconception	NOUN	S	Gender=Fem|Number=Sing	19	nmod	_	_
22	applicables	applicable	ADJ	A	Gender=Fem|Number=Plur	16	amod	_	_
23	à	à	ADP	E	_	25	case	_	_
24	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	25	det	_	_
25	produits	produit	NOUN	S	Gender=Masc|Number=Plur	22	obl	_	_
26	consommateurs	consommateur	NOUN	S	Gender=Masc|Number=Plur	25	nmod	_	_
27	d'	de	ADP	E	_	28	case	_	SpaceAfter=No
28	énergie	énergie	NOUN	S	Gender=Fem|Number=Sing	26	nmod	_	_
29	en	en	ADP	E	_	32	mark	_	_
30	vue	vue	NOUN	S	Gender=Fem|Number=Sing	29	fixed	_	_
31	d'	de	ADP	E	_	29	fixed	_	SpaceAfter=No
32	assurer	assurer	VERB	V	VerbForm=Inf	7	advcl	_	_
33	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	35	det	_	_
34	libre	libre	ADJ	A	Gender=Fem|Number=Sing	35	amod	_	_
35	circulation	circulation	NOUN	S	Gender=Fem|Number=Sing	32	obj	_	_
36	de	de	ADP	E	_	38	case	_	_
37	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	38	det	_	_
38	produits	produit	NOUN	S	Gender=Masc|Number=Plur	35	nmod	_	_
39	qui	qui	PRON	PR	PronType=Rel	42	nsubj	_	_
40	y	y	PRON	P	PronType=Prs	42	iobj	_	_
41	sont	être	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	42	cop	_	_
42	conformes	conforme	ADJ	A	Gender=Fem|Number=Plur	38	acl:relcl	_	_
43	et	et	CCONJ	CC	_	45	cc	_	_
44	d'	de	ADP	E	_	45	mark	_	SpaceAfter=No
45	améliorer	améliorer	VERB	V	VerbForm=Inf	32	conj	_	_
46	leur	leur	DET	AP	Gender=Masc|Number=Sing|PronType=Prs	47	nmod:poss	_	_
47	impact	impact	NOUN	S	Gender=Masc|Number=Sing	45	obj	_	_
48	global	global	ADJ	A	Gender=Masc|Number=Sing	47	amod	_	_
49	sur	sur	ADP	E	_	51	case	_	_
50	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	51	det	_	SpaceAfter=No
51	environnement	environnement	NOUN	S	Gender=Masc|Number=Sing	47	nmod	_	SpaceAfter=No
52	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 iobj	color:blue
1	À	à	ADP	E	_	3	case	_	_
2	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	3	det	_	SpaceAfter=No
3	exception	exception	NOUN	S	Gender=Fem|Number=Sing	27	obl	_	_
4	de	de	ADP	E	_	6	case	_	_
5	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	fins	fin	NOUN	S	Gender=Fem|Number=Plur	3	nmod	_	_
7	limitées	limiter	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	6	acl	_	_
8	à	à	ADP	E	_	9	mark	_	_
9	informer	informer	VERB	V	VerbForm=Inf	7	xcomp	_	_
10	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	public	public	NOUN	S	Gender=Masc|Number=Sing	9	iobj	_	_
12	que	que	SCONJ	CS	_	16	mark	_	_
13	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	14	det	_	SpaceAfter=No
14	oeuvre	oeuvre	NOUN	S	Gender=Fem|Number=Sing	16	nsubj:pass	_	_
15	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	aux:pass	_	_
16	mise	mettre	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	9	ccomp	_	_
17	à	à	ADP	E	_	18	case	_	_
18	disposition	disposition	NOUN	S	Gender=Fem|Number=Sing	16	obl	_	_
19	sous	sous	ADP	E	_	20	case	_	_
20	CPCC	CPCC	PROPN	SP	_	16	obl	_	SpaceAfter=No
21	,	,	PUNCT	FF	_	3	punct	_	_
22	aucune	aucun	PRON	PI	Gender=Fem|Number=Sing|PronType=Ind	27	nsubj	_	_
23	de	de	ADP	E	_	25	case	_	_
24	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	25	det	_	_
25	parties	partie	NOUN	S	Gender=Fem|Number=Plur	22	nmod	_	_
26	n'	ne	PART	PART	Polarity=Neg	27	advmod	_	SpaceAfter=No
27	utilisera	utiliser	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
28	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	29	det	_	_
29	marque	marque	NOUN	S	Gender=Fem|Number=Sing	27	obj	_	_
30	«	«	PUNCT	FB	_	31	punct	_	SpaceAfter=No
31	Creative	Creative	PROPN	SP	_	29	nmod	_	_
32	Commons	Commons	PROPN	SP	_	31	flat:name	_	SpaceAfter=No
33	»	»	PUNCT	FB	_	31	punct	_	_
34	ou	ou	CCONJ	CC	_	37	cc	_	_
35	toute	tout	DET	T	Gender=Fem|Number=Sing|PronType=Tot	37	det	_	_
36	autre	autre	DET	DI	Gender=Masc|Number=Sing|PronType=Ind	37	det	_	_
37	indication	indication	NOUN	S	Gender=Fem|Number=Sing	29	conj	_	_
38	ou	ou	CCONJ	CC	_	39	cc	_	_
39	logo	logo	NOUN	S	Gender=Masc|Number=Sing	37	conj	_	_
40	afférent	afférent	ADJ	A	Gender=Masc|Number=Sing	39	amod	_	_
41	sans	sans	ADP	E	_	43	case	_	_
42	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	43	det	_	_
43	consentement	consentement	NOUN	S	Gender=Masc|Number=Sing	27	obl	_	_
44	préalable	préalable	ADJ	A	Number=Sing	43	amod	_	_
45	écrit	écrit	ADJ	A	Gender=Masc|Number=Sing	43	amod	_	_
46	de	de	ADP	E	_	47	case	_	_
47	Creative	Creative	PROPN	SP	_	43	nmod	_	_
48	Commons	Commons	PROPN	SP	_	47	flat:name	_	SpaceAfter=No
49	.	.	PUNCT	FS	_	27	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.

237 nodes (0%) are attached to their parents as `iobj`.

167 instances of `iobj` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.0042194092827.

The following 6 pairs of parts of speech are connected with `iobj`: [fr-pos/VERB]()-[fr-pos/PRON]() (185; 78% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (16; 7% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (15; 6% instances), [fr-pos/VERB]()-[fr-pos/ADP]() (11; 5% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (8; 3% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (2; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 iobj	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	président	président	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
3	Simon	Simon	PROPN	_	Gender=Masc|Number=Sing	2	flat:name	_	_
4	:	:	PUNCT	_	_	2	punct	_	_
5	rien	rien	PRON	_	Number=Sing|PronType=Rel	8	nsubj	_	_
6	ne	ne	ADV	_	_	8	advmod	_	_
7	lui	lui	PRON	_	Number=Sing|Person=3	8	iobj	_	_
8	échappe	échapper	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	_
9	!	!	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 iobj	color:blue
1	D'	de	ADP	_	_	5	advmod	_	SpaceAfter=No
2	abord	abord	NOUN	_	Gender=Masc|Number=Sing	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	arrive	arriver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	dans	dans	ADP	_	_	8	case	_	_
7	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	pays	pays	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	_
9	où	où	PRON	_	PronType=Rel	12	iobj	_	_
10	tout	tout	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	12	nsubj	_	_
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	blanc	blanc	ADJ	_	Gender=Masc|Number=Sing	8	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 iobj	color:blue
1	Nul	nul	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	3	nsubj	_	_
2	ne	ne	ADV	_	_	3	advmod	_	_
3	sait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	où	où	ADV	_	PronType=Int	7	iobj	_	_
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	piste	piste	NOUN	_	Gender=Fem|Number=Sing	7	nsubj	_	_
7	conduisait	conduire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	ccomp	_	_
8	ensuite	ensuite	ADV	_	_	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~



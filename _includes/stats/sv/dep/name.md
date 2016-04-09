

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

158 nodes (0%) are attached to their parents as `name`.

158 instances of `name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08227848101266.

The following 3 pairs of parts of speech are connected with `name`: [sv-pos/PROPN]()-[sv-pos/PROPN]() (156; 99% instances), [sv-pos/PROPN]()-[sv-pos/ADJ]() (1; 1% instances), [sv-pos/PROPN]()-[sv-pos/PUNCT]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 name	color:blue
1	8.	8.	NUM	RG|NOM	Case=Nom	3	nummod	_	_
2	Ur	ur	ADP	PP	_	3	case	_	_
3	A.	A.	PROPN	PM|NOM	Case=Nom	0	root	_	_
4	I.	I.	PROPN	PM|NOM	Case=Nom	3	name	_	_
5	Rabin	Rabin	PROPN	PM|NOM	Case=Nom	3	name	_	_
6	:	:	PUNCT	MID	_	3	punct	_	_
7	Kibbutzchildren	Kibbutzchildren	NOUN	NN	_	3	parataxis	_	_
8	-	-	PUNCT	MID	_	7	punct	_	_
9	Researchfindings	Researchfindings	NOUN	NN	_	7	parataxis	_	_
10	to	to	ADP	PP	_	9	advmod	_	_
11	Date	Date	NOUN	NN	_	10	mwe	_	_
12	.	.	PUNCT	MAD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 name	color:blue
1	Då	då	ADV	HA	_	6	advmod	_	_
2	Haussmann	Haussmann	PROPN	PM|NOM	Case=Nom	6	nsubj	_	_
3	och	och	CONJ	KN	_	2	cc	_	_
4	Napoleon	Napoleon	PROPN	PM|NOM	Case=Nom	2	conj	_	_
5	III	III	ADJ	RO|NOM	Case=Nom	4	name	_	_
6	skapade	skapa	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	11	advcl	_	_
7	det	en	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing	9	det	_	_
8	nutida	nutida	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	9	amod	_	_
9	Paris	Paris	PROPN	PM|GEN	Case=Gen	10	nmod:poss	_	_
10	centrum	centrum	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	6	dobj	_	_
11	strävade	sträva	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
12	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur	11	nsubj	_	_
13	att	att	PART	IE	_	14	mark	_	_
14	skapa	skapa	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	11	advcl	_	_
15	intryck	intryck	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	14	dobj	_	_
16	av	av	ADP	PP	_	17	case	_	_
17	monumentalitet	monumentalitet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	14	nmod	_	_
18	,	,	PUNCT	MID	_	14	punct	_	_
19	genom	genom	ADP	PP	_	21	case	_	_
20	breda	bred	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	21	amod	_	_
21	gator	gata	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	14	nmod	_	_
22	,	,	PUNCT	MID	_	21	punct	_	_
23	stora	stor	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	24	amod	_	_
24	torg	torg	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	21	conj	_	_
25	,	,	PUNCT	MID	_	21	punct	_	_
26	statyer	staty	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	21	conj	_	_
27	,	,	PUNCT	MID	_	21	punct	_	_
28	kolonner	kolonn	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	21	conj	_	_
29	,	,	PUNCT	MID	_	21	punct	_	_
30	palats	palats	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	21	conj	_	_
31	och	och	CONJ	KN	_	21	cc	_	_
32	offentliga	offentlig	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	33	amod	_	_
33	byggnader	byggnad	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	21	conj	_	_
34	i	i	ADP	PP	_	36	case	_	_
35	gatuperspektivens	gatuperspektiv	NOUN	NN|NEU|PLU|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Plur	36	nmod:poss	_	_
36	fond	fond	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	33	nmod	_	_
37	.	.	PUNCT	MAD	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 29 name	color:blue
1	Citaten	citat	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	3	nsubj	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	hämtade	hämta	ADJ	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
4	ur	ur	ADP	PP	_	9	case	_	_
5	Svenska	Svenska	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	6	amod	_	_
6	Dagbladets	Dagbladet	NOUN	NN|NEU|SIN|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Sing	7	nmod:poss	_	_
7	debatt	debatt	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	nmod	_	_
8	'	'	PUNCT	PAD	_	9	punct	_	_
9	Hemmafru	hemmafru	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	nmod	_	_
10	i	i	ADP	PP	_	11	case	_	_
11	skatteskruv	skatteskruv	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	nmod	_	_
12	'	'	PUNCT	PAD	_	9	punct	_	_
13	(	(	PUNCT	PAD	_	3	punct	_	_
14	vänstra	vänster	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	15	det	_	_
15	spalten	spalt	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	appos	_	_
16	,	,	PUNCT	MID	_	15	punct	_	_
17	rak	rak	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	18	amod	_	_
18	stil	stil	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	15	nmod	_	_
19	)	)	PUNCT	PAD	_	3	punct	_	_
20	och	och	CONJ	KN	_	3	cc	_	_
21	Kajsa	Kajsa	PROPN	PM|NOM	Case=Nom	3	conj	_	_
22	Ohrlander	Ohrlander	PROPN	PM|NOM	Case=Nom	21	name	_	_
23	:	:	PUNCT	MID	_	21	punct	_	_
24	Kvinnor	kvinna	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	21	nmod	_	_
25	som	som	CONJ	KN	_	26	mark	_	_
26	slavar	slav	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	24	acl	_	_
27	,	,	PUNCT	MID	_	24	punct	_	_
28	Aldus	Aldus	PROPN	PM|NOM	Case=Nom	24	nmod	_	_
29	/	/	PUNCT	MID	_	28	name	_	_
30	Bonniers	Bonniers	PROPN	PM|NOM	Case=Nom	28	name	_	_
31	,	,	PUNCT	MID	_	24	punct	_	_
32	13:75	13:75	NUM	RG|NOM	Case=Nom	24	nummod	_	_
33	(	(	PUNCT	PAD	_	21	punct	_	_
34	högra	höger	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	35	det	_	_
35	spalten	spalt	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	21	appos	_	_
36	,	,	PUNCT	MID	_	35	punct	_	_
37	kursiv	kursiv	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	38	amod	_	_
38	stil	stil	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	35	nmod	_	_
39	)	)	PUNCT	PAD	_	21	punct	_	_
40	.	.	PUNCT	MAD	_	3	punct	_	_

~~~



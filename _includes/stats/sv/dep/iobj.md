

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

126 nodes (0%) are attached to their parents as `iobj`.

126 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.27777777777778.

The following 4 pairs of parts of speech are connected with `iobj`: [sv-pos/VERB]()-[sv-pos/PRON]() (80; 63% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (41; 33% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (3; 2% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (2; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	3	nsubj	_	_
2	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	fråga	fråga	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
4	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	3	iobj	_	_
5	hur	hur	ADV	HA	_	8	advmod	_	_
6	dessa	denna	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Dem	7	det	_	_
7	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	8	nsubj	_	_
8	blir	bli	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Giftermålsbalken	giftermålsbalk	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	ger	ge	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	makarna	make	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	2	iobj	_	_
4	formell	formell	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	amod	_	_
5	likställighet	likställighet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	_	_
6	i	i	ADP	PP	_	7	case	_	_
7	äktenskapet	äktenskap	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	Den	den	PRON	PN|UTR|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Com|Number=Sing|PronType=Prs	5	nsubj	_	_
2	kommer	komma	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
3	tvärtom	tvärtom	ADV	AB	_	5	advmod	_	_
4	att	att	PART	IE	_	5	mark	_	_
5	ge	ge	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
6	enskilda	enskild	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	5	iobj	_	_
7	som	som	PRON	HP|-|-|-	PronType=Rel	8	nsubj	_	_
8	lyssnar	lyssna	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	_	_
9	till	till	ADP	PP	_	13	case	_	_
10	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	13	det	_	_
11	sådan	sån	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	13	amod	_	_
12	nyanserad	nyanserad	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	13	amod	_	_
13	information	information	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	obl	_	_
14	impulser	impuls	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	obj	_	_
15	till	till	ADP	PP	_	17	case	_	_
16	personlig	personlig	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	17	amod	_	_
17	avgörelse	avgörelse	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	obl	_	SpaceAfter=No
18	.	.	PUNCT	MAD	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

96 nodes (0%) are attached to their parents as `iobj`.

91 instances of `iobj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28125.

The following 3 pairs of parts of speech are connected with `iobj`: [sv-pos/VERB]()-[sv-pos/PRON]() (78; 81% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (15; 16% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (3; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Stillmans	_	PROPN	SG-GEN	_	2	nmod:poss	_	_
2	ansikte	_	NOUN	SG-IND-NOM	_	3	nsubj	_	_
3	sa	_	VERB	PAST-ACT	_	0	root	_	_
4	honom	_	PRON	PERS-P3SG-ACC	_	3	iobj	_	_
5	emellertid	_	ADV	_	_	3	advmod	_	_
6	fortfarande	_	ADV	_	_	3	advmod	_	_
7	ingenting	_	PRON	NEG-SG	_	3	obj	_	SpaceAfter=No
8	.	_	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 iobj	color:blue
1	Quinn	_	PROPN	SG-NOM	_	2	nsubj	_	_
2	stack	_	VERB	PAST-ACT	_	0	root	_	_
3	handen	_	NOUN	SG-DEF-NOM	_	2	obj	_	_
4	i	_	ADP	_	_	5	case	_	_
5	fickan	_	NOUN	SG-DEF-NOM	_	2	obl	_	_
6	och	_	CCONJ	_	_	7	cc	_	_
7	gav	_	VERB	PAST-ACT	_	2	conj	_	_
8	mannen	_	NOUN	SG-DEF-NOM	_	7	iobj	_	_
9	en	_	DET	SG-IND	_	10	det	_	_
10	dollar	_	NOUN	IND-NOM	_	7	obj	_	SpaceAfter=No
11	.	_	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 iobj	color:blue
1	I	_	ADP	_	_	3	case	_	_
2	samma	_	ADJ	POS-IND	_	3	amod	_	_
3	ögonblick	_	NOUN	IND-NOM	_	8	obl	_	_
4	han	_	PRON	PERS-P3SG-NOM	_	6	nsubj	_	_
5	hade	_	AUX	PAST-AUX	_	6	aux	_	_
6	ätit	_	VERB	SUP-ACT	_	3	acl:relcl	_	_
7	färdigt	_	ADV	_	_	6	obj	_	_
8	slet	_	VERB	PAST-ACT	_	0	root	_	_
9	moster	_	NOUN	SG-IND-NOM	_	8	nsubj	_	_
10	Petunia	_	PROPN	SG-NOM	_	8	iobj	_	_
11	bort	_	ADV	_	_	8	advmod	_	_
12	hans	_	PRON	P3SG-GEN	_	13	nmod:poss	_	_
13	tallrik	_	NOUN	SG-IND-NOM	_	8	obj	_	SpaceAfter=No
14	.	_	PUNCT	Period	_	8	punct	_	_

~~~



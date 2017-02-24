

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.
There are 1 language-specific subtypes of `expl`: [expl:pv]().

12 nodes (0%) are attached to their parents as `expl`.

11 instances of `expl` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75.

The following 12 pairs of parts of speech are connected with `expl`: [hr-pos/ADJ]()-[hr-pos/ADV]() (1; 8% instances), [hr-pos/ADJ]()-[hr-pos/PART]() (1; 8% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (1; 8% instances), [hr-pos/ADV]()-[hr-pos/ADV]() (1; 8% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (1; 8% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (1; 8% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (1; 8% instances), [hr-pos/PROPN]()-[hr-pos/ADV]() (1; 8% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (1; 8% instances), [hr-pos/VERB]()-[hr-pos/DET]() (1; 8% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (1; 8% instances), [hr-pos/VERB]()-[hr-pos/SCONJ]() (1; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl	color:blue
1	Poezija	poezija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj:pass	_	_
2	i	i	CCONJ	_	_	3	cc	_	_
3	proza	proza	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	_
4	višekratno	višekratno	ADV	_	Degree=Pos	7	advmod	_	_
5	su	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
6	joj	on	PRON	_	Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	expl	_	_
7	nagrađivane	nagrađivati	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
8	i	i	CCONJ	_	_	9	cc	_	_
9	objavljivane	objavljivati	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part	7	conj	_	_
10	u	u	ADP	_	Case=Loc	12	case	_	_
11	različitim	različit	ADJ	_	Case=Loc|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	12	amod	_	_
12	časopisima	časopis	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	9	obl	_	_
13	i	i	CCONJ	_	_	14	cc	_	_
14	zbornicima	zbornik	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	12	conj	_	SpaceAfter=No
15	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 expl	color:blue
1	Iako	iako	SCONJ	_	_	8	mark	_	_
2	su	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
3	crvenim	crven	ADJ	_	Case=Ins|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	tepihom	tepih	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	8	obl	_	_
5	u	u	ADP	_	Case=Loc	7	case	_	_
6	zagrebačkoj	zagrebački	ADJ	_	Case=Loc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
7	Dubravi	dubrava	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	4	nmod	_	_
8	prošetali	prošetati	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	17	advcl	_	_
9	svi	sav	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Tot	11	det	_	_
10	preostali	preostao	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	11	amod	_	_
11	stanari	stanar	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	8	nsubj	_	SpaceAfter=No
12	,	,	PUNCT	_	_	8	punct	_	_
13	prvi	prvi	ADJ	_	Case=Nom|Gender=Masc|Number=Sing|NumType=Ord	17	acl	_	_
14	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux	_	_
15	to	taj	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	17	obj	_	_
16	ipak	ipak	ADV	_	Degree=Pos	17	advmod	_	_
17	učinio	učiniti	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
18	Modni	modni	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	_
19	mačak	mačak	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	17	nsubj	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	odnosno	odnosno	ADV	_	Degree=Pos	22	expl	_	_
22	Marko	Marko	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	19	appos	_	_
23	Grubnić	Grubnić	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	22	flat	_	_
24	koji	koji	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	26	nsubj	_	_
25	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	aux	_	_
26	osvojio	osvojiti	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	19	acl	_	_
27	najmanje	malo	ADV	_	Degree=Sup|NumType=Card|PronType=Ind	28	det	_	_
28	simpatija	simpatija	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	26	obj	_	_
29	gledatelja	gledatelj	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	28	nmod	_	SpaceAfter=No
30	.	.	PUNCT	_	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 expl	color:blue
1	Štednja	štednja	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	_	_
2	kućanstava	kućanstvo	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	1	nmod	_	_
3	u	u	ADP	_	Case=Loc	4	case	_	_
4	bankama	banka	NOUN	_	Case=Loc|Gender=Fem|Number=Plur	1	nmod	_	_
5	u	u	ADP	_	Case=Loc	6	case	_	_
6	Bosni	Bosna	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	4	nmod	_	_
7	i	i	CCONJ	_	_	6	flat	_	_
8	Hercegovini	Hercegovina	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	6	flat	_	_
9	(	(	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	BiH	BiH	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	6	appos	_	SpaceAfter=No
11	)	)	PUNCT	_	_	10	punct	_	_
12	dosegnula	dosegnuti	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
13	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
14	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	expl	_	_
15	2,4	2,4	NUM	_	NumType=Card	16	compound	_	_
16	milijuna	milijun	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	17	nummod	_	_
17	eura	euro	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	12	obj	_	_
18	u	u	ADP	_	Case=Loc	19	case	_	_
19	rujnu	rujan	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	12	obl	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	pokazuju	pokazivati	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	parataxis	_	_
22	podatci	podatak	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	21	nsubj	_	_
23	Agencije	agencija	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	22	nmod	_	_
24	za	za	ADP	_	Case=Acc	25	compound	_	_
25	osiguranje	osiguranje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	23	compound	_	_
26	uloga	ulog	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	25	compound	_	_
27	BiH	BiH	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	23	compound	_	SpaceAfter=No
28	.	.	PUNCT	_	_	12	punct	_	_

~~~



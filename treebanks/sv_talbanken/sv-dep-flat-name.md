---
layout: base
title:  'Statistics of flat:name in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `flat:name`

This relation is a language-specific subtype of .

157 nodes (0%) are attached to their parents as `flat:name`.

157 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0828025477707.

The following 2 pairs of parts of speech are connected with `flat:name`: <tt><a href="sv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv-pos-PROPN.html">PROPN</a></tt> (156; 99% instances), <tt><a href="sv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	8.	8.	NUM	RG|NOM	Case=Nom|NumType=Card	3	nummod	_	_
2	Ur	ur	ADP	PP	_	3	case	_	_
3	A.	A.	PROPN	PM|NOM	Case=Nom	0	root	_	_
4	I.	I.	PROPN	PM|NOM	Case=Nom	3	flat:name	_	_
5	Rabin	Rabin	PROPN	PM|NOM	Case=Nom	3	flat:name	_	SpaceAfter=No
6	:	:	PUNCT	MID	_	3	punct	_	_
7	Kibbutzchildren	Kibbutzchildren	NOUN	NN	_	3	parataxis	_	_
8	-	-	PUNCT	MID	_	7	punct	_	_
9	Researchfindings	Researchfindings	NOUN	NN	_	7	parataxis	_	_
10	to	to	ADP	PP	_	9	advmod	_	_
11	Date	Date	NOUN	NN	_	10	fixed	_	SpaceAfter=No
12	.	.	PUNCT	MAD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Då	då	ADV	HA	_	6	advmod	_	_
2	Haussmann	Haussmann	PROPN	PM|NOM	Case=Nom	6	nsubj	_	_
3	och	och	CCONJ	KN	_	4	cc	_	_
4	Napoleon	Napoleon	PROPN	PM|NOM	Case=Nom	2	conj	_	_
5	III	III	ADJ	RO|NOM	Case=Nom	4	flat:name	_	_
6	skapade	skapa	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	11	advcl	_	_
7	det	en	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	9	det	_	_
8	nutida	nutida	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	9	amod	_	_
9	Paris	Paris	PROPN	PM|GEN	Case=Gen	10	nmod:poss	_	_
10	centrum	centrum	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	6	obj	_	_
11	strävade	sträva	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
12	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	11	nsubj	_	_
13	att	att	PART	IE	_	14	mark	_	_
14	skapa	skapa	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	11	advcl	_	_
15	intryck	intryck	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	14	obj	_	_
16	av	av	ADP	PP	_	17	case	_	_
17	monumentalitet	monumentalitet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	14	obl	_	SpaceAfter=No
18	,	,	PUNCT	MID	_	14	punct	_	_
19	genom	genom	ADP	PP	_	21	case	_	_
20	breda	bred	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	21	amod	_	_
21	gator	gata	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	14	obl	_	SpaceAfter=No
22	,	,	PUNCT	MID	_	24	punct	_	_
23	stora	stor	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	24	amod	_	_
24	torg	torg	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	21	conj	_	SpaceAfter=No
25	,	,	PUNCT	MID	_	26	punct	_	_
26	statyer	staty	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	21	conj	_	SpaceAfter=No
27	,	,	PUNCT	MID	_	28	punct	_	_
28	kolonner	kolonn	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	21	conj	_	SpaceAfter=No
29	,	,	PUNCT	MID	_	30	punct	_	_
30	palats	palats	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	21	conj	_	_
31	och	och	CCONJ	KN	_	33	cc	_	_
32	offentliga	offentlig	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	33	amod	_	_
33	byggnader	byggnad	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	21	conj	_	_
34	i	i	ADP	PP	_	36	case	_	_
35	gatuperspektivens	gatuperspektiv	NOUN	NN|NEU|PLU|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Plur	36	nmod:poss	_	_
36	fond	fond	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	33	nmod	_	SpaceAfter=No
37	.	.	PUNCT	MAD	_	11	punct	_	_

~~~



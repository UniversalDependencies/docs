---
layout: base
title:  'Statistics of flat:name in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `flat:name`

This relation is a language-specific subtype of .

157 nodes (0%) are attached to their parents as `flat:name`.

157 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0828025477707.

The following 2 pairs of parts of speech are connected with `flat:name`: <tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt> (156; 99% instances), <tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	8.	8.	NUM	RG|NOM	Case=Nom|NumType=Card	3	nummod	3:nummod	_
2	Ur	ur	ADP	PP	_	3	case	3:case	_
3	A.	A.	PROPN	PM|NOM	Case=Nom	0	root	0:root	_
4	I.	I.	PROPN	PM|NOM	Case=Nom	3	flat:name	3:flat:name	_
5	Rabin	Rabin	PROPN	PM|NOM	Case=Nom	3	flat:name	3:flat:name	SpaceAfter=No
6	:	:	PUNCT	MID	_	3	punct	3:punct	_
7	Kibbutzchildren	Kibbutzchildren	NOUN	NN	_	3	parataxis	3:parataxis	_
8	-	-	PUNCT	MID	_	7	punct	7:punct	_
9	Researchfindings	Researchfindings	NOUN	NN	_	7	parataxis	7:parataxis	_
10	to	to	ADP	PP	_	9	advmod	9:advmod	_
11	Date	Date	NOUN	NN	_	10	fixed	10:fixed	SpaceAfter=No
12	.	.	PUNCT	MAD	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Då	då	SCONJ	HA	_	6	mark	6:mark	_
2	Haussmann	Haussmann	PROPN	PM|NOM	Case=Nom	6	nsubj	6:nsubj	_
3	och	och	CCONJ	KN	_	4	cc	4:cc	_
4	Napoleon	Napoleon	PROPN	PM|NOM	Case=Nom	2	conj	2:conj:och|6:nsubj	_
5	III	III	ADJ	RO|NOM	Case=Nom	4	flat:name	4:flat:name	_
6	skapade	skapa	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	11	advcl	11:advcl:då	_
7	det	en	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	9	det	9:det	_
8	nutida	nutida	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	9	amod	9:amod	_
9	Paris	Paris	PROPN	PM|GEN	Case=Gen	10	nmod:poss	10:nmod:poss	_
10	centrum	centrum	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	6	obj	6:obj	_
11	strävade	sträva	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
12	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	11	nsubj	11:nsubj	_
13	att	att	PART	IE	_	14	mark	14:mark	_
14	skapa	skapa	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	11	advcl	11:advcl:att	_
15	intryck	intryck	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	14	obj	14:obj	_
16	av	av	ADP	PP	_	17	case	17:case	_
17	monumentalitet	monumentalitet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	14	obl	14:obl:av	SpaceAfter=No
18	,	,	PUNCT	MID	_	14	punct	14:punct	_
19	genom	genom	ADP	PP	_	21	case	21:case	_
20	breda	bred	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	21	amod	21:amod	_
21	gator	gata	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	14	obl	14:obl:genom	SpaceAfter=No
22	,	,	PUNCT	MID	_	24	punct	24:punct	_
23	stora	stor	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	24	amod	24:amod	_
24	torg	torg	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	21	conj	14:obl:genom|21:conj:och	SpaceAfter=No
25	,	,	PUNCT	MID	_	26	punct	26:punct	_
26	statyer	staty	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	21	conj	14:obl:genom|21:conj:och	SpaceAfter=No
27	,	,	PUNCT	MID	_	28	punct	28:punct	_
28	kolonner	kolonn	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	21	conj	14:obl:genom|21:conj:och	SpaceAfter=No
29	,	,	PUNCT	MID	_	30	punct	30:punct	_
30	palats	palats	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	21	conj	14:obl:genom|21:conj:och	_
31	och	och	CCONJ	KN	_	33	cc	33:cc	_
32	offentliga	offentlig	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	33	amod	33:amod	_
33	byggnader	byggnad	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	21	conj	14:obl:genom|21:conj:och	_
34	i	i	ADP	PP	_	36	case	36:case	_
35	gatuperspektivens	gatuperspektiv	NOUN	NN|NEU|PLU|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Plur	36	nmod:poss	36:nmod:poss	_
36	fond	fond	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	33	nmod	33:nmod:i	SpaceAfter=No
37	.	.	PUNCT	MAD	_	11	punct	11:punct	_

~~~



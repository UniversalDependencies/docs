---
layout: base
title:  'Statistics of fixed in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `fixed`

This relation is universal.

7 nodes (0%) are attached to their parents as `fixed`.

7 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14285714285714.

The following 4 pairs of parts of speech are connected with `fixed`: <tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_pud-pos-ADV.html">ADV</a></tt> (3; 43% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 29% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-ADV.html">ADV</a></tt> (1; 14% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 fixed	color:blue
1	Außerhalb	_	ADP	IN	_	2	case	_	_
2	Japans	_	PROPN	NNP	Case=Gen|Gender=Neut|Number=Sing|Person=3	12	obl	_	_
3	werden	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	12	aux:pass	_	_
4	die	_	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|Person=3	5	det	_	_
5	Kaiser	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	12	nsubj:pass	_	_
6	seit	_	ADP	IN	_	7	case	_	_
7	Kaiser	_	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	5	nmod	_	_
8	Shōwa	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	appos	_	_
9	bei	_	ADP	IN	_	11	case	_	_
10	ihren	_	PRON	DTP$	Case=Dat|Gender=Masc|Gender[psor]=Masc|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3|PronType=Prs	11	nmod:poss	_	_
11	Vornamen	_	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	12	obl	_	_
12	genannt	_	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
13	,	_	PUNCT	,	_	18	punct	_	_
14	und	_	CCONJ	CC	_	18	cc	_	_
15	zwar	_	ADV	RB	Degree=Pos	14	fixed	_	_
16	sowohl	_	CCONJ	CC	_	18	cc:preconj	_	_
17	zu	_	ADP	IN	_	18	case	_	_
18	Lebzeiten	_	NOUN	NN	Case=Dat|Gender=Fem|Number=Plur|Person=3	12	conj	_	_
19	als	_	CCONJ	CC	_	21	cc	_	_
20	auch	_	ADV	RB	Degree=Pos	19	advmod	_	_
21	posthum	_	ADV	RB	Degree=Pos	18	conj	_	SpaceAfter=No
22	.	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 fixed	color:blue
1	Die	_	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	2	det	_	_
2	Zensur	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	3	nsubj	_	_
3	schaltete	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	alle	_	DET	DT	Case=Acc|Definite=Ind|Gender=Fem|Number=Plur|Person=3	6	det	_	_
5	unerwünschten	_	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Person=3	6	amod	_	InflectionType=Weak
6	Meinungsäußerungen	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	3	obj	_	_
7	aus	_	VERB	DC	_	3	compound:prt	_	SpaceAfter=No
8	,	_	PUNCT	,	_	19	punct	_	_
9	eine	_	DET	DT	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Person=3	10	det	_	_
10	Teilnahme	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	19	nsubj	_	_
11	an	an	ADP	APPR	_	14	case	_	_
12	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|Person=3	14	det	_	_
13	öffentlichen	_	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing|Person=3	14	amod	_	InflectionType=Weak
14	Leben	_	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	10	nmod	_	_
15	war	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	19	aux	_	_
16	so	_	ADV	RB	Degree=Pos	19	advmod	_	_
17	gut	_	ADV	RB	Degree=Pos	16	fixed	_	_
18	wie	_	CCONJ	CC	_	16	fixed	_	_
19	unmöglich	_	ADJ	JJ	Degree=Pos	3	parataxis	_	_
20	geworden	_	AUX	VBN	Tense=Past	19	cop	_	SpaceAfter=No
21	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 fixed	color:blue
1	Die	_	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	2	det	_	_
2	Zensur	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	3	nsubj	_	_
3	schaltete	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	alle	_	DET	DT	Case=Acc|Definite=Ind|Gender=Fem|Number=Plur|Person=3	6	det	_	_
5	unerwünschten	_	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Person=3	6	amod	_	InflectionType=Weak
6	Meinungsäußerungen	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	3	obj	_	_
7	aus	_	VERB	DC	_	3	compound:prt	_	SpaceAfter=No
8	,	_	PUNCT	,	_	19	punct	_	_
9	eine	_	DET	DT	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Person=3	10	det	_	_
10	Teilnahme	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	19	nsubj	_	_
11	an	an	ADP	APPR	_	14	case	_	_
12	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|Person=3	14	det	_	_
13	öffentlichen	_	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing|Person=3	14	amod	_	InflectionType=Weak
14	Leben	_	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	10	nmod	_	_
15	war	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	19	aux	_	_
16	so	_	ADV	RB	Degree=Pos	19	advmod	_	_
17	gut	_	ADV	RB	Degree=Pos	16	fixed	_	_
18	wie	_	CCONJ	CC	_	16	fixed	_	_
19	unmöglich	_	ADJ	JJ	Degree=Pos	3	parataxis	_	_
20	geworden	_	AUX	VBN	Tense=Past	19	cop	_	SpaceAfter=No
21	.	_	PUNCT	.	_	3	punct	_	_

~~~



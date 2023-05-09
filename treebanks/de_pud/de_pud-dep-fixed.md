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
1	Außerhalb	außerhalb	ADP	IN	_	2	case	_	_
2	Japans	Japan	PROPN	NNP	Case=Gen|Gender=Neut|Number=Sing	12	obl	_	_
3	werden	werden	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	12	aux:pass	_	_
4	die	der	DET	DT	Case=Nom|Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	Kaiser	Kaiser	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	12	nsubj:pass	_	_
6	seit	seit	ADP	IN	_	7	case	_	_
7	Kaiser	Kaiser	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	5	nmod	_	_
8	Shōwa	Shōwa	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	7	appos	_	_
9	bei	bei	ADP	IN	_	11	case	_	_
10	ihren	ihr	DET	DTP$	Case=Dat|Gender=Masc|Gender[psor]=Masc|Number=Plur|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	11	det:poss	_	_
11	Vornamen	Vorname	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	12	obl	_	_
12	genannt	nennen	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
13	,	,	PUNCT	,	_	18	punct	_	_
14	und	und	CCONJ	CC	_	18	cc	_	_
15	zwar	zwar	ADV	RB	Degree=Pos	14	fixed	_	_
16	sowohl	sowohl	CCONJ	CC	_	18	cc:preconj	_	_
17	zu	zu	ADP	IN	_	18	case	_	_
18	Lebzeiten	Lebzeit	NOUN	NN	Case=Dat|Gender=Fem|Number=Plur	12	conj	_	_
19	als	als	CCONJ	CC	_	21	cc	_	_
20	auch	auch	ADV	RB	Degree=Pos	21	advmod	_	_
21	posthum	posthum	ADV	RB	Degree=Pos	18	conj	_	SpaceAfter=No
22	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 fixed	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Zensur	Zensur	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	schaltete	schalten	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	alle	alle	DET	DT	Case=Acc|Gender=Fem|Number=Plur|PronType=Tot	6	det	_	_
5	unerwünschten	unerwünscht	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	6	amod	_	InflectionType=Weak
6	Meinungsäußerungen	Meinungsäußerung	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur	3	obj	_	_
7	aus	aus	VERB	DC	_	3	compound:prt	_	SpaceAfter=No
8	,	,	PUNCT	,	_	20	punct	_	_
9	eine	ein	DET	DT	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	10	det	_	_
10	Teilnahme	Teilnahme	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	20	nsubj	_	_
11	an	an	ADP	APPR	_	14	case	_	_
12	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	14	det	_	_
13	öffentlichen	öffentlich	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing	14	amod	_	InflectionType=Weak
14	Leben	Leben	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	10	nmod	_	_
15	war	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	20	aux	_	_
16	so	so	ADV	RB	Degree=Pos	20	advmod	_	_
17	gut	gut	ADV	RB	Degree=Pos	16	fixed	_	_
18	wie	wie	CCONJ	CC	_	16	fixed	_	_
19	unmöglich	unmöglich	ADJ	JJ	Degree=Pos	20	xcomp	_	_
20	geworden	werden	VERB	VBN	Tense=Past	3	parataxis	_	SpaceAfter=No
21	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 fixed	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Zensur	Zensur	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	schaltete	schalten	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	alle	alle	DET	DT	Case=Acc|Gender=Fem|Number=Plur|PronType=Tot	6	det	_	_
5	unerwünschten	unerwünscht	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	6	amod	_	InflectionType=Weak
6	Meinungsäußerungen	Meinungsäußerung	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur	3	obj	_	_
7	aus	aus	VERB	DC	_	3	compound:prt	_	SpaceAfter=No
8	,	,	PUNCT	,	_	20	punct	_	_
9	eine	ein	DET	DT	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	10	det	_	_
10	Teilnahme	Teilnahme	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	20	nsubj	_	_
11	an	an	ADP	APPR	_	14	case	_	_
12	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	14	det	_	_
13	öffentlichen	öffentlich	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing	14	amod	_	InflectionType=Weak
14	Leben	Leben	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	10	nmod	_	_
15	war	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	20	aux	_	_
16	so	so	ADV	RB	Degree=Pos	20	advmod	_	_
17	gut	gut	ADV	RB	Degree=Pos	16	fixed	_	_
18	wie	wie	CCONJ	CC	_	16	fixed	_	_
19	unmöglich	unmöglich	ADJ	JJ	Degree=Pos	20	xcomp	_	_
20	geworden	werden	VERB	VBN	Tense=Past	3	parataxis	_	SpaceAfter=No
21	.	.	PUNCT	.	_	3	punct	_	_

~~~



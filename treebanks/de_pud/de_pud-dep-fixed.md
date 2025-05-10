---
layout: base
title:  'Statistics of fixed in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `fixed`

This relation is universal.

4 nodes (0%) are attached to their parents as `fixed`.

4 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 3 pairs of parts of speech are connected with `fixed`: <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 50% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 25% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Number=Plur|PronType=Art	4	det	_	_
2	US	US	ADJ	JJ	Case=Nom|Degree=Pos|Number=Plur	4	amod	_	InflectionType=Weak|Proper=True
3	Stock	Stock	NOUN	NN	Case=Nom|Number=Sing	4	compound	_	_
4	Futures	Future	NOUN	NN	Case=Nom|Number=Plur	5	nsubj	_	_
5	steigen	steigen	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
6	um	um	ADP	IN	_	10	case	_	_
7	mehr	mehr	ADV	RB	Degree=Pos|ExtPos=ADV	10	case	_	_
8	als	als	SCONJ	CC	_	7	fixed	_	_
9	1	1	NUM	CD	NumType=Card	10	nummod	_	_
10	%	%	SYM	SYM	_	5	obl	_	SpaceAfter=No
11	,	,	PUNCT	,	_	16	punct	_	_
12	ähnlich	ähnlich	ADV	RB	Degree=Pos	16	advmod	_	_
13	wie	wie	CCONJ	CC	_	16	cc	_	_
14	die	der	DET	DT	Case=Nom|Definite=Def|Number=Plur|PronType=Art	16	det	_	_
15	europäischen	europäisch	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	16	amod	_	InflectionType=Weak
16	Märkte	Markt	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	5	advcl	_	SpaceAfter=No
17	.	.	PUNCT	.	_	5	punct	_	_

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
16	so	so	ADV	RB	Degree=Pos|ExtPos=ADV	19	advmod	_	_
17	gut	gut	ADJ	RB	Degree=Pos	16	fixed	_	_
18	wie	wie	SCONJ	IN	_	16	fixed	_	_
19	unmöglich	unmöglich	ADJ	JJ	Degree=Pos	20	xcomp	_	_
20	geworden	werden	VERB	VBN	Tense=Past	3	parataxis	_	SpaceAfter=No
21	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 fixed	color:blue
1	Der	der	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Schritt	Schritt	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	verdeutlicht	verdeutlichen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	den	der	DET	DT	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Wunsch	Wunsch	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
6	des	der	DET	DT	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	Unternehmens	Unternehmen	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	,	_	19	punct	_	_
9	dass	dass	SCONJ	CC	_	19	mark	_	_
10	die	der	DET	DT	Case=Nom|Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	Anwender	Anwender	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	19	nsubj	_	_
12	in	in	ADP	IN	_	14	case	_	_
13	seinen	sein	DET	DTP$	Case=Dat|Gender=Neut|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	14	det:poss	_	_
14	Produkten	Produkt	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur	19	obl	_	_
15	mehr	mehr	ADV	RB	Degree=Pos|ExtPos=ADV	18	advmod	_	_
16	als	als	CCONJ	CC	_	15	fixed	_	_
17	nur	nur	ADV	RB	Degree=Pos	18	advmod	_	_
18	Produktivitätswerkzeuge	Produktivitätswerkzeug	NOUN	NN	Case=Acc|Gender=Neut|Number=Plur	19	obj	_	_
19	sehen	sehen	VERB	VB	_	5	acl	_	SpaceAfter=No
20	.	.	PUNCT	.	_	3	punct	_	_

~~~



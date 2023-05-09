---
layout: base
title:  'Statistics of acl in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="de_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

20 nodes (0%) are attached to their parents as `acl`.

17 instances of `acl` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.25.

The following 7 pairs of parts of speech are connected with `acl`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (7; 35% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (4; 20% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (3; 15% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (3; 15% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="de_pud-pos-X.html">X</a></tt>-<tt><a href="de_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 21 acl	color:blue
1	Es	es	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
2	gab	geben	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	ccomp	_	_
3	einen	ein	DET	DT	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|NumType=Card|PronType=Art	4	det	_	_
4	Punkt	Punkt	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	_
6	sagte	sagen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
7	Prasad	Prasad	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
8	Panvalker	Panvalker	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	7	flat:name	_	SpaceAfter=No
9	,	,	PUNCT	,	_	15	punct	_	_
10	an	an	ADP	IN	_	11	case	_	_
11	dem	der	PRON	REL	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem,Rel	15	obl	_	_
12	er	er	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
13	das	der	DET	DT	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	14	det	_	_
14	Gefühl	Gefühl	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	15	obj	_	_
15	hatte	haben	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	acl:relcl	_	SpaceAfter=No
16	,	,	PUNCT	,	_	21	punct	_	_
17	dass	dass	SCONJ	CC	_	21	mark	_	_
18	sie	er	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	21	nsubj	_	_
19	das	der	DET	DT	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	20	det	_	_
20	Gebäude	Gebäude	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	21	obj	_	_
21	verlassen	verlassen	VERB	VB	_	14	acl	_	_
22	sollten	sollen	AUX	VBC	Mood=Sub|Number=Plur|Person=3|Tense=Past	21	aux	_	SpaceAfter=No
23	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl	color:blue
1	Doch	doch	CCONJ	CC	_	6	cc	_	_
2	die	der	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
3	neugegründete	neugegründet	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	InflectionType=Weak
4	Republik	Republik	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	Proper=True
5	China	China	PROPN	NNP	Case=Nom|Gender=Neut|Number=Sing	4	appos	_	_
6	betrachtete	betrachten	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
7	die	der	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Mongolei	Mongolei	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
9	als	als	CCONJ	CC	_	10	cc	_	_
10	Teil	Teil	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	8	acl	_	_
11	ihres	ihr	DET	DTP$	Case=Gen|Gender=Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	13	det:poss	_	_
12	eigenen	eigen	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	InflectionType=Mixed
13	Territoriums	Territorium	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing	10	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 acl	color:blue
1	Genau	genau	ADV	RB	Degree=Pos	3	advmod	_	_
2	wie	wie	SCONJ	CC	_	3	case	_	_
3	Fjorde	Fjord	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	5	acl	_	_
4	sind	sein	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	7	cop	_	_
5	Süßwasserseen	Süßwassersee	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
6	oft	oft	ADV	RB	Degree=Pos	7	advmod	_	_
7	tief	tief	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~



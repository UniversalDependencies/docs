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

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (6; 30% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (4; 20% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (3; 15% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (3; 15% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (1; 5% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="de_pud-pos-X.html">X</a></tt>-<tt><a href="de_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 21 acl	color:blue
1	Es	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3	2	expl	_	_
2	gab	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	ccomp	_	_
3	einen	_	DET	DT	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|Person=3	4	det	_	_
4	Punkt	_	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	2	obj	_	SpaceAfter=No
5	,	_	PUNCT	,	_	4	punct	_	_
6	sagte	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
7	Prasad	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
8	Panvalker	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	flat:name	_	SpaceAfter=No
9	,	_	PUNCT	,	_	15	punct	_	_
10	an	_	ADP	IN	_	11	case	_	_
11	dem	_	PRON	REL	Case=Dat|Gender=Masc|Number=Sing|Person=3	15	obl	_	_
12	er	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	15	nsubj	_	_
13	das	_	DET	DT	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|Person=3	14	det	_	_
14	Gefühl	_	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing|Person=3	15	obj	_	_
15	hatte	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	acl:relcl	_	SpaceAfter=No
16	,	_	PUNCT	,	_	21	punct	_	_
17	dass	_	SCONJ	CC	_	21	mark	_	_
18	sie	_	PRON	PRP	Case=Nom|Number=Plur|Person=3	21	nsubj	_	_
19	das	_	DET	DT	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|Person=3	20	det	_	_
20	Gebäude	_	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing|Person=3	21	obj	_	_
21	verlassen	_	VERB	VB	_	14	acl	_	_
22	sollten	_	AUX	VBC	Mood=Sub|Number=Plur|Person=3|Tense=Past	21	aux	_	SpaceAfter=No
23	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl	color:blue
1	Doch	_	CCONJ	CC	_	6	cc	_	_
2	die	_	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	4	det	_	_
3	neugegründete	_	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Person=3	4	amod	_	InflectionType=Weak
4	Republik	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	6	nsubj	_	Proper=True
5	China	_	PROPN	NNP	Case=Nom|Gender=Neut|Number=Sing|Person=3	4	appos	_	_
6	betrachtete	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
7	die	_	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3	8	det	_	_
8	Mongolei	_	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing|Person=3	6	obj	_	_
9	als	_	CCONJ	CC	_	10	cc	_	_
10	Teil	_	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	8	acl	_	_
11	ihres	_	PRON	DTP$	Case=Gen|Gender=Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Prs	13	nmod:poss	_	_
12	eigenen	_	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Person=3	13	amod	_	InflectionType=Mixed
13	Territoriums	_	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing|Person=3	10	nmod	_	SpaceAfter=No
14	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 acl	color:blue
1	Genau	_	ADV	RB	Degree=Pos	3	advmod	_	_
2	wie	_	SCONJ	CC	_	3	case	_	_
3	Fjorde	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	5	acl	_	_
4	sind	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	7	cop	_	_
5	Süßwasserseen	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	7	nsubj	_	_
6	oft	_	ADV	RB	Degree=Pos	7	advmod	_	_
7	tief	_	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
8	.	_	PUNCT	.	_	7	punct	_	_

~~~



---
layout: base
title:  'Statistics of nmod:tmod in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="de_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

25 nodes (0%) are attached to their parents as `nmod:tmod`.

25 instances of `nmod:tmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2.

The following 3 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (20; 80% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (3; 12% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:tmod	color:blue
1	Ihr	ihr	DET	DTP$	Case=Nom|Gender=Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det:poss	_	_
2	Album	Album	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	_
3	Wild	Wild	ADJ	JJ	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	Proper=True
4	West	West	NOUN	NN	Case=Nom|Number=Sing	2	appos	_	Proper=True
5	aus	aus	ADP	IN	_	7	case	_	_
6	dem	der	DET	DT	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	Jahr	Jahr	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	2	nmod	_	_
8	1981	1981	NUM	CD	NumType=Card	7	nmod:tmod	_	_
9	war	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	10	cop	_	_
10	einer	ein	DET	NN	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|NumType=Card|PronType=Art	0	root	_	_
11	ihrer	ihr	DET	DTP$	Case=Gen|Gender=Masc|Gender[psor]=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	13	det:poss	_	_
12	größten	groß	ADJ	JJ	Case=Gen|Degree=Cmp|Gender=Masc|Number=Plur	13	amod	_	InflectionType=Mixed
13	Verkaufsschlager	Verkaufsschlager	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod:tmod	color:blue
1	Ab	ab	ADP	IN	_	3	case	_	_
2	dem	der	DET	DT	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	1	1	NOUN	NNA	Case=Dat|Gender=Masc|Number=Sing	14	obl	_	SpaceAfter=No|InflectionType=Weak
4	.	.	PUNCT	.	_	3	punct	_	_
5	Januar	Januar	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	3	nmod:tmod	_	_
6	wird	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	14	aux	_	_
7	es	es	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	expl	_	_
8	eine	ein	DET	DT	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	9	det	_	_
9	Preissteigerung	Preissteigerung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	14	obj	_	_
10	bei	bei	ADP	IN	_	11	case	_	_
11	Benzin	Benzin	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	14	obl	_	_
12	und	und	CCONJ	CC	_	13	cc	_	_
13	Diesel	Diesel	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	11	conj	_	_
14	geben	geben	VERB	VB	_	0	root	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:tmod	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Winteruniversiade	Winteruniversiade	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	7	nsubj:pass	_	_
3	2019	2019	NUM	CD	NumType=Card	2	nmod:tmod	_	Proper=True
4	wird	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	aux:pass	_	_
5	von	von	ADP	IN	_	6	case	_	_
6	Krasnojarsk	Krasnojarsk	PROPN	NNP	Case=Dat|Gender=Neut|Number=Sing	7	obl:agent	_	_
7	ausgerichtet	ausrichten	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~



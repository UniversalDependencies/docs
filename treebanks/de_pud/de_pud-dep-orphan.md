---
layout: base
title:  'Statistics of orphan in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `orphan`

This relation is universal.

10 nodes (0%) are attached to their parents as `orphan`.

5 instances of `orphan` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 8 pairs of parts of speech are connected with `orphan`: <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (3; 30% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 10% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="de_pud-pos-PART.html">PART</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 10% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 orphan	color:blue
1	Durán	Durán	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	fungiert	fungieren	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	als	als	CCONJ	CC	_	2	cc	_	_
4	Sprecher	Sprecher	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	2	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	_
6	Ángel	Ángel	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	4	conj	_	orig_deprel=nsubj
7	Pintado	Pintado	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	6	flat:name	_	_
8	als	als	CCONJ	CC	_	6	orphan	_	orig_deprel=cc
9	Schatzmeister	Schatzmeister	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	6	orphan	_	SpaceAfter=No|orig_deprel=root
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 orphan	color:blue
1	Eine	ein	DET	DT	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	3	det	_	_
2	schwedische	schwedisch	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	InflectionType=Mixed|Proper=True
3	Studie	Studie	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
4	zeigt	zeigen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	15	punct	_	_
6	dass	dass	SCONJ	CC	_	15	mark	_	_
7	die	der	DET	DT	Case=Nom|Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	Tiere	Tier	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur	15	nsubj	_	_
9	jenseits	jenseits	ADP	IN	_	12	case	_	_
10	der	der	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
11	zweimonatigen	zweimonatig	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	InflectionType=Weak
12	Brutzeit	Brutzeit	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	15	obl	_	_
13	nur	nur	ADV	RB	Degree=Pos	14	advmod	_	_
14	selten	selten	ADV	RB	Degree=Pos	15	advmod	_	_
15	landen	landen	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	4	ccomp	_	SpaceAfter=No
16	,	,	PUNCT	,	_	18	punct	_	_
17	wenn	wenn	CCONJ	CC	_	18	orphan	_	orig_deprel=mark
18	überhaupt	überhaupt	ADV	RB	Degree=Pos	15	conj	_	SpaceAfter=No|orig_deprel=advmod
19	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 orphan	color:blue
1	Zuerst	zuerst	ADV	RB	Degree=Pos	2	advmod	_	_
2	begann	beginnen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	eine	ein	DET	NN	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	2	nsubj	_	_
4	der	der	DET	DT	Case=Gen|Definite=Def|Number=Plur|PronType=Art	7	det	_	_
5	Yazidi	Yazidi	PROPN	NNP	Case=Gen|Gender=Fem|Number=Plur	7	compound	_	SpaceAfter=No
6	-	-	PUNCT	-	_	5	punct	_	SpaceAfter=No
7	Frauen	Frau	NOUN	NN	Case=Gen|Gender=Fem|Number=Plur	3	nmod	_	_
8	zu	zu	PART	RP	_	9	mark	_	_
9	weinen	weinen	VERB	VB	_	2	xcomp	_	SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	_	_
11	dann	dann	ADV	RB	Degree=Pos	12	orphan	_	orig_deprel=advmod
12	eine	ein	DET	NN	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	2	conj	_	orig_deprel=nsubj
13	ihrer	ihr	DET	DTP$	Case=Gen|Gender=Fem|Gender[psor]=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	14	det:poss	_	_
14	Freundinnen	Freundin	NOUN	NN	Case=Gen|Gender=Fem|Number=Plur	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~



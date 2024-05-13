---
layout: base
title:  'Statistics of cop in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `cop`

This relation is universal.

275 nodes (1%) are attached to their parents as `cop`.

187 instances of `cop` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.98545454545455.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (151; 55% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (104; 38% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (7; 3% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-X.html">X</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 cop	color:blue
1	Was	was	PRON	WP	Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	3	obj	_	_
2	sie	sie	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	sagt	sagen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	und	und	CCONJ	CC	_	7	cc	_	_
5	was	was	PRON	WP	Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	7	obj	_	_
6	sie	sie	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
7	tut	tun	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	conj	_	_
8	-	-	PUNCT	-	_	12	punct	_	_
9	eigentlich	eigentlich	ADV	RB	Degree=Pos	12	advmod	_	_
10	ist	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	12	cop	_	_
11	es	es	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
12	unglaublich	unglaublich	ADJ	JJ	Degree=Pos	3	parataxis	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 cop	color:blue
1	Manchmal	manchmal	ADV	RB	Degree=Pos	6	advmod	_	_
2	ist	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
3	das	der	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	nsubj	_	_
4	wie	wie	CCONJ	CC	_	6	cc	_	_
5	eine	ein	DET	DT	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	6	det	_	_
6	Superkraft	Superkraft	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cop	color:blue
1	Ihr	ihr	DET	DTP$	Case=Nom|Gender=Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det:poss	_	_
2	Album	Album	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	_
3	Wild	Wild	ADJ	JJ	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	Proper=True
4	West	West	NOUN	NN	Case=Nom|Number=Sing	2	appos	_	Proper=True
5	aus	aus	ADP	IN	_	7	case	_	_
6	dem	der	DET	DT	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	Jahr	Jahr	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	2	nmod	_	_
8	1981	1981	NUM	CD	NumType=Card	7	obl:tmod	_	_
9	war	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	10	cop	_	_
10	einer	ein	DET	NN	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|NumType=Card|PronType=Art	0	root	_	_
11	ihrer	ihr	DET	DTP$	Case=Gen|Gender=Masc|Gender[psor]=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	13	det:poss	_	_
12	größten	groß	ADJ	JJ	Case=Gen|Degree=Cmp|Gender=Masc|Number=Plur	13	amod	_	InflectionType=Mixed
13	Verkaufsschlager	Verkaufsschlager	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	10	punct	_	_

~~~



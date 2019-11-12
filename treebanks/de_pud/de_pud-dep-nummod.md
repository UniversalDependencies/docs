---
layout: base
title:  'Statistics of nummod in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `nummod`

This relation is universal.

226 nodes (1%) are attached to their parents as `nummod`.

159 instances of `nummod` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1283185840708.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (201; 89% instances), <tt><a href="de_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (22; 10% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	3	det	_	_
2	aktuelle	aktuell	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Person=3	3	amod	_	InflectionType=Weak
3	Wartezeit	Wartezeit	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	4	nsubj	_	_
4	beträgt	betragen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	acht	acht	NUM	CD	NumType=Card	6	nummod	_	_
6	Wochen	Woche	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	4	obl:tmod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	5.000	5.000	NUM	CD	NumType=Card	2	nummod	_	_
2	$	$	SYM	SYM	_	0	root	_	_
3	pro	pro	ADP	IN	_	4	case	_	_
4	Person	Person	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	_	_
6	das	der	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|Person=3	8	det	_	_
7	erlaubte	erlaubt	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Person=3	8	amod	_	InflectionType=Weak
8	Maximum	Maximum	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing|Person=3	2	appos	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 nummod	color:blue
1	Zwei	zwei	NUM	CD	NumType=Card	2	nummod	_	_
2	Jahre	Jahr	NOUN	NN	Case=Acc|Gender=Neut|Number=Plur|Person=3	3	obl:tmod	_	_
3	später	spät	ADV	RB	Degree=Cmp	4	advmod	_	_
4	steht	stehen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	Jutting	Jutting	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	,	_	8	punct	_	_
7	mittlerweile	mittlerweile	ADV	RB	Degree=Pos	8	advmod	_	_
8	31	31	NUM	CD	NumType=Card	4	nummod	_	SpaceAfter=No
9	,	,	PUNCT	,	_	13	punct	_	_
10	vor	vor	ADP	IN	_	13	case	_	_
11	dem	der	DET	DT	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|Person=3	13	det	_	_
12	High	High	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Person=3	13	amod	_	Proper=True
13	Court	Court	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	4	obl	_	Proper=True
14	von	von	ADP	IN	_	15	case	_	_
15	Hong	Hong	PROPN	NNP	Case=Dat|Gender=Neut|Number=Sing|Person=3	13	nmod	_	_
16	Kong	Kong	PROPN	NNP	Case=Dat|Gender=Neut|Number=Sing|Person=3	15	flat:name	_	SpaceAfter=No
17	,	,	PUNCT	,	_	18	punct	_	_
18	angeklagt	anklagen	VERB	VBN	Tense=Past|VerbForm=Part	4	ccomp	_	_
19	wegen	wegen	ADP	IN	_	21	case	_	_
20	zweifachen	zweifach	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Person=3	21	amod	_	InflectionType=Strong
21	Mordes	Mord	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing|Person=3	18	obl	_	_
22	und	und	CCONJ	CC	_	24	cc	_	_
23	der	der	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3	24	det	_	_
24	Verhinderung	Verhinderung	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing|Person=3	21	conj	_	_
25	eines	ein	DET	DT	Case=Gen|Definite=Ind|Gender=Neut|Number=Sing|Person=3	27	det	_	_
26	rechtmäßigen	rechtmäßig	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Person=3	27	amod	_	InflectionType=Mixed
27	Begräbnisses	Begräbnis	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing|Person=3	24	nmod	_	SpaceAfter=No
28	.	.	PUNCT	.	_	4	punct	_	_

~~~



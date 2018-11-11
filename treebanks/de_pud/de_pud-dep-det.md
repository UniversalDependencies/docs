---
layout: base
title:  'Statistics of det in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="de_pud-dep-det-predet.html">det:predet</a></tt>.

2736 nodes (13%) are attached to their parents as `det`.

2734 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46052631578947.

The following 8 pairs of parts of speech are connected with `det`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (2602; 95% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (122; 4% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-X.html">X</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="de_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 det	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Er	er	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	arbeitete	arbeiten	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	ein	ein	DET	DT	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|Person=3	4	det	_	_
4	Jahrzent	Jahrzent	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing|Person=3	2	obl:tmod	_	_
5	für	für	ADP	IN	_	7	case	_	_
6	die	der	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3	7	det	_	_
7	BBC	BBC	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing|Person=3	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	Vier	vier	NUM	CD	NumType=Card	2	nummod	_	_
2	weitere	weiter	NOUN	NN	Case=Nom|Number=Plur|Person=3	3	nsubj	_	_
3	geben	geben	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
4	die	der	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3	9	det	_	_
5	minimale	minimal	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Person=3	9	amod	_	InflectionType=Weak
6	und	und	CCONJ	CC	_	8	cc	_	_
7	die	der	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3	8	det	_	_
8	maximale	maximal	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Person=3	5	amod	_	InflectionType=Weak
9	Neigung	Neigung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	3	obj	_	_
10	des	der	DET	DT	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3	11	det	_	_
11	Vollmondes	Vollmond	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing|Person=3	9	nmod	_	_
12	an	an	VERB	DC	_	3	compound:prt	_	SpaceAfter=No
13	;	;	PUNCT	:	_	18	punct	_	_
14	und	und	CCONJ	CC	_	18	cc	_	_
15	zwar	zwar	ADV	RB	Degree=Pos	14	fixed	_	_
16	in	in	ADP	APPR	_	18	case	_	_
17	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|Person=3	18	det	_	_
18	Sommer	Sommer	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	3	conj	_	_
19	und	und	CCONJ	CC	_	22	cc	_	_
20	in	in	ADP	APPR	_	22	case	_	_
21	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|Person=3	22	det	_	_
22	Winter	Winter	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	18	conj	_	_

~~~


